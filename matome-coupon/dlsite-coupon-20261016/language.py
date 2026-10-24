"""Add the same official Chinese language annotations to the coupon catalogue."""
import importlib.util
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
SHARED = ROOT.parent / 'matome20261023voice'
spec = importlib.util.spec_from_file_location('shared_language', SHARED / 'language.py')
shared = importlib.util.module_from_spec(spec)
spec.loader.exec_module(shared)
shared.ROOT = ROOT
shared.base.ROOT = ROOT
shared.base.DATA, shared.base.RAW, shared.base.IMAGES = (ROOT / name for name in ('data', 'raw', 'images'))


def cached_file(kind, filename):
    target = shared.base.RAW / kind / filename
    source = SHARED / 'raw' / kind / filename
    if not target.exists() and source.is_file():
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, target)
    return target


def product(work):
    path = cached_file('products', work['rj'] + '.json')
    url = 'https://www.dlsite.com/girls/api/=/product.json?workno=' + work['rj']
    value = json.loads(shared.base.fetch(url, path))
    if isinstance(value, list):
        value = next((a for a in value if a.get('workno') == work['rj']), {})
    value = value.get(work['rj'], value)
    if value.get('workno') != work['rj']:
        raise ValueError('Official product API work number mismatch: ' + work['rj'])
    return value


shared.product = product
original_collect = shared.collect


def collect(work):
    try:
        cached_file('details', work['rj'] + '.html')
        return original_collect(work)
    except Exception as error:
        work['language'] = {'is_chinese_version': None, 'edition_label': '', 'codes': [],
            'chinese_subtitles': 'unknown', 'chinese_script': 'unknown', 'evidence': [],
            'checked_at': shared.base.now(), 'detail_checked': False}
        return work, [{'rj': work['rj'], 'stage': 'language_product', 'reason': str(error)}]


shared.collect = collect


def main():
    path = shared.base.DATA / 'works.json'
    data = json.loads(path.read_text(encoding='utf-8'))
    donor = json.loads((SHARED / 'data/works.json').read_text(encoding='utf-8'))
    known = {w['rj']: w['language'] for w in donor['works']
             if w.get('language', {}).get('detail_checked')}
    copied = 0
    for work in data['works']:
        if not work.get('language', {}).get('detail_checked') and work['rj'] in known:
            work['language'] = known[work['rj']]
            copied += 1
    shared.export(data['works'], data['metadata'])
    print(f'Reused official annotations for {copied} identical RJ records', flush=True)
    shared.main()


if __name__ == '__main__':
    main()
