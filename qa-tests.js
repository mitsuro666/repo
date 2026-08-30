#!/usr/bin/env node
const fs = require("fs");
const assert = require("assert");

const source = fs.readFileSync("js/app.js", "utf8");

assert.match(source, /document\.addEventListener\("compositionstart",[\s\S]*fullFieldComposing\.add\(target\)/);
assert.match(source, /document\.addEventListener\("compositionend",[\s\S]*fullFieldComposing\.delete\(target\)/);
assert.match(source, /if \(!tag \|\| fullFieldComposing\.has\(tag\)\) return;/);

function extractFunction(name) {
  const marker = "function " + name + "(";
  const functionStart = source.indexOf(marker);
  if (functionStart < 0) throw new Error("Function not found: " + name);
  const start = source.slice(Math.max(0, functionStart - 6), functionStart) === "async "
    ? functionStart - 6
    : functionStart;
  const bodyStart = source.indexOf("{", start + marker.length);
  let depth = 0;
  let quote = "";
  let escaped = false;
  let lineComment = false;
  let blockComment = false;
  for (let index = bodyStart; index < source.length; index += 1) {
    const character = source[index];
    const next = source[index + 1];
    if (lineComment) {
      if (character === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (character === "*" && next === "/") {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === quote) quote = "";
      continue;
    }
    if (character === "/" && next === "/") {
      lineComment = true;
      index += 1;
      continue;
    }
    if (character === "/" && next === "*") {
      blockComment = true;
      index += 1;
      continue;
    }
    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      continue;
    }
    if (character === "{") depth += 1;
    if (character === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error("Unterminated function: " + name);
}

function loadFunctions(names, setup = "") {
  const declarations = names.map(extractFunction).join("\n");
  return new Function(setup + "\n" + declarations + "\nreturn { " + names.join(", ") + " }; ")();
}

const core = loadFunctions([
  "isRecordObject",
  "parseStoredStringArray",
  "normalizeCardDateValue",
  "normalizeReleaseDateValue",
  "normalizeContinuationPageState",
  "normalizeImportedData",
  "calculateDiscountPercent",
  "calculateCurrentPriceFromDiscount",
  "normalizeWorkno",
  "parseBatchTemplateRjs",
  "collectionPaginationItems"
]);

assert.strictEqual(core.isRecordObject({}), true);
assert.strictEqual(core.isRecordObject([]), false);
assert.strictEqual(core.isRecordObject(null), false);

assert.deepStrictEqual(core.parseStoredStringArray('["剧情","声优"]'), ["剧情", "声优"]);
assert.deepStrictEqual(core.parseStoredStringArray('["剧情",1,null]'), ["剧情"]);
assert.deepStrictEqual(core.parseStoredStringArray("{}"), []);
assert.deepStrictEqual(core.parseStoredStringArray("not-json"), []);

assert.deepStrictEqual(core.normalizeImportedData({ recordTitle:"A" }), { recordTitle:"A" });
assert.deepStrictEqual(core.normalizeImportedData({ data:{ recordTitle:"A" } }), { recordTitle:"A" });
assert.strictEqual(core.normalizeImportedData([]), null);
assert.strictEqual(core.normalizeImportedData({ data:[] }), null);
assert.strictEqual(core.normalizeImportedData({ data:null }), null);

assert.deepStrictEqual(
  core.normalizeContinuationPageState({ current:99, pages:["一", { text:"二" }, null] }),
  { current:3, pages:["一", "二", ""] }
);
assert.deepStrictEqual(core.normalizeContinuationPageState({ current:-4, pages:"bad" }), { current:0, pages:[] });

const compactSnapshot = loadFunctions([
  "isRecordObject",
  "normalizeContinuationPageState",
  "readCompactContinuationSnapshot"
], `
  const COMPACT_CONTINUATION_STORAGE_KEY = "test";
  const localStorage = { getItem:() => globalThis.__qaCompactSnapshotValue };
`);
globalThis.__qaCompactSnapshotValue = "[]";
assert.strictEqual(compactSnapshot.readCompactContinuationSnapshot(), null);
globalThis.__qaCompactSnapshotValue = '{"current":1,"pages":["续页"]}';
assert.deepStrictEqual(compactSnapshot.readCompactContinuationSnapshot(), { current:1, pages:["续页"] });
delete globalThis.__qaCompactSnapshotValue;

assert.strictEqual(core.normalizeCardDateValue("2026年08月30日"), "2026-08-30");
assert.strictEqual(core.normalizeReleaseDateValue("202608"), "2026/08");
assert.strictEqual(core.calculateDiscountPercent("1000", "750"), "25");
assert.strictEqual(core.calculateCurrentPriceFromDiscount("1000", "25"), "750");
assert.strictEqual(core.calculateDiscountPercent("0", "0"), "");

assert.deepStrictEqual(core.parseBatchTemplateRjs("123, RJ123；BJ456 RJ123 bad"), {
  rjs:["RJ123", "BJ456"], invalid:["bad"], duplicates:["RJ123", "RJ123"]
});
assert.deepStrictEqual(core.collectionPaginationItems(10, 1, 1), [1, 2, 3, "ellipsis", 10]);
assert.deepStrictEqual(core.collectionPaginationItems(10, 5, 1), [1, "ellipsis", 4, 5, 6, "ellipsis", 10]);
assert.deepStrictEqual(core.collectionPaginationItems(10, 10, 1), [1, "ellipsis", 8, 9, 10]);

const storage = loadFunctions([
  "isRecordObject",
  "splitStoredState",
  "mergeStoredState"
], `
  const STORAGE_SCHEMA_VERSION = 2;
  const STATE_SETTINGS_FIELDS = ["template", "theme"];
  const STATE_EDITOR_FIELDS = ["coverSrc"];
`);

const split = storage.splitStoredState({ template:"full", theme:"x", coverSrc:"image", recordTitle:"title" });
assert.strictEqual(split.draft.recordTitle, "title");
assert.strictEqual(split.settings.template, "full");
assert.strictEqual(split.editorProject.coverSrc, "image");
assert.deepStrictEqual(storage.mergeStoredState([], {}, {}), null);
assert.deepStrictEqual(storage.mergeStoredState({ storageSchemaVersion:2, recordTitle:"x" }, [], null), {
  storageSchemaVersion:2, recordTitle:"x"
});

const images = loadFunctions([
  "mapStateImageValues",
  "collectStoredImageReferences"
], 'const STATE_IMAGE_REFERENCE_PREFIX = "idb-image-v1:";');

(async () => {
  const mapped = await images.mapStateImageValues({
    cover:"data:image/png;base64,AA", nested:["text", "idb-image-v1:one"]
  }, async (value) => "mapped:" + value);
  assert.deepStrictEqual(mapped, {
    cover:"mapped:data:image/png;base64,AA",
    nested:["text", "mapped:idb-image-v1:one"]
  });
  assert.deepStrictEqual(
    Array.from(images.collectStoredImageReferences({ a:"idb-image-v1:one", b:["idb-image-v1:two", "x"] })).sort(),
    ["idb-image-v1:one", "idb-image-v1:two"]
  );
  console.log("[qa-tests] OK: all assertions passed");
})().catch((error) => {
  console.error(error && error.stack || error);
  process.exit(1);
});
