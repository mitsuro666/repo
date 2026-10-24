"""Export public DLsite coupon metadata and BK thumbnails; resume from local caches."""
from __future__ import annotations
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import io
import json
import math
from pathlib import Path
import re
import sqlite3
import subprocess
import threading
import time
from urllib.parse import urlparse
from urllib.request import getproxies
from lxml import html
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent
CAMPAIGN = '20261016coupon50'
SOURCE = ('https://www.dlsite.com/girls/fsr/=/work_category%5B0%5D/doujin/order/trend/'
          'work_type_category%5B0%5D/audio/options%5B0%5D/JPN/options%5B1%5D/CHI/'
          'options%5B2%5D/CHI_HANS/options%5B3%5D/CHI_HANT/options%5B4%5D/NM/'
          'is_tl/1/custom_genres%5B0%5D/' + CAMPAIGN)
DATA, RAW, IMAGES = (ROOT / name for name in ('data', 'raw', 'images'))
THUMB_WIDTH = 320
DETAIL_SLOTS = threading.Semaphore(8)
OFFICIAL_PLACEHOLDER = 'https://www.dlsite.com/images/web/girls/no_img_main.gif'

def now():
    return datetime.now(timezone.utc).isoformat(timespec='seconds')

def replace_file(source, destination):
    for attempt in range(12):
        try:
            source.replace(destination)
            return
        except OSError:
            if attempt == 11:
                raise
            time.sleep(0.5)

def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temp = path.with_suffix(path.suffix + '.tmp')
    temp.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')
    replace_file(temp, path)

def fetch(url, destination):
    parsed = urlparse(url)
    if parsed.scheme != 'https' or parsed.hostname not in {'www.dlsite.com', 'img.dlsite.jp'}:
        raise ValueError('Unexpected source host: ' + str(parsed.hostname))
    if destination.exists() and destination.stat().st_size:
        return destination.read_bytes()
    destination.parent.mkdir(parents=True, exist_ok=True)
    temporary = destination.with_suffix(destination.suffix + '.part')
    command = ['curl.exe', '--silent', '--show-error', '--fail', '--location',
               '--connect-timeout', '12', '--max-time', '50', '--user-agent', 'Mozilla/5.0',
               '--referer', 'https://www.dlsite.com/girls/', '--output', str(temporary)]
    proxy = getproxies().get('https') or getproxies().get('http')
    if proxy:
        command += ['--proxy', proxy]
    last_error = ''
    for attempt in range(3):
        result = subprocess.run(command + [url], capture_output=True, text=True,
                                encoding='utf-8', errors='replace')
        if result.returncode == 0 and temporary.exists() and temporary.stat().st_size:
            replace_file(temporary, destination)
            return destination.read_bytes()
        last_error = result.stderr.strip()
        if attempt < 2:
            time.sleep(attempt + 1)
    raise RuntimeError(last_error or 'Empty HTTP response')

def cls(name):
    return 'contains(concat(" ",normalize-space(@class)," ")," ' + name + ' ")'

def text(node):
    return re.sub(r'\s+', ' ', node.text_content()).strip()

