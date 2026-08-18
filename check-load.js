#!/usr/bin/env node
/*
 * check-load.js — 页面加载冒烟检查（Node 环境，不开浏览器）
 *
 * 用最小 DOM 桩在 Node 里完整执行 js/app.js 的顶层代码，
 * 专门抓"加载时报错导致脚本中断"的问题（例如常量在声明前被使用、
 * 顶层初始化引用了不存在的对象/方法等）。
 *
 * 用法：
 *   node check-load.js            # 检查 js/app.js
 *   node check-load.js <path>     # 检查指定 JS 文件
 *
 * 注意：这是静态冒烟检查，不是浏览器功能验证。桩环境里个别异步行为
 * 与真实浏览器不同，若有误报请报告并完善桩，不要直接忽略。
 */

const fs = require("fs");
const targetPath = process.argv[2] || "js/app.js";

if (!fs.existsSync(targetPath)) {
  console.error("[check-load] 找不到文件: " + targetPath);
  process.exit(1);
}

function fakeCtx() {
  return new Proxy({}, {
    get(target, prop) {
      if (prop === "measureText") return (text) => ({ width: String(text).length * 10 });
      if (prop === "canvas") return {};
      if (prop === "getImageData") return () => ({ data: new Uint8ClampedArray(4) });
      if (prop === "createImageData") return () => ({ data: new Uint8ClampedArray(4), width: 1, height: 1 });
      if (prop === "letterSpacing") return "0px";
      if (prop === "createLinearGradient" || prop === "createRadialGradient" || prop === "createPattern") {
        return () => ({ addColorStop() {}, setTransform() {} });
      }
      if (prop === "setTransform" || prop === "resetTransform") return () => {};
      if (prop === "getTransform") return () => ({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
      if (typeof prop === "string" && /^[a-z]/.test(prop) && !(prop in target)) return () => {};
      return target[prop];
    },
    set(target, prop, value) { target[prop] = value; return true; }
  });
}

function fakeStyle() {
  const values = {};
  return {
    setProperty(name, value) { values[name] = String(value); },
    getPropertyValue(name) { return name in values ? values[name] : ""; },
    removeProperty(name) { delete values[name]; }
  };
}

function matchesSimple(node, part) {
  if (!node) return false;
  if (part.startsWith(".")) return String(node.className || "").split(/\s+/).includes(part.slice(1));
  if (part.startsWith("#")) return node.id === part.slice(1);
  return String(node.tagName || node.nodeName || "").toLowerCase() === part.toLowerCase();
}

function collectDescendants(root, part, out) {
  for (const child of root.children || []) {
    if (matchesSimple(child, part)) out.push(child);
    collectDescendants(child, part, out);
  }
  return out;
}

function chainMatches(node, parts) {
  let current = node;
  for (let i = parts.length - 1; i >= 0; i -= 1) {
    if (!current || !matchesSimple(current, parts[i])) return false;
    current = current.parentNode;
  }
  return true;
}

function fakeElement(id, tagName) {
  const tag = String(tagName || "div").toUpperCase();
  const el = {
    id: id || "",
    tagName: tag,
    nodeName: tag,
    nodeType: 1,
    children: [],
    childNodes: [],
    firstChild: null,
    parentNode: null,
    style: fakeStyle(),
    dataset: {},
    classList: {
      _set: new Set(),
      add: function (...names) { names.forEach((n) => this._set.add(n)); },
      remove: function (...names) { names.forEach((n) => this._set.delete(n)); },
      contains: function (name) { return this._set.has(name); },
      toggle: function (name, force) {
        if (force === undefined) { this._set.has(name) ? this._set.delete(name) : this._set.add(name); }
        else { force ? this._set.add(name) : this._set.delete(name); }
      }
    },
    attributes: {},
    value: "",
    textContent: "",
    innerText: "",
    innerHTML: "",
    hidden: false,
    disabled: false,
    checked: false,
    src: "",
    alt: "",
    type: "text",
    scrollHeight: 0,
    scrollWidth: 0,
    offsetWidth: 100,
    offsetHeight: 100,
    clientWidth: 100,
    clientHeight: 100,
    width: 100,
    height: 100,
    complete: true,
    naturalWidth: 100,
    naturalHeight: 100,
    files: [],
    options: [],
    selectedIndex: -1,
    listeners: {},
    addEventListener(type, fn) { (this.listeners[type] = this.listeners[type] || []).push(fn); },
    removeEventListener() {},
    appendChild(child) { this.children.push(child); this.childNodes.push(child); child.parentNode = this; return child; },
    append(...nodes) { nodes.forEach((n) => this.appendChild(n)); },
    prepend(...nodes) { nodes.forEach((n) => this.appendChild(n)); },
    removeChild(child) {
      const i = this.children.indexOf(child);
      if (i >= 0) this.children.splice(i, 1);
      const j = this.childNodes.indexOf(child);
      if (j >= 0) this.childNodes.splice(j, 1);
      return child;
    },
    replaceChild(newChild, oldChild) { this.removeChild(oldChild); return this.appendChild(newChild); },
    insertBefore(child, before) { return this.appendChild(child); },
    cloneNode() { return fakeElement(this.id); },
    contains() { return false; },
    closest() { return null; },
    matches() { return false; },
    querySelector() { return null; },
    querySelector(selector) {
      if (!selector) return null;
      const parts = selector.trim().split(/\s+/).filter(Boolean);
      if (!parts.length) return null;
      if (parts.length === 1) {
        if (matchesSimple(this, parts[0])) return this;
        return collectDescendants(this, parts[0], [])[0] || null;
      }
      const last = parts[parts.length - 1];
      for (const candidate of collectDescendants(this, last, [])) {
        if (chainMatches(candidate, parts)) return candidate;
      }
      return null;
    },
    querySelectorAll(selector) {
      const parts = selector.trim().split(/\s+/).filter(Boolean);
      if (!parts.length) return [];
      const last = parts[parts.length - 1];
      const out = [];
      if (parts.length === 1 && matchesSimple(this, parts[0])) out.push(this);
      for (const candidate of collectDescendants(this, last, [])) {
        if (chainMatches(candidate, parts)) out.push(candidate);
      }
      return out;
    },
    getContext() { return fakeCtx(); },
    getBoundingClientRect() { return { left: 0, top: 0, right: 100, bottom: 100, width: 100, height: 100, x: 0, y: 0 }; },
    setAttribute(name, value) { this.attributes[name] = String(value); },
    getAttribute(name) { return name in this.attributes ? this.attributes[name] : null; },
    removeAttribute(name) { delete this.attributes[name]; },
    hasAttribute(name) { return name in this.attributes; },
    focus() {},
    blur() {},
    click() {},
    scrollIntoView() {},
    scrollTo() {},
    dispatchEvent() { return true; },
    requestFullscreen() {},
    select() {},
    setSelectionRange() {},
    remove() { if (this.parentNode) this.parentNode.removeChild(this); },
    replaceWith(node) { if (this.parentNode) this.parentNode.replaceChild(node, this); },
    before() {},
    after() {},
    toDataURL() { return "data:image/png;base64,AAAA"; },
    drawImage() {},
    decode() { return Promise.resolve(); }
  };
  return el;
}

function FakeImage() {
  const img = fakeElement("img");
  img.tagName = "IMG";
  img.nodeName = "IMG";
  img.decode = () => Promise.resolve();
  let srcValue = "";
  Object.defineProperty(img, "src", {
    get: () => srcValue,
    set: (value) => {
      srcValue = String(value || "");
      queueMicrotask(() => {
        if (typeof img.onload === "function") img.onload();
      });
    },
    configurable: true
  });
  return img;
}

function createIndexedDbStub() {
  const databases = new Map();

  function makeRequest(finish) {
    const request = {
      result: null,
      error: null,
      onsuccess: null,
      onerror: null,
      onupgradeneeded: null,
      onblocked: null
    };
    queueMicrotask(() => {
      try {
        request.result = finish();
        if (typeof request.onupgradeneeded === "function") request.onupgradeneeded();
        if (typeof request.onsuccess === "function") request.onsuccess();
      } catch (error) {
        request.error = error;
        if (typeof request.onerror === "function") request.onerror();
      }
    });
    return request;
  }

  function openDatabase(name, version) {
    return makeRequest(() => {
      let db = databases.get(name);
      if (!db) {
        db = createDatabase(name);
        databases.set(name, db);
      }
      return db;
    });
  }

  function createDatabase(name) {
    const stores = new Map();
    const db = {
      name,
      objectStoreNames: {
        contains: (storeName) => stores.has(storeName)
      },
      createObjectStore(storeName) {
        if (!stores.has(storeName)) stores.set(storeName, new Map());
        return storeStub(stores.get(storeName));
      },
      transaction(storeName, mode) {
        const store = stores.get(storeName) || new Map();
        if (!stores.has(storeName)) stores.set(storeName, store);
        return {
          objectStore: () => storeStub(store),
          oncomplete: null,
          onerror: null,
          onabort: null
        };
      },
      close() {}
    };
    return db;
  }

  function storeStub(data) {
    return {
      get(key) {
        return makeRequest(() => (data.has(key) ? data.get(key) : undefined));
      },
      getAll() {
        return makeRequest(() => Array.from(data.values()));
      },
      put(value, key) {
        if (key === undefined) {
          const id = value && value.id;
          if (id !== undefined) data.set(id, value);
          else data.set(String(Math.random()), value);
        } else {
          data.set(key, value);
        }
        return makeRequest(() => key);
      },
      delete(key) {
        data.delete(key);
        return makeRequest(() => undefined);
      },
      clear() {
        data.clear();
        return makeRequest(() => undefined);
      }
    };
  }

  return { open: openDatabase };
}

const elements = new Map();
const documentStub = {
  getElementById(id) {
    if (!elements.has(id)) elements.set(id, fakeElement(id));
    return elements.get(id);
  },
  querySelector() { return fakeElement("qs"); },
  querySelectorAll() { return []; },
  createElement(tagName) { return fakeElement("created", tagName); },
  createDocumentFragment() { return fakeElement("fragment"); },
  createTextNode(text) { return { nodeType: 3, textContent: text, data: text, nodeName: "#text" }; },
  createRange() { return { selectNodeContents() {}, collapse() {}, setStart() {}, setEnd() {} }; },
  addEventListener() {},
  removeEventListener() {},
  body: fakeElement("body"),
  documentElement: fakeElement("html"),
  head: fakeElement("head"),
  hidden: false,
  visibilityState: "visible",
  activeElement: null,
  fonts: { ready: Promise.resolve(), load: () => Promise.resolve() },
  exitFullscreen() { return Promise.resolve(); },
  fullscreenElement: null,
  defaultView: null
};

const localStorageStub = (() => {
  const store = new Map();
  return {
    getItem(key) { return store.has(key) ? store.get(key) : null; },
    setItem(key, value) { store.set(key, String(value)); },
    removeItem(key) { store.delete(key); },
    clear() { store.clear(); },
    key(i) { return Array.from(store.keys())[i] || null; },
    get length() { return store.size; }
  };
})();

const windowStub = {
  getComputedStyle() {
    return {
      fontStyle: "normal", fontVariant: "normal", fontWeight: "400",
      fontSize: "16px", fontFamily: "sans-serif", letterSpacing: "normal",
      lineHeight: "20px", display: "block", visibility: "visible", opacity: "1"
    };
  },
  addEventListener() {},
  removeEventListener() {},
  setTimeout() { return 1; },
  clearTimeout() {},
  setInterval() { return 1; },
  clearInterval() {},
  requestAnimationFrame() { return 1; },
  cancelAnimationFrame() {},
  getSelection() { return { removeAllRanges() {}, addRange() {}, toString: () => "" }; },
  innerWidth: 1280,
  innerHeight: 800,
  devicePixelRatio: 1,
  location: { href: "file:///D:/repo/index.html", search: "", hash: "" },
  navigator: {
    userAgent: "node-check-load",
    language: "zh-CN",
    onLine: true,
    clipboard: {},
    sendBeacon: () => true
  },
  matchMedia() { return { matches: false, addListener() {}, removeListener() {} }; },
  scrollTo() {},
  scrollBy() {},
  open() {},
  confirm() { return true; },
  alert() {},
  atob: (s) => Buffer.from(s, "base64").toString("binary"),
  btoa: (s) => Buffer.from(s, "binary").toString("base64"),
  URL,
  Blob,
  FileReader: function () { this.readAsDataURL = () => {}; this.readAsText = () => {}; },
  Image: FakeImage,
  MutationObserver: function () { this.observe = () => {}; this.disconnect = () => {}; },
  IntersectionObserver: function () { this.observe = () => {}; this.disconnect = () => {}; },
  ResizeObserver: function () { this.observe = () => {}; this.disconnect = () => {}; },
  CustomEvent: function (type, init) { return { type, ...init }; },
  Event: function (type) { return { type }; },
  KeyboardEvent: function (type) { return { type }; },
  MouseEvent: function (type) { return { type }; },
  PointerEvent: function (type) { return { type }; },
  TouchEvent: function (type) { return { type }; },
  DragEvent: function (type) { return { type }; },
  HTMLCanvasElement: function () {},
  Audio: function () {},
  visualViewport: { height: 800, width: 1280, pageTop: 0, offsetTop: 0 },
  indexedDB: createIndexedDbStub()
};
windowStub.window = windowStub;
windowStub.parent = windowStub;
windowStub.top = windowStub;
windowStub.self = windowStub;
windowStub.document = documentStub;
windowStub.localStorage = localStorageStub;
documentStub.defaultView = windowStub;

global.window = windowStub;
global.document = documentStub;
global.localStorage = localStorageStub;
global.navigator = windowStub.navigator;
global.Intl = Intl;
global.Node = { ELEMENT_NODE: 1, TEXT_NODE: 3 };
global.requestAnimationFrame = windowStub.requestAnimationFrame;
global.cancelAnimationFrame = windowStub.cancelAnimationFrame;
global.setTimeout = windowStub.setTimeout;
global.clearTimeout = windowStub.clearTimeout;
global.setInterval = windowStub.setInterval;
global.clearInterval = windowStub.clearInterval;
global.MutationObserver = windowStub.MutationObserver;
global.IntersectionObserver = windowStub.IntersectionObserver;
global.ResizeObserver = windowStub.ResizeObserver;
global.URL = URL;
global.Blob = Blob;
global.FileReader = windowStub.FileReader;
global.Image = windowStub.Image;
global.CustomEvent = windowStub.CustomEvent;
global.Event = windowStub.Event;
global.KeyboardEvent = windowStub.KeyboardEvent;
global.MouseEvent = windowStub.MouseEvent;
global.PointerEvent = windowStub.PointerEvent;
global.TouchEvent = windowStub.TouchEvent;
global.DragEvent = windowStub.DragEvent;
global.HTMLCanvasElement = windowStub.HTMLCanvasElement;
global.Audio = windowStub.Audio;
global.getComputedStyle = windowStub.getComputedStyle;
global.indexedDB = windowStub.indexedDB;
global.CSS = { supports: () => true, escape: (value) => String(value) };
global.screen = { width: 1280, height: 800, orientation: { type: "landscape-primary" } };

process.on("unhandledRejection", (error) => {
  console.error("[check-load] 加载流程中的异步任务出错（未捕获的 Promise 拒绝）:");
  console.error(error && error.stack || error);
  process.exit(3);
});

try {
  const code = fs.readFileSync(targetPath, "utf8");
  new Function("window", "document", "localStorage", "navigator", code)(
    windowStub, documentStub, localStorageStub, windowStub.navigator
  );
} catch (error) {
  console.error("[check-load] 顶层初始化报错，脚本会在绑定按钮事件前中断:");
  console.error(error && error.stack || error);
  process.exit(2);
}

setImmediate(() => {
  console.log("[check-load] OK: " + targetPath + " 顶层初始化无报错");
});
