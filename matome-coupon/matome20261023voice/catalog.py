"""Collect the public bulk-buy catalogue using the sibling catalogue's storage format."""
from __future__ import annotations
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import importlib.util
import json
import math
from pathlib import Path
import re
import time
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location('coupon_catalog', ROOT.parent / 'dlsite-coupon-20261016' / 'catalog.py')
base = importlib.util.module_from_spec(spec)
spec.loader.exec_module(base)
base.ROOT = ROOT
base.DATA, base.RAW, base.IMAGES = (ROOT / name for name in ('data', 'raw', 'images'))
CAMPAIGN = 'matome20261023voice'
SOURCE = ('https://www.dlsite.com/girls/campaign/bulkbuy/=/key/' + CAMPAIGN
          + '/?site_group%5B0%5D=girls&ai%5B0%5D=AIG')
ENDPOINT = SOURCE.replace('/bulkbuy/=/key/', '/bulkbuy/ajax/=/key/')
PER_PAGE = 50
primary_fetch = base.fetch


def fetch_with_tls_retry(url, destination):
    try:
        return primary_fetch(url, destination)
    except RuntimeError as error:
        if 'schannel' not in str(error).lower():
            raise
        # Retry curl's Windows TLS transport error with Python's verified HTTPS transport.
        request = Request(url, headers={'User-Agent': 'Mozilla/5.0',
                                       'Referer': 'https://www.dlsite.com/girls/'})
        with urlopen(request, timeout=50) as response:
            content = response.read()
        if not content:
            raise ValueError('Empty HTTPS retry response: ' + url)
        temporary = destination.with_suffix(destination.suffix + '.part')
        temporary.write_bytes(content)
        base.replace_file(temporary, destination)
        return content


base.fetch = fetch_with_tls_retry


def parse_page(payload, page, url):
    info = payload['page_info']
    root = base.html.fromstring(payload['search_result'])
    records = []
    for item in root.xpath('//li[@data-workno]'):
        rj = item.get('data-workno')
        if not re.fullmatch(r'RJ\d+', rj):
            raise ValueError('Unexpected work number: ' + rj)
        title = item.xpath('.//dd[' + base.cls('work_name') + ']//a')[0]
        circle = item.xpath('.//dd[' + base.cls('maker_name') + ']/a')[0]
        cover = ''
        for image in item.xpath('.//div[' + base.cls('work_img_popover') + ']//img'):
            match = re.search(r"'(//img\.dlsite\.jp/[^']+_img_main\.[a-zA-Z]+)'", image.get(':src', ''))
            if match:
                cover = 'https:' + match.group(1)
                break
        if not cover:
            candidates = item.xpath('.//img/@src')
            cover = next((('https:' + s if s.startswith('//') else s)
                          for s in candidates if s.startswith(('//img.dlsite.jp/', 'https://img.dlsite.jp/'))), '')
        if not cover:
            raise ValueError('BK source missing: ' + rj)
        circle_url = circle.get('href')
        circle_id = re.search(r'/maker_id/(RG\d+)', circle_url)
        records.append({'rj': rj, 'title': base.text(title), 'voice_actors': [],
            'voices_complete': False, 'voices_source': 'pending',
            'circle': {'id': circle_id.group(1) if circle_id else None,
                       'name': base.text(circle), 'url': circle_url},
            'url': title.get('href'),
            'bk': {'source_url': cover, 'path': None, 'width': None, 'height': None,
                   'is_placeholder': False},
            'source_page': page, 'source_url': url, 'fetched_at': base.now()})
    return records, info


def save_thumbnail(work):
    try:
        return base.save_thumbnail(work)
    except Exception as original_error:
        # Use the exact official list thumbnail if the full-size asset is unavailable.
        cached = base.RAW / 'lists' / f'page-{work["source_page"]:03d}.json'
        payload = json.loads(cached.read_text(encoding='utf-8'))
        root = base.html.fromstring(payload['search_result'])
        items = root.xpath('//li[@data-workno="' + work['rj'] + '"]')
        candidates = items[0].xpath('.//dt//a/img/@src') if items else []
        thumbnail = next((('https:' + s if s.startswith('//') else s) for s in candidates
                          if s.startswith(('//img.dlsite.jp/', 'https://img.dlsite.jp/'))), '')
        if not thumbnail or thumbnail == work['bk']['source_url']:
            raise original_error
        original = work['bk']['source_url']
        work['bk']['source_url'] = thumbnail
        try:
            result = base.save_thumbnail(work)
        except Exception:
            work['bk']['source_url'] = original
            raise
        work['bk']['original_source_url'] = original
        work['bk']['source_note'] = 'Official listing thumbnail; full-size source unavailable'
        work['bk']['fallback_used'] = True
        return result


