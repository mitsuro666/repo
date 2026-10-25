"""Append region-visible missing works using fresh official lists and the system proxy."""
from concurrent.futures import ThreadPoolExecutor, as_completed
from copy import deepcopy
from datetime import datetime, timezone
import argparse
import importlib.util
import io
import json
import math
from pathlib import Path
import re
import shutil
import subprocess
import time
from urllib.parse import urlparse
from urllib.request import getproxies
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent
NAMES = ['matome20261023voice', 'dlsite-coupon-20261016']
RUN = ROOT / NAMES[0] / 'raw' / 'jp-refresh-20261025'
PROXY = getproxies().get('https') or getproxies().get('http')


def load(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


coupon = load('jp_coupon', ROOT / NAMES[1] / 'catalog.py')
bulk = load('jp_bulk', ROOT / NAMES[0] / 'catalog.py')
language = load('jp_language', ROOT / NAMES[0] / 'language.py')


def write(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    temporary.replace(path)


def fetch(url, destination):
    if urlparse(url).hostname not in {'www.dlsite.com', 'img.dlsite.jp'}:
        raise ValueError('Unexpected source host: ' + url)
    if not PROXY:
        raise RuntimeError('No system proxy is configured; refusing a region refresh without it')
    if destination.is_file() and destination.stat().st_size:
        return destination.read_bytes()
    error = ''
    for attempt in range(3):
        command = ['curl.exe', '--silent', '--show-error', '--fail', '--location',
                   '--proxy', PROXY, '--connect-timeout', '10', '--max-time', '35',
                   '--user-agent', 'Mozilla/5.0', '--referer', 'https://www.dlsite.com/girls/', url]
        result = subprocess.run(command, capture_output=True)
        if not result.returncode and result.stdout:
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(result.stdout)
            return result.stdout
        error = result.stderr.decode('utf-8', errors='replace')
        if '403' in error or '429' in error:
            raise RuntimeError(error.strip())
        if attempt < 2:
            time.sleep(1 + attempt)
    raise RuntimeError(error.strip() or 'Empty response: ' + url)


def lists(name, original):
    snapshot = RUN / (name + '.json')
    if snapshot.is_file():
        result = json.loads(snapshot.read_text(encoding='utf-8'))
        old_ids = {w['rj'] for w in original['works']}
        new_ids = {w['rj'] for w in result['works']}
        result.update(added=sorted(new_ids - old_ids), missing_old=sorted(old_ids - new_ids))
        return result
    source = original['metadata']['source_url']
    per_page = 50 if name == NAMES[0] else 100
    def page(number):
        if name == NAMES[0]:
            url = source.replace('/bulkbuy/=/key/', '/bulkbuy/ajax/=/key/')
            url += '&order=trend&per_page=50&page=' + str(number)
            data = json.loads(fetch(url, RUN / name / 'lists' / f'page-{number:03d}.json'))
            works, info = bulk.parse_page(data, number, url)
            return number, works, int(info['count'])
        url = source + '/per_page/100/page/' + str(number)
        data = fetch(url, RUN / name / 'lists' / f'page-{number:03d}.html')
        works, total = coupon.parse_listing(data, number, url)
        return number, works, total
    _, first, total = page(1)
    count = math.ceil(total / per_page)
    pages = {1: first}
    with ThreadPoolExecutor(max_workers=3) as pool:
        futures = [pool.submit(page, number) for number in range(2, count + 1)]
        for future in as_completed(futures):
            number, works, observed_total = future.result()
            if observed_total != total:
                raise ValueError('Official count changed during refresh: ' + name)
            pages[number] = works
            if len(pages) % 5 == 0 or len(pages) == count:
                print(f'LIST {name}: {len(pages)}/{count} pages', flush=True)
    works = [work for number in sorted(pages) for work in pages[number]]
    if len(works) != total or len({w['rj'] for w in works}) != total:
        raise ValueError('Incomplete or shifted listing; retry with a fresh snapshot: ' + name)
    old_ids = {w['rj'] for w in original['works']}
    new_ids = {w['rj'] for w in works}
    result = {'count': total, 'pages': count, 'works': works,
              'added': sorted(new_ids - old_ids), 'missing_old': sorted(old_ids - new_ids)}
    write(snapshot, result)
    print(f'SNAPSHOT {name}: {total}; new {len(result["added"])}; missing old {len(result["missing_old"])}', flush=True)
    return result


def enrich(record):
    rj = record['rj']
    cached = RUN / 'enriched' / (rj + '.json')
    if cached.is_file() and (RUN / 'images' / (rj + '.webp')).is_file():
        return json.loads(cached.read_text(encoding='utf-8'))
    work = deepcopy(record)
    api = 'https://www.dlsite.com/girls/api/=/product.json?workno=' + rj
    data = json.loads(fetch(api, RUN / 'products' / (rj + '.json')))
    if isinstance(data, list):
        data = next((item for item in data if isinstance(item, dict) and item.get('workno') == rj), {})
    data = data.get(rj, data)
    if data.get('workno') != rj:
        raise ValueError('Unexpected product API response: ' + rj)
    actors = (data.get('creaters') or {}).get('voice_by')
    if actors:
        voices = [item['name'].strip() for item in actors if item.get('name', '').strip()]
    elif data.get('voice_by'):
        voices = [item.strip() for item in re.split(r'\s*/\s*', data['voice_by']) if item.strip()]
    elif 'voice_by' in data:
        voices = []
    else:
        raise ValueError('Voice actor fields missing: ' + rj)
    work.update(voice_actors=list(dict.fromkeys(voices)), voices_complete=True,
                voices_source='product_api', voices_source_url=api)
    if not voices:
        work['voice_actors'] = language.base.detail_voices(work)
        work['voices_source'] = 'detail' if work['voice_actors'] else 'detail_not_listed'
        work['voices_source_url'] = work['url']
    cover = RUN / 'images' / (rj + '.webp')
    cover.parent.mkdir(parents=True, exist_ok=True)
    content = fetch(work['bk']['source_url'], RUN / 'covers' / (rj + '.img'))
    with Image.open(io.BytesIO(content)) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        if image.width > 320:
            image = image.resize((320, max(1, round(image.height * 320 / image.width))), Image.Resampling.LANCZOS)
        image.save(cover, 'WEBP', quality=86, method=4)
        work['bk'].update(path='images/' + cover.name, width=image.width, height=image.height)
    work, errors = language.collect(work)
    result = {'work': work, 'language_errors': errors}
    write(cached, result)
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--stage', choices=['lists', 'enrich', 'apply'], default='lists')
    args = parser.parse_args()
    originals = {name: json.loads((ROOT / name / 'data/works.json').read_text(encoding='utf-8')) for name in NAMES}
    snapshots = {name: lists(name, originals[name]) for name in NAMES}
    if any(snapshots[name]['missing_old'] for name in NAMES):
        raise ValueError('Some original works are no longer listed; review before changing any data')
    fresh_maps = {name: {w['rj']: w for w in snapshots[name]['works']} for name in NAMES}
    old_intersection = json.loads((ROOT / 'intersection/data/works.json').read_text(encoding='utf-8'))
    old_ids = {w['rj'] for w in old_intersection['works']}
    intersection = set(fresh_maps[NAMES[0]]) & set(fresh_maps[NAMES[1]])
    report = {'sources': {name: {key: snapshots[name][key] for key in ('count', 'added', 'missing_old')} for name in NAMES},
              'old_intersection_count': len(old_ids), 'new_intersection_count': len(intersection),
              'intersection_added': sorted(intersection - old_ids), 'intersection_removed': sorted(old_ids - intersection)}
    write(RUN / 'report.json', report)
    print(f'DIFF intersection: {len(old_ids)} -> {len(intersection)}; added {len(report["intersection_added"])}; removed {len(report["intersection_removed"])}', flush=True)
    if args.stage == 'lists':
        return
    language.base.RAW = RUN
    language.base.fetch = fetch
    candidates = {}
    for name in NAMES:
        for rj in snapshots[name]['added']:
            candidates.setdefault(rj, fresh_maps[name][rj])
    enriched = {}
    errors = []
    with ThreadPoolExecutor(max_workers=3) as pool:
        futures = {pool.submit(enrich, work): rj for rj, work in candidates.items()}
        for future in as_completed(futures):
            rj = futures[future]
            try:
                enriched[rj] = future.result()
            except Exception as error:
                errors.append({'rj': rj, 'reason': str(error)})
            if (len(enriched) + len(errors)) % 10 == 0 or len(enriched) + len(errors) == len(candidates):
                print(f'ENRICH {len(enriched)}/{len(candidates)}; errors {len(errors)}', flush=True)
    report['errors'] = errors
    report['language_errors'] = [error for value in enriched.values() for error in value['language_errors']]
    write(RUN / 'report.json', report)
    if errors:
        raise RuntimeError('Unresolved enrichment errors; source data was not modified: ' + json.dumps(errors))
    if args.stage != 'apply':
        return
    for name in [*NAMES, 'intersection']:
        backup = RUN / 'backups' / name
        if not backup.exists():
            shutil.copytree(ROOT / name / 'data', backup)
    for name in NAMES:
        works = deepcopy(originals[name]['works'])
        for record in snapshots[name]['works']:
            rj = record['rj']
            if rj not in snapshots[name]['added']:
                continue
            work = deepcopy(enriched[rj]['work'])
            # Keep the official membership URL from this source, and its own local cover path.
            work.update(source_page=record['source_page'], source_url=record['source_url'])
            images = ROOT / name / 'images'
            images.mkdir(exist_ok=True)
            shutil.copyfile(RUN / 'images' / (rj + '.webp'), images / (rj + '.webp'))
            works.append(work)
        if len(works) != snapshots[name]['count']:
            raise ValueError('Merged source count mismatch: ' + name)
        meta = deepcopy(originals[name]['metadata'])
        meta.update(expected_count=len(works), page_count=snapshots[name]['pages'],
                    completed_pages=list(range(1, snapshots[name]['pages'] + 1)),
                    region_refresh_at=datetime.now(timezone.utc).isoformat(timespec='seconds'),
                    region_refresh_source='system_proxy', region_added=snapshots[name]['added'])
        meta['language_errors'] = meta.get('language_errors', []) + [error for rj in snapshots[name]['added'] for error in enriched[rj]['language_errors']]
        base = language.base
        base.ROOT = ROOT / name
        base.DATA = base.ROOT / 'data'
        base.IMAGES = base.ROOT / 'images'
        language.export(works, meta)
    print('APPLIED ' + json.dumps({name: len(snapshots[name]['added']) for name in NAMES}), flush=True)


if __name__ == '__main__':
    main()
