const fs = require("fs");

function read(path) {
  return fs.readFileSync(path, "utf8");
}

function applyReplacement(name, oldText, newText, text) {
  const parts = text.split(oldText);
  if (parts.length - 1 !== 1) {
    throw new Error("[" + name + "] expected 1 match, got " + (parts.length - 1));
  }
  return parts.join(newText);
}

const L = (...lines) => lines.join("\n");

let css = read("css/style.css");
let js = read("js/app.js");

css = applyReplacement(
  "price panel second row taller",
  "      grid-template-rows: 96px 60px;",
  "      grid-template-rows: 96px 66px;",
  css
);

css = applyReplacement(
  "hero metric padding",
  L(
    "    .metric.hero {",
    "      border-color: rgba(217, 95, 140, 0.4);",
    "      background: linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(255, 226, 235, 0.74));",
    "    }"
  ),
  L(
    "    .metric.hero {",
    "      padding: 15px 13px 1px;",
    "      border-color: rgba(217, 95, 140, 0.4);",
    "      background: linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(255, 226, 235, 0.74));",
    "    }"
  ),
  css
);

css = applyReplacement(
  "compact metric padding",
  "    .metric.compact { padding: 5px 13px; gap: 1px; }",
  "    .metric.compact { padding: 10px 13px 3px; gap: 1px; }",
  css
);

css = applyReplacement(
  "rating row tighter columns",
  L(
    "    .rating-row {",
    "      display: grid;",
    "      grid-template-columns: 84px 1fr;",
    "      align-items: center;",
    "      gap: 8px;",
    "    }"
  ),
  L(
    "    .rating-row {",
    "      display: grid;",
    "      grid-template-columns: 64px 1fr;",
    "      align-items: center;",
    "      gap: 4px;",
    "    }"
  ),
  css
);

js = applyReplacement(
  "stars start closer to label",
  "        const sx = x + 92 + i * 44;",
  "        const sx = x + 68 + i * 44;",
  js
);

js = applyReplacement(
  "rating value follows stars left",
  "        ctx.fillText(valueText, x + 314, y + 30);",
  "        ctx.fillText(valueText, x + 290, y + 30);",
  js
);

js = applyReplacement(
  "compact metric label lower",
  "      const labelY = hero ? 24 : (compact ? 21 : 24);",
  "      const labelY = hero ? 24 : (compact ? 25 : 24);",
  js
);

js = applyReplacement(
  "compact metric value lower",
  "      const valueY = hero ? 62 : (compact ? 49 : 56);",
  "      const valueY = hero ? 62 : (compact ? 52 : 56);",
  js
);

fs.writeFileSync("css/style.css", css, "utf8");
fs.writeFileSync("js/app.js", js, "utf8");

console.log("tweak replacements applied");
