# AGENTS.md

Single-page card generator app (otome record card template). No build step, no
package manager. Runs by opening `index.html` directly (`file://`) and is also
deployed on GitHub Pages.

## Structure

- `index.html` — page structure and UI markup only; loads `css/style.css` and
  `js/app.js`.
- `css/style.css` — all styles. Note: relative URLs inside CSS resolve against
  this file (e.g. `../font/BlackSugarPlumCandy-Bold.ttf`).
- `js/app.js` — all application logic: card rendering, image editor, stickers,
  DLsite import, localStorage state.
- `font/` — card display font.
- `stamp/` — built-in sticker PNGs (source files).
- `stamp-data/` — per-sticker base64 data files. They are the fallback for
  `file://` environments where `fetch()` is blocked. After editing any file in
  `stamp/`, regenerate them with `python generate_stamp_data.py` and hard-refresh.
- `tool-icons/` — image editor tool icons.
- `dlsite-worker.js` — Cloudflare Worker proxying the DLsite product API (CORS).

## Conventions

- Chinese UI strings in JS use `String.fromCharCode(0x....)`; fixed HTML text
  uses HTML entities; Unicode punctuation in regexes uses `\uXXXX`. See
  `ENCODING_NOTES.md` for the full rules (previously corrupted by encoding bugs).
- State is persisted to `localStorage` under key `otome-record-card-v1`.
- The page must keep working via `file://`: no ES modules, and no absolute
  `/path` references in HTML/CSS/JS.
- Image editor export: never draw `file://` images onto export canvases —
  Chrome taints them and `toDataURL()` throws `SecurityError`. Sticker images
  must be localized to a data URL first (`localizeImageToPngDataUrl` falls back
  to `stamp-data/` embedded copies, then to `<img>` rasterization).
## Working preferences

- When changing code, only run basic syntax/static checks (e.g. JS parse check). Do NOT run functional, visual, or end-to-end verification - no browser automation, no screenshot rendering, no click-through testing. The user verifies the actual effect themselves.
