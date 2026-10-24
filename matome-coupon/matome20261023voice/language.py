"""Enrich this activity with evidence-based Chinese edition, subtitle and script metadata."""
import importlib.util
import argparse
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import re
import shutil
import sqlite3

ROOT = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location('bulk_catalog', ROOT / 'catalog.py')
catalog = importlib.util.module_from_spec(spec)
spec.loader.exec_module(catalog)
base = catalog.base
CHINESE = {'CHI', 'CHI_HANS', 'CHI_HANT'}
ZH = r'(?:中文|中[国國]语|中[国國]語|简[体體](?:中文)?|簡[体體](?:中文)?|繁[体體](?:中文)?|中日|日中|chinese)'
SUBJECTS = {'subtitles': re.compile(ZH + r'[\s・/＆&、]{0,5}(?:字幕|srt)|(?:字幕|srt)[\s・/＆&、]{0,5}' + ZH, re.I),
            'script': re.compile(ZH + r'.{0,12}?(?:台本|臺本|脚本|腳本|文本|シナリオ)|(?:台本|臺本|脚本|腳本|文本|シナリオ).{0,12}?' + ZH, re.I)}


def product(work):
    path = base.RAW / 'products' / (work['rj'] + '.json')
    a = json.loads(path.read_bytes())
    if isinstance(a, list):
        a = next(x for x in a if x.get('workno') == work['rj'])
    return a.get(work['rj'], a)


def collect(work):
    a = product(work)
    options = set((a.get('options') or '').split('#'))
    editions = a.get('language_editions') or []
    if isinstance(editions, dict):
        editions = list(editions.values())
    current = next((e for e in editions if isinstance(e, dict) and e.get('workno') == work['rj']), {})
    label = current.get('label') or ''
    codes = set(re.split(r'[,#]', current.get('lang') or '')) | (options & (CHINESE | {'JPN', 'ENG', 'KO_KR'}))
    codes.discard('')
    is_chinese = None
    evidence = []
    if label:
        is_chinese = bool(re.search(ZH, label, re.I))
        evidence.append({'kind': 'edition', 'field': 'language_editions.current.label', 'text': label, 'url': work['url']})
    elif re.search(r'【[^】]*(?:中文版|中国語版|中国语版|漢化|汉化)[^】]*】', work['title']):
        is_chinese = True
        evidence.append({'kind': 'edition', 'field': 'title', 'text': work['title'], 'url': work['url']})
    elif not (codes & CHINESE):
        is_chinese = False
    elif not (codes & {'JPN', 'ENG', 'KO_KR'}):
        is_chinese = True
        evidence.append({'kind': 'edition', 'field': 'options', 'text': ','.join(sorted(codes)), 'url': work['url']})
    info = {'is_chinese_version': is_chinese, 'edition_label': label,
            'codes': sorted(codes), 'chinese_subtitles': 'unknown', 'chinese_script': 'unknown',
            'evidence': evidence, 'checked_at': base.now(), 'detail_checked': False}
    errors = []
    try:
        path = base.RAW / 'details' / (work['rj'] + '.html')
        sibling = ROOT.parent / 'dlsite-coupon-20261016' / 'raw' / 'details' / path.name
        if not path.exists() and sibling.is_file():
            path.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(sibling, path)
        doc = base.html.fromstring(base.fetch(work['url'], path))
        parts = doc.xpath('//*[@id="work_name"] | //div[' + base.cls('work_parts_container') + ']')
        if not parts:
            raise ValueError('Official work title and description sections missing')
        # Restrict evidence to the work's title and authored description, excluding site translation guides.
        texts = [work['title']]
        for node in parts:
            for unwanted in node.xpath('.//script | .//style'):
                unwanted.drop_tree()
            texts.extend(re.sub(r'\s+', ' ', t).strip() for t in node.itertext() if t.strip())
        text = ' '.join(texts)
        for key, pattern in SUBJECTS.items():
            matches = []
            for match in pattern.finditer(text):
                context = text[max(0, match.start()-35):match.end()+50]
                tail = text[match.end():match.end()+24]
                head = text[max(0,match.start()-15):match.start()]
                negative = bool(re.search(r'^(?:\s|は|が|を|:|：|[（(])*(?:なし|無し|ありません|未対応|非対応|[不未]提供|没有|沒有|不含|不附)', tail)
                                or re.search(r'(?:不含|不附|没有|沒有|无|無)$', head))
                uncertain = bool(re.search(r'予定|今後|近日|预定|預定|另售|別売|別途|追加購入|不保证|不保證', context))
                state = 'no' if negative else 'unknown' if uncertain else 'yes'
                matches.append(state)
                info['evidence'].append({'kind': key, 'field': 'official_description', 'text': context, 'url': work['url']})
            if matches:
                distinct = set(matches)
                info['chinese_' + key] = matches[0] if len(distinct) == 1 else 'unknown'
        info['detail_checked'] = True
    except Exception as error:
        errors.append({'rj': work['rj'], 'stage': 'language_detail', 'reason': str(error)})
    work['language'] = info
    return work, errors


def export(works, meta):
    meta['language_checked_count'] = sum(w.get('language', {}).get('detail_checked', False) for w in works)
    meta['chinese_version_count'] = sum(w.get('language', {}).get('is_chinese_version') is True for w in works)
    meta['chinese_subtitles_count'] = sum(w.get('language', {}).get('chinese_subtitles') == 'yes' for w in works)
    meta['chinese_script_count'] = sum(w.get('language', {}).get('chinese_script') == 'yes' for w in works)
    meta['language_complete'] = meta['language_checked_count'] == len(works)
    base.export(works, meta)
    # Separate relation preserves the existing works table and its exporter.
    with sqlite3.connect(base.DATA / 'catalog.sqlite') as db:
        db.execute('CREATE TABLE IF NOT EXISTS work_languages (rj TEXT PRIMARY KEY REFERENCES works(rj), '
                   'is_chinese_version INTEGER, edition_label TEXT, chinese_subtitles TEXT NOT NULL, '
                   'chinese_script TEXT NOT NULL, detail_checked INTEGER NOT NULL, evidence_json TEXT NOT NULL, '
                   'codes_json TEXT NOT NULL, checked_at TEXT NOT NULL)')
        for w in works:
            if 'language' not in w:
                continue
            v = w['language']
            db.execute('INSERT OR REPLACE INTO work_languages VALUES (?,?,?,?,?,?,?,?,?)',
                       (w['rj'], v['is_chinese_version'], v['edition_label'], v['chinese_subtitles'],
                        v['chinese_script'], v['detail_checked'], json.dumps(v['evidence'], ensure_ascii=False),
                        json.dumps(v['codes']), v['checked_at']))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--reparse', action='store_true', help='Re-read saved official descriptions')
    args = parser.parse_args()
    data = json.loads((base.DATA / 'works.json').read_text(encoding='utf-8'))
    works, meta = data['works'], data['metadata']
    found = {w['rj']: w for w in works}
    pending = [w for w in works if args.reparse or not w.get('language', {}).get('detail_checked')]
    failures = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        tasks = [pool.submit(collect, dict(w)) for w in pending]
        for done, task in enumerate(as_completed(tasks), 1):
            work, errors = task.result()
            found[work['rj']] = work
            failures.extend(errors)
            if done % 40 == 0 or done == len(pending):
                works = list(found.values())
                meta['language_errors'] = failures
                export(works, meta)
                print(f'LANGUAGE {done}/{len(pending)}; checked {meta["language_checked_count"]}; errors {len(failures)}', flush=True)
    export(list(found.values()), meta)


if __name__ == '__main__':
    main()
