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

## Design rules for new card templates

- These color-card rules apply only to card templates and their exported card
  canvases. They do not apply to general website modules such as My Favorites,
  the image editor, import/settings panels, or other non-template UI.
- New card templates and template styles must be theme-aware. Never introduce a
  fixed template color when the color should change with the selected palette.
  Use the existing semantic variables such as `--card-ink`, `--card-muted`,
  `--card-accent`, `--card-accent-deep`, `--card-line`, `--card-mint`,
  `--card-cover-bg`, and `--card-bg-*`; use `color-mix()` with those variables
  for lighter, darker, or translucent variants.
- A new theme-dependent template color must first be added as a semantic
  `--card-*` variable in every theme block, then consumed by the template. Do
  not add a raw hex value directly to a new template rule except for genuinely
  theme-independent values such as pure white used for contrast. Non-template
  website modules may use their own UI color system and do not need `--card-*`.
- When drawing a new template on canvas, pass palette-derived colors into the
  drawing functions. Do not hard-code palette hex values in new JavaScript
  drawing logic.
- New template sections should establish an intentional alignment: left, right,
  or centered. Keep sibling sections on a consistent alignment axis and use
  equal, explicit `gap`/spacing values between comparable sections.
- Prefer layout primitives (`grid`/`flex`, `gap`, `align-items`,
  `justify-content`, `text-align`) over per-element offset nudges in templates.
  When a template has repeated items, define the spacing once on the parent.
- Before handing off a template change, statically check that new
  theme-dependent colors reference semantic variables and that repeated
  sections use consistent alignment and spacing. Functional, visual, and
  end-to-end verification is intentionally left to the user per the working
  preferences below.
## Working preferences

- When changing code, only run basic syntax/static checks (e.g. JS parse check). Do NOT run functional, visual, or end-to-end verification - no browser automation, no screenshot rendering, no click-through testing. The user verifies the actual effect themselves.
- Treat the user's stated scope as a hard boundary. Change only the explicitly
  named view, template, version, module, element, or behavior. Never extend a
  local request to adjacent views or related features merely for consistency.
  If any part of the target scope or intended reference is ambiguous, do not
  edit; ask the user to clarify first. Do not make unsolicited cleanup,
  refactors, visual adjustments, or behavior changes outside the confirmed
  scope.
- When adding a new button, match the existing buttons in the same module or
  action group: reuse their height, padding, border radius, border weight,
  typography, spacing, and interaction states. A semantic variant such as a
  destructive action may change color, but must keep the established shape and
  dimensions unless the user explicitly requests a different treatment.
- In `js/app.js`, always declare storage-key constants and other `const`/`let`
  dependencies before the first statement that uses or passes them. Never add
  a use-before-declaration dependency to page initialization.

## Preview/export parity workflow for grid9 title styles

- Treat work as three phases: (1) when creating a new style, implement the
  preview and export together; (2) during the preview-tuning phase, assume the
  user wants the export changed in parallel to match every preview adjustment;
  (3) during the export-confirmation phase, compare export against the approved
  preview and make export-only corrections.
- If the phase or the intended reference is unclear before an edit, ask which
  phase applies and whether the preview or export is the source to follow.
- The live grid9 preview is the visual source of truth for export parity. For
  every new or changed export drawing, compare the preview CSS/HTML with the
  corresponding canvas code: structure, dimensions, spacing, colors, borders,
  shadows, highlights, under-bars, text sizing, wrapping, and positions.
- During export-only corrections, report any preview/export differences before
  editing and confirm whether the preview should also change. Keep adjustments
  scoped to the requested version and style.
- New title styles must use the same palette-derived values and geometry in
  preview and export wherever possible. Keep style-specific adjustments scoped
  to that style only.