def enrich(work):
    failures = []
    if not work['voices_complete']:
        try:
            api = 'https://www.dlsite.com/girls/api/=/product.json?workno=' + work['rj']
            product = json.loads(base.fetch(api, base.RAW / 'products' / (work['rj'] + '.json')))
            if isinstance(product, list):
                product = next((p for p in product if isinstance(p, dict)
                                and p.get('workno') == work['rj']), {})
            product = product.get(work['rj'], product)
            if product.get('workno') != work['rj']:
                raise ValueError('Product API returned a different work number')
            creators = product.get('creaters') or {}
            actors = creators.get('voice_by')
            if actors:
                names = [a['name'].strip() for a in actors if a.get('name', '').strip()]
            elif product.get('voice_by'):
                names = [s.strip() for s in re.split(r'\s*/\s*', product['voice_by']) if s.strip()]
            elif 'voice_by' in product:
                names = []
            else:
                raise ValueError('Voice actor fields missing in product API')
            work.update(voice_actors=list(dict.fromkeys(names)), voices_complete=True,
                        voices_source='product_api', voices_source_url=api)
        except Exception as error:
            failures.append({'rj': work['rj'], 'stage': 'voices', 'reason': str(error)})
    if work['voices_complete'] and not work['voice_actors'] and work['voices_source'] != 'detail_not_listed':
        try:
            work['voice_actors'] = base.detail_voices(work)
            work['voices_source'] = 'detail' if work['voice_actors'] else 'detail_not_listed'
            work['voices_source_url'] = work['url']
        except Exception as error:
            work['voices_complete'] = False
            failures.append({'rj': work['rj'], 'stage': 'voices_detail', 'reason': str(error)})
    if not work['bk']['path']:
        try:
            work['bk'].update(save_thumbnail(work))
        except Exception as error:
            failures.append({'rj': work['rj'], 'stage': 'bk', 'reason': str(error)})
    return work, failures


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--stage', choices=['lists', 'assets', 'all', 'export'], default='all')
    args = parser.parse_args()
    for directory in (base.DATA, base.RAW, base.IMAGES):
        directory.mkdir(parents=True, exist_ok=True)
    previous = base.DATA / 'works.json'
    saved = json.loads(previous.read_text(encoding='utf-8')) if previous.exists() else {}
    works = saved.get('works', [])
    for work in works:
        if work['bk'].get('original_source_url'):
            work['bk']['fallback_used'] = True
    meta = saved.get('metadata', {'schema_version': 1, 'campaign_id': CAMPAIGN,
        'source_url': SOURCE, 'started_at': base.now(), 'thumbnail_max_width': base.THUMB_WIDTH,
        'scope': 'TL/otome; AI-generated excluded; no language restriction; separate RJ editions retained',
        'completed_pages': [], 'errors': []})
    try:
        if args.stage in ('lists', 'all'):
            found = {w['rj']: w for w in works}
            page = 1
            while page <= meta.get('page_count', 1):
                if page in meta['completed_pages']:
                    page += 1
                    continue
                url = ENDPOINT + '&order=trend&per_page=' + str(PER_PAGE) + '&page=' + str(page)
                payload = json.loads(base.fetch(url, base.RAW / 'lists' / f'page-{page:03d}.json'))
                records, info = parse_page(payload, page, url)
                total = int(info['count'])
                if page == 1:
                    meta.update(expected_count=total, page_count=math.ceil(total / PER_PAGE))
                if total != meta['expected_count']:
                    raise ValueError('Official count changed during collection')
                expected = min(PER_PAGE, total - (page - 1) * PER_PAGE)
                if len(records) != expected or int(info['first_indice']) != (page - 1) * PER_PAGE + 1:
                    raise ValueError('Unexpected listing page size or position: ' + str(page))
                for work in records:
                    if work['rj'] in found and found[work['rj']]['source_page'] != page:
                        raise ValueError('Listing order shifted; duplicate across pages: ' + work['rj'])
                    found.setdefault(work['rj'], work)
                works = list(found.values())
                meta['completed_pages'].append(page)
                base.export(works, meta)
                print(f'LIST {page}/{meta["page_count"]}: {len(works)}/{total}', flush=True)
                page += 1
                time.sleep(0.5)
        if args.stage in ('assets', 'all'):
            if not works:
                raise ValueError('Collect listing pages first')
            pending = [w for w in works if not w['voices_complete'] or not w['bk']['path']
                       or (not w['voice_actors'] and w['voices_source'] != 'detail_not_listed')]
            errors = []
            by_rj = {w['rj']: w for w in works}
            with ThreadPoolExecutor(max_workers=4) as pool:
                futures = [pool.submit(enrich, dict(w, bk=dict(w['bk']))) for w in pending]
                for done, future in enumerate(as_completed(futures), 1):
                    work, failures = future.result()
                    by_rj[work['rj']] = work
                    errors.extend(failures)
                    if done % 40 == 0 or done == len(pending):
                        works = list(by_rj.values())
                        meta['errors'] = errors
                        base.export(works, meta)
                        print(f'ASSETS {done}/{len(pending)}; BK {meta["thumbnail_count"]}; '
                              f'voices {meta["complete_voice_count"]}; errors {len(errors)}', flush=True)
            works = list(by_rj.values())
            meta['errors'] = errors
        base.export(works, meta)
    except Exception as error:
        meta['errors'].append({'stage': args.stage, 'reason': str(error)})
        base.export(works, meta)
        raise
    print(json.dumps({key: meta.get(key) for key in ('expected_count', 'collected_count',
        'thumbnail_count', 'complete_voice_count', 'complete')}), flush=True)


if __name__ == '__main__':
    main()
