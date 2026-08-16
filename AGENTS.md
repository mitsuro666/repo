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
- For long-running asynchronous work:
  - Empty `write_stdin` polls MUST use `yield_time_ms >= 180000`; prefer
    `300000` when intermediate output is not needed.
  - `functions.wait` MUST use `yield_time_ms >= 180000`.
  - `functions.exec` MUST set its outer `@exec yield_time_ms` at least
    30000 ms longer than the longest nested tool wait, so the outer code cell
    does not yield first.
  - Do not apply the long wait to non-empty `write_stdin` calls that send
    interactive input.
  - These tools return early when the process or cell completes. Do not wake
    the model merely to report that work is still running.
- Follow the user's current instruction literally: change exactly the elements,
  properties, and amounts they name, using the current state as the baseline.
  Do not reinterpret the request through earlier edits, infer an unstated goal,
  compensate for prior changes, or add related adjustments.
- If any requested target, reference point, amount, or scope is uncertain, stop
  and ask the user before editing. Never turn an assumption into a code change.
- Any idea beyond the user's explicit instruction must be presented for
  confirmation first and must not be implemented until the user approves it.
- Treat the user's stated scope as a hard boundary. Change only the explicitly
  named view, template, version, module, element, or behavior. Never extend a
  local request to adjacent views or related features merely for consistency.
  If any part of the target scope or intended reference is ambiguous, do not
  edit; ask the user to clarify first. Do not make unsolicited cleanup,
  refactors, visual adjustments, or behavior changes outside the confirmed
  scope.
- For layout or position changes, edit each requested element or module
  independently. Do not move a shared parent container when that would also
  move elements the user did not name. Treat "other elements must not move" as
  a requirement to preserve every unaffected element's existing positioning
  rule and coordinates.
- Make CSS patches with selector-level context. Never replace a common property
  such as `transform`, `top`, `margin`, or `padding` by matching the property
  value alone when the same declaration may occur in multiple selectors.
- Before editing layout code, identify the exact selector and unique surrounding
  block, then make one narrowly scoped patch against that block. The patch must
  be unambiguous by construction; do not compensate for a broad or uncertain
  edit with large post-edit searches or repeated verification passes.
- Keep preview and canvas export positioning mapped per element: cover/BK,
  title or CV row, divider/decorations, price/rating, and review/content must
  each have an explicit counterpart. Do not use one aggregate offset to imitate
  several independent requested movements.
- If a reported visual result contradicts the intended change, inspect the
  current selectors and computed coordinate formulas before applying another
  offset. Do not guess a corrective distance from the screenshot alone.
- When the actual cause of a reported issue is identified, explain the cause
  and the evidence for it before editing, then fix that cause directly with the
  smallest scoped change. Do not satisfy only the visible symptom by adding
  duplicate text, pseudo-element content, compensating overlays, or other
  workaround layers when the underlying element, encoding, layout rule, or
  sizing behavior can be corrected directly.
- Treat garbled terminal output as a possible decoding or display problem, not
  proof that the source file is corrupted. Compare it with the browser result
  and verify the file encoding or raw source before changing markup or text.
- When adding a new button, match the existing buttons in the same module or
  action group: reuse their height, padding, border radius, border weight,
  typography, spacing, and interaction states. A semantic variant such as a
  destructive action may change color, but must keep the established shape and
  dimensions unless the user explicitly requests a different treatment.
- For every confirmation, warning, error, or informational prompt, use a
  site-owned custom dialog rather than the browser's native `alert`, `confirm`,
  or `prompt`. Match the RJ import dialog's established website style: white
  background with pink text, plus the same dialog shape, typography, spacing,
  and button treatment. Reuse or extend that dialog pattern instead of creating
  an unrelated prompt style.
- In `js/app.js`, always declare storage-key constants and other `const`/`let`
  dependencies before the first statement that uses or passes them. Never add
  a use-before-declaration dependency to page initialization.

## iOS mobile root-scroll reference