def parse_listing(source, page, url):
    root = html.fromstring(source)
    totals = root.xpath('//*[@data-search-result-count]/@data-search-result-count')
    if not totals:
        raise ValueError('Official result count missing: page ' + str(page))
    records = []
    for item in root.xpath('//li[@data-list_item_product_id]'):
        rj = item.get('data-list_item_product_id')
        title = item.xpath('.//dd[' + cls('work_name') + ']//a')[0]
        circle = item.xpath('.//dd[' + cls('maker_name') + ']/a')[0]
        authors = item.xpath('.//span[' + cls('author') + ']')
        voices = [text(a) for node in authors for a in node.xpath('.//a') if text(a)]
        complete = bool(authors) and not any('omit' in a.get('class', '').split() for a in authors)
        cover = ''
        for image in item.xpath('.//div[' + cls('work_img_popover') + ']//img'):
            match = re.search(r"'(//img\.dlsite\.jp/[^']+_img_main\.[a-zA-Z]+)'", image.get(':src', ''))
            if match:
                cover = 'https:' + match.group(1)
                break
        placeholder = False
        if not cover:
            for thumbnail in item.xpath('.//thumb-with-ng-filter-block'):
                match = re.search(r"'(//www\.dlsite\.com/[^']+/no_img_main\.gif)'",
                                  thumbnail.get(':thumb-candidates', ''))
                if match:
                    cover, placeholder = 'https:' + match.group(1), True
                    break
        if not cover:
            raise ValueError('Official BK source missing: ' + rj)
        circle_url = circle.get('href')
        circle_id = re.search(r'/maker_id/(RG\d+)', circle_url)
        records.append({'rj': rj, 'title': text(title), 'voice_actors': list(dict.fromkeys(voices)),
            'voices_complete': complete, 'voices_source': 'listing' if complete else 'listing_truncated',
            'circle': {'id': circle_id.group(1) if circle_id else None,
                       'name': text(circle), 'url': circle_url},
            'url': title.get('href'),
            'bk': {'source_url': cover, 'path': None, 'width': None, 'height': None,
                   'is_placeholder': placeholder},
            'source_page': page, 'source_url': url, 'fetched_at': now()})
    if not records:
        raise ValueError('Empty listing page ' + str(page))
    return records, int(totals[0])

def detail_voices(work):
    with DETAIL_SLOTS:
        source = fetch(work['url'], RAW / 'details' / (work['rj'] + '.html'))
    root = html.fromstring(source)
    labels = root.xpath('//th[normalize-space(.)="\u58f0\u512a"]')
    if labels:
        cells = labels[0].xpath('following-sibling::td[1]')
        if cells:
            values = [text(a) for a in cells[0].xpath('.//a') if text(a)]
            if not values and text(cells[0]):
                values = [s.strip() for s in text(cells[0]).split('/') if s.strip()]
            return list(dict.fromkeys(values))
    canonical = root.xpath('//link[@rel="canonical"]/@href')
    if (root.xpath('//*[@id="work_outline"]') and root.xpath('//*[@id="work_maker"]')
            and any('/' + work['rj'] + '.html' in url for url in canonical)):
        return []
    raise ValueError('Voice actor field missing on official detail page')

def save_thumbnail(work):
    path = IMAGES / (work['rj'] + '.webp')
    actual_url = work['bk']['source_url']
    fallback_used = work['bk'].get('fallback_used', False)
    placeholder = work['bk'].get('is_placeholder', False)
    unavailable_url = work['bk'].get('unavailable_source_url')
    placeholder_reason = work['bk'].get('placeholder_reason')
    if placeholder and not placeholder_reason:
        placeholder_reason = 'Official listing provides no cover image'
    if not path.exists():
        try:
            source = fetch(actual_url, RAW / 'covers' / (work['rj'] + '.jpg'))
        except RuntimeError as error:
            if '404' not in str(error):
                raise
            listing = html.fromstring((RAW / 'lists' / f'page-{work["source_page"]:03d}.html').read_bytes())
            candidates = []
            for node in listing.iter('thumb-with-ng-filter-block'):
                if node.get('link') == work['url']:
                    candidates.extend(re.findall(r"'(//img\.dlsite\.jp/[^']+)'",
                                                 node.get(':thumb-candidates', '')))
            source = None
            fallback_errors = []
            for index, candidate in enumerate(candidates):
                try:
                    actual_url = 'https:' + candidate
                    source = fetch(actual_url, RAW / 'covers' / (work['rj'] + f'-fallback-{index}.img'))
                    fallback_used = True
                    break
                except RuntimeError as fallback_error:
                    fallback_errors.append(fallback_error)
                    continue
            if source is None:
                if not candidates or not all('404' in str(e) for e in fallback_errors):
                    raise fallback_errors[-1] if fallback_errors else error
                unavailable_url = work['bk']['source_url']
                saved = json.loads((DATA / 'works.json').read_text(encoding='utf-8'))
                template = next((w for w in saved['works'] if w['bk'].get('is_placeholder')
                    and not w['bk'].get('unavailable_source_url') and w['bk'].get('path')), None)
                if template:
                    actual_url = template['bk']['source_url']
                    source = (ROOT / template['bk']['path']).read_bytes()
                else:
                    actual_url = OFFICIAL_PLACEHOLDER
                    source = fetch(actual_url, RAW / 'covers' / 'official-no-cover.gif')
                placeholder = True
                placeholder_reason = 'Official full cover and both listed thumbnail URLs returned HTTP 404'
        with Image.open(io.BytesIO(source)) as original:
            image = ImageOps.exif_transpose(original).convert('RGB')
            if image.width > THUMB_WIDTH:
                height = max(1, round(image.height * THUMB_WIDTH / image.width))
                image = image.resize((THUMB_WIDTH, height), Image.Resampling.LANCZOS)
            image.save(path, 'WEBP', quality=86, method=4)
    with Image.open(path) as image:
        return {'path': path.relative_to(ROOT).as_posix(), 'width': image.width, 'height': image.height,
                'source_url': actual_url, 'fallback_used': fallback_used, 'is_placeholder': placeholder,
                'unavailable_source_url': unavailable_url, 'placeholder_reason': placeholder_reason}

