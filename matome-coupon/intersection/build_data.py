"""Build the static RJ intersection using the two existing local snapshots."""
from copy import deepcopy
from datetime import datetime, timezone
import json
from pathlib import Path
from web_assets import write_web_catalog

ROOT = Path(__file__).resolve().parent
SOURCES = ['matome20261023voice', 'dlsite-coupon-20261016']


def main():
    catalogs = [json.loads((ROOT.parent / name / 'data/works.json').read_text(encoding='utf-8'))
                for name in SOURCES]
    maps = [{w['rj']: w for w in catalog['works']} for catalog in catalogs]
    works = []
    for original in catalogs[0]['works']:
        rj = original['rj']
        if rj not in maps[1]:
            continue
        records = [maps[0][rj], maps[1][rj]]
        work = deepcopy(original)
        candidates = [(i, r) for i, r in enumerate(records) if r['bk'].get('path')]
        candidates.sort(key=lambda item: bool(item[1]['bk'].get('is_placeholder')))
        for index, record in candidates:
            image = ROOT.parent / SOURCES[index] / record['bk']['path']
            if image.is_file():
                work['bk'] = deepcopy(record['bk'])
                work['bk']['path'] = '../' + SOURCES[index] + '/' + record['bk']['path']
                break
        else:
            raise ValueError('Missing local BK: ' + rj)
        if not work['voice_actors'] and records[1]['voice_actors']:
            work['voice_actors'] = records[1]['voice_actors']
            work['voices_source'] = records[1]['voices_source']
        work['source_records'] = {name: deepcopy(record) for name, record in zip(SOURCES, records)}
        works.append(work)
    if len({w['rj'] for w in works}) != len(works):
        raise ValueError('Duplicate RJ in intersection')
    metadata = {
        'schema_version': 1, 'generated_at': datetime.now(timezone.utc).isoformat(timespec='seconds'),
        'count': len(works), 'circle_count': len({w['circle']['id'] for w in works}),
        'voice_count': len({v for w in works for v in w['voice_actors']}),
        'unlisted_voice_count': sum(not w['voice_actors'] for w in works),
        'sources': [{'directory': name, **catalog['metadata']} for name, catalog in zip(SOURCES, catalogs)],
    }
    payload = {'metadata': metadata, 'works': works}
    data_dir = ROOT / 'data'
    data_dir.mkdir(exist_ok=True)
    (data_dir / 'works.json').write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding='utf-8')
    write_web_catalog(payload, data_dir)
    print(json.dumps({k: v for k, v in metadata.items() if k != 'sources'}))


if __name__ == '__main__':
    main()