- If iOS Safari can scroll far past the real content into a blank page, do not
  first assume that a scaled `1080 x 1440` card still occupies its unscaled
  height. `fitStage()` already assigns `.stage` the scaled layout height.
- Measure `window.innerHeight`, `visualViewport.height/pageTop/offsetTop`,
  `document.documentElement.scrollHeight/clientHeight`, `body.scrollHeight`,
  and the actual bottoms/heights of `.app`, `.stage`, the active card, and
  `.main-nav` before changing layout offsets.
- A confirmed failure signature in this project was: `.app`, `.stage`, and the
  real content ended at about `690px`, while the root layout viewport remained
  about `665px`; during downward scrolling, iOS reported
  `window.innerHeight` and `visualViewport.height` collapsing to nearly zero.
  Safari then allowed the normal content to scroll completely out of view,
  leaving a large blank area even though no content element was that tall.
- The working mobile architecture is intentional: `html` and `body` have a
  bounded height and `overflow: hidden`, while `.app` is the `100dvh` internal
  vertical scroll container with `overflow-y: auto`,
  `overscroll-behavior-y: contain`, and momentum scrolling. Do not restore
  mobile root-page scrolling without first checking this iOS failure mode.
- Fixed bottom-navigation padding can add a small, finite scroll distance, but
  it is not evidence of the root viewport failure. Compare the exact
  `.app`/`.stage` bottom difference before blaming padding or `100vh`.
- Temporary diagnostics must not reposition an in-document element from
  `scrollY`, `visualViewport.pageTop`, or `offsetTop`: doing so can extend
  `scrollHeight` on every scroll event and create artificial infinite
  scrolling. Prefer recording measurements without changing layout; remove
  all diagnostic UI and listeners after the cause is confirmed.

## Preview/export dual-render workflow

- The intentional long-term architecture is two renderers: DOM/CSS for the live
  preview and Canvas for exported images. Do not replace Canvas export with DOM
  rasterization unless the user explicitly requests a new experiment. The
  project font and iOS image/memory behavior make Canvas the stable export path.
- New templates or visual modes normally begin as a standalone demo prepared by
  the user or in a separate design chat. First embed that demo faithfully as the
  live preview; the demo is the design reference during embedding. Once it is
  embedded, the in-app live preview becomes the visual source of truth.
- Treat implementation as three phases:
  1. **Demo embedding:** reproduce the demo in the preview and create its Canvas
     counterpart at the same time.
  2. **Preview tuning:** while the user visually adjusts the embedded preview,
     update the corresponding Canvas export in parallel for every requested
     change. Unless the user explicitly says otherwise, a preview adjustment in
     this phase also applies to export.
  3. **Export confirmation:** after the user approves the preview, keep the
     preview fixed. If export differs, correct Canvas directly from the approved
     preview's DOM/CSS values and structure; do not redesign the preview.
- During export confirmation, inspect the exact preview selectors, computed
  geometry, and corresponding Canvas drawing before editing. Map each element
  independently: dimensions, position, gap, font size/weight/line height,
  wrapping width, colors, borders, radii, shadows, decorations, and layering.
  Do not guess offsets from screenshots or make the user iteratively tune a
  second visual design pixel by pixel.
- Prefer sharing values rather than maintaining unrelated constants. When
  practical, let Canvas read geometry from an unscaled `1080 x 1440` offscreen
  DOM copy or shared semantic variables, as validated by the trio template.
  When direct measurement is unsuitable, copy the approved preview values into
  the explicitly mapped Canvas counterpart.
- Preserve stable output dimensions: full-size card templates export at
  `1080 x 1440` unless the user explicitly specifies another size.
- If the current phase or source of truth is unclear, ask before editing. A
  user-requested preview-only or export-only adjustment is an explicit exception
  and must not change the other renderer.
- Keep theme-dependent preview and Canvas colors palette-derived, and keep every
  correction scoped to the named template, mode, style, and element.