def export(works, meta):
    meta.update(exported_at=now(), collected_count=len(works),
                thumbnail_count=sum(bool(w['bk']['path']) for w in works),
                placeholder_count=sum(w['bk'].get('is_placeholder', False) for w in works),
                unlisted_voice_count=sum(w['voices_source'] == 'detail_not_listed' for w in works),
                fallback_thumbnail_count=sum(w['bk'].get('fallback_used', False) for w in works),
                unavailable_cover_count=sum(bool(w['bk'].get('unavailable_source_url')) for w in works),
                complete_voice_count=sum(w['voices_complete'] for w in works))
    meta['listing_complete'] = (len(works) == meta.get('expected_count')
        and len(meta.get('completed_pages', [])) == meta.get('page_count'))
    meta['complete'] = (meta['listing_complete'] and meta['thumbnail_count'] == len(works)
                         and meta['complete_voice_count'] == len(works))
    payload = {'metadata': meta, 'works': works}
    write_json(DATA / 'works.json', payload)
    content = json.dumps(payload, ensure_ascii=False, separators=(',', ':'))
    content = content.replace('<', '\\u003c').replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
    script_temp = DATA / 'works.js.tmp'
    script_temp.write_text('window.DLSITE_CATALOG = ' + content + ';\n', encoding='utf-8')
    replace_file(script_temp, DATA / 'works.js')
    with sqlite3.connect(DATA / 'catalog.sqlite') as db:
        db.executescript('''
            CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY, value_json TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS works (
                rj TEXT PRIMARY KEY, title TEXT NOT NULL, circle_id TEXT, circle_name TEXT NOT NULL,
                circle_url TEXT, url TEXT NOT NULL, bk_source_url TEXT NOT NULL,
                bk_path TEXT, bk_width INTEGER, bk_height INTEGER,
                voices_complete INTEGER NOT NULL, voices_source TEXT NOT NULL,
                source_page INTEGER NOT NULL, source_url TEXT NOT NULL, fetched_at TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS work_voices (
                rj TEXT NOT NULL REFERENCES works(rj), position INTEGER NOT NULL,
                name TEXT NOT NULL, PRIMARY KEY (rj, position)
            );
            CREATE INDEX IF NOT EXISTS works_circle ON works(circle_name);
            CREATE INDEX IF NOT EXISTS voices_name ON work_voices(name);
        ''')
        for key, value in meta.items():
            db.execute('INSERT OR REPLACE INTO metadata VALUES (?, ?)', (key, json.dumps(value, ensure_ascii=False)))
        for w in works:
            db.execute('INSERT OR REPLACE INTO works VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', (
                w['rj'], w['title'], w['circle']['id'], w['circle']['name'], w['circle']['url'], w['url'],
                w['bk']['source_url'], w['bk']['path'], w['bk']['width'], w['bk']['height'],
                int(w['voices_complete']), w['voices_source'], w['source_page'], w['source_url'], w['fetched_at']))
            db.execute('DELETE FROM work_voices WHERE rj = ?', (w['rj'],))
            db.executemany('INSERT INTO work_voices VALUES (?,?,?)',
                [(w['rj'], i, name) for i, name in enumerate(w['voice_actors'])])
    write_json(DATA / 'status.json', meta)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--stage', choices=['lists', 'assets', 'all', 'export'], default='all')
    parser.add_argument('--workers', type=int, choices=range(1, 17), default=16,
                        help='Concurrent asset jobs (1-16); use 4 on an unstable connection')
    args = parser.parse_args()
    for directory in (DATA, RAW, IMAGES):
        directory.mkdir(parents=True, exist_ok=True)
    previous = DATA / 'works.json'
    payload = json.loads(previous.read_text(encoding='utf-8')) if previous.exists() else {}
    meta = payload.get('metadata', {'schema_version': 1, 'campaign_id': CAMPAIGN,
        'source_url': SOURCE, 'started_at': now(), 'thumbnail_max_width': THUMB_WIDTH,
        'scope': 'Original supplied audio/TL/doujin/language filters; separate RJ editions retained',
        'completed_pages': [], 'errors': []})
    works = payload.get('works', [])
    for work in works:
        work['bk'].setdefault('is_placeholder', False)
    if args.stage in ('lists', 'all'):
        found = {w['rj']: w for w in works}
        page = 1
        while page <= meta.get('page_count', 1):
            if page in meta['completed_pages']:
                page += 1
                continue
            url = SOURCE + '/per_page/100/page/' + str(page)
            records, total = parse_listing(fetch(url, RAW / 'lists' / f'page-{page:03d}.html'), page, url)
            if page == 1:
                meta.update(expected_count=total, page_count=math.ceil(total / 100))
            elif total != meta['expected_count']:
                raise ValueError('Official count changed during collection')
            expected = min(100, total - (page - 1) * 100)
            if len(records) != expected:
                raise ValueError(f'Page {page}: expected {expected}, received {len(records)}')
            for record in records:
                if record['rj'] in found and found[record['rj']]['source_page'] != page:
                    raise ValueError('Listing order shifted: duplicate RJ across pages: ' + record['rj'])
                found.setdefault(record['rj'], record)
            works = list(found.values())
            if page not in meta['completed_pages']:
                meta['completed_pages'].append(page)
            export(works, meta)
            print(f'LIST {page}/{meta["page_count"]}: {len(works)}/{total}', flush=True)
            page += 1
            time.sleep(0.5)
    if args.stage in ('assets', 'all'):
        if not works:
            raise ValueError('Collect listing pages first')
        pending = [w for w in works if not w['voices_complete'] or not w['bk']['path']]
        errors = []
        def enrich(work):
            failures = []
            if not work['voices_complete']:
                try:
                    work['voice_actors'] = detail_voices(work)
                    work['voices_complete'] = True
                    work['voices_source'] = 'detail' if work['voice_actors'] else 'detail_not_listed'
                except Exception as error:
                    failures.append({'rj': work['rj'], 'stage': 'voices', 'reason': str(error)})
            if not work['bk']['path']:
                try:
                    work['bk'].update(save_thumbnail(work))
                except Exception as error:
                    failures.append({'rj': work['rj'], 'stage': 'bk', 'reason': str(error)})
            return work, failures
        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            futures = [pool.submit(enrich, dict(w, bk=dict(w['bk']))) for w in pending]
            by_rj = {w['rj']: w for w in works}
            for done, future in enumerate(as_completed(futures), 1):
                work, failures = future.result()
                by_rj[work['rj']] = work
                errors.extend(failures)
                if done % 40 == 0 or done == len(pending):
                    works = list(by_rj.values())
                    meta['errors'] = errors
                    export(works, meta)
                    print(f'ASSETS {done}/{len(pending)}; BK {meta["thumbnail_count"]}; '
                          f'voices {meta["complete_voice_count"]}; errors {len(errors)}', flush=True)
        works = list(by_rj.values())
        meta['errors'] = errors
    export(works, meta)
    print(json.dumps({k: meta.get(k) for k in ['expected_count', 'collected_count',
        'thumbnail_count', 'complete_voice_count', 'complete']}), flush=True)

if __name__ == '__main__':
    main()
