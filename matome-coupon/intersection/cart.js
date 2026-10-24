(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const cn = (...codes) => String.fromCharCode(...codes);
  const CART_KEY = 'dlsite-intersection-cart-v1';
  const UNIT_PRICE = 167;
  const RATE_URL = 'https://api.frankfurter.dev/v2/rate/jpy/cny';
  const RATE_TTL = 15 * 60 * 1000;
  const catalog = window.DLSITE_INTERSECTION;
  const text = {
    add: cn(0x52a0,0x5165,0x8d2d,0x7269,0x8f66), added: cn(0x5df2,0x52a0,0x5165,0xff0c,0x70b9,0x51fb,0x67e5,0x770b,0x8d2d,0x7269,0x8f66),
    readError: cn(0x8d2d,0x7269,0x8f66,0x8bfb,0x53d6,0x5931,0x8d25), saveError: cn(0x8d2d,0x7269,0x8f66,0x4fdd,0x5b58,0x5931,0x8d25),
    remove: cn(0x79fb,0x51fa,0x8d2d,0x7269,0x8f66), unit: cn(0x90e8), yen: cn(0x65e5,0x5143),
    total: cn(0x5408,0x8ba1), approx: cn(0x7ea6), cny: cn(0x4eba,0x6c11,0x5e01),
    loading: cn(0x6b63,0x5728,0x83b7,0x53d6,0x6c47,0x7387), rateError: cn(0x6c47,0x7387,0x83b7,0x53d6,0x5931,0x8d25),
    invalidRate: cn(0x6c47,0x7387,0x63a5,0x53e3,0x8fd4,0x56de,0x7684,0x6570,0x636e,0x65e0,0x6548),
    timeout: cn(0x8bf7,0x6c42,0x8d85,0x8fc7,0x31,0x32,0x79d2,0xff0c,0x8bf7,0x68c0,0x67e5,0x7f51,0x7edc,0x540e,0x91cd,0x8bd5),
    invalidCart: cn(0x672c,0x5730,0x8d2d,0x7269,0x8f66,0x6570,0x636e,0x683c,0x5f0f,0x65e0,0x6548),
    rateUnavailable: cn(0x4eba,0x6c11,0x5e01,0x91d1,0x989d,0x6682,0x4e0d,0x53ef,0x7528),
    referenceRate: cn(0x53c2,0x8003,0x6c47,0x7387), unknown: document.body.dataset.unknown
  };
  const icon = name => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#i-' + name);
    svg.append(use);
    return svg;
  };
  if (!Array.isArray(catalog?.works)) {
    $('cart-open').disabled = true;
    return;
  }
  const byRJ = new Map(catalog.works.map(work => [work.rj, work]));
  const cart = new Set();
  const money = new Intl.NumberFormat('zh-CN', {maximumFractionDigits: 0});
  const rmb = new Intl.NumberFormat('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  let pendingRemove = null;
  let rate = null;
  let rateDate = '';
  let rateFetchedAt = 0;
  let rateBusy = false;
  let rateError = '';
  function failure(title, error) {
    $('error-title').textContent = title;
    $('error-message').textContent = title + '\uff1a' + (error.message || String(error));
    if (!$('error-dialog').open) $('error-dialog').showModal();
  }
  try {
    const stored = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    if (!Array.isArray(stored) || !stored.every(rj => typeof rj === 'string')) throw new Error(text.invalidCart);
    stored.forEach(rj => { if (byRJ.has(rj)) cart.add(rj); });
  } catch (error) { failure(text.readError, error); }

  function persist(next) {
    try { localStorage.setItem(CART_KEY, JSON.stringify([...next])); }
    catch (error) { failure(text.saveError, error); return false; }
    cart.clear();
    next.forEach(rj => cart.add(rj));
    syncButtons();
    return true;
  }
  function syncButtons() {
    $('cart-count').textContent = String(cart.size);
    $('cart-count').hidden = !cart.size;
    for (const button of document.querySelectorAll('[data-cart-rj]')) {
      const added = cart.has(button.dataset.cartRj);
      button.classList.toggle('is-added', added);
      button.title = added ? text.added : text.add;
      button.setAttribute('aria-label', button.title);
      button.querySelector('use').setAttribute('href', added ? '#i-check' : '#i-cart-add');
    }
  }
  function createButton(work) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'cart-add';
    button.dataset.cartRj = work.rj;
    const added = cart.has(work.rj);
    button.classList.toggle('is-added', added);
    button.title = added ? text.added : text.add;
    button.setAttribute('aria-label', button.title);
    button.append(icon(added ? 'check' : 'cart-add'));
    button.addEventListener('click', () => {
      if (cart.has(work.rj)) { openCart(); return; }
      const next = new Set(cart);
      next.add(work.rj);
      persist(next);
    });
    return button;
  }
  function renderTotals() {
    const total = cart.size * UNIT_PRICE;
    $('cart-formula').textContent = cart.size + ' ' + text.unit + ' \u00d7 ' + UNIT_PRICE + ' ' + text.yen;
    $('cart-jpy').textContent = text.total + ' ' + money.format(total) + ' ' + text.yen;
    $('cart-items-count').textContent = cart.size + ' ' + text.unit;
    $('cart-cny').textContent = total === 0 ? text.approx + ' \u00a50.00 ' + text.cny :
      rate !== null ? text.approx + ' \u00a5' + rmb.format(total * rate) + ' ' + text.cny :
      rateBusy ? text.loading : text.rateUnavailable;
    $('cart-rate').textContent = rateBusy ? text.loading : rateError ? text.rateError + '\uff1a' + rateError :
      rate !== null ? 'Frankfurter \u00b7 ' + rateDate + ' \u00b7 ' + text.referenceRate + ' 1 JPY = ' + rate.toFixed(6) + ' CNY' : '';
    $('cart-rate-retry').hidden = !rateError || rateBusy;
  }
  function renderCart() {
    const scrollTop = $('cart-list').parentElement.scrollTop;
    const fragment = document.createDocumentFragment();
    for (const rj of cart) {
      const work = byRJ.get(rj);
      const row = $('cart-row-template').content.firstElementChild.cloneNode(true);
      const cover = row.querySelector('.cart-cover');
      const image = document.createElement('img');
      image.alt = work.title;
      image.width = 88;
      image.height = 66;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.addEventListener('error', () => {
        cover.textContent = document.body.dataset.coverError;
      }, {once: true});
      if (/^\.\.\/(matome20261023voice|dlsite-coupon-20261016)\/images\/RJ\d+\.webp$/.test(work.bk.path)) {
        image.src = work.bk.path;
        cover.append(image);
      } else cover.textContent = document.body.dataset.coverError;
      const title = row.querySelector('.cart-title');
      title.href = /^https:\/\/www\.dlsite\.com\//.test(work.url || '') ? work.url : '';
      title.title = work.title;
      title.querySelector('span').textContent = work.title;
      const voices = row.querySelector('.cart-voices');
      voices.textContent = work.voice_actors.join(' / ') || text.unknown;
      voices.title = voices.textContent;
      const circle = row.querySelector('.cart-circle');
      circle.textContent = work.circle.name;
      circle.title = work.circle.name;
      row.querySelector('.cart-remove').addEventListener('click', () => {
        pendingRemove = rj;
        $('cart-remove-name').textContent = work.title;
        $('cart-remove-dialog').showModal();
      });
      fragment.append(row);
    }
    $('cart-list').replaceChildren(fragment);
    $('cart-empty').hidden = cart.size > 0;
    $('cart-list').parentElement.scrollTop = scrollTop;
    renderTotals();
  }
  async function fetchRate() {
    if (rateBusy) return;
    rateBusy = true;
    rateError = '';
    renderTotals();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(RATE_URL, {signal: controller.signal, cache: 'no-store', credentials: 'omit'});
      if (!response.ok) throw new Error('HTTP ' + response.status + ' ' + response.statusText);
      const data = await response.json();
      if (typeof data.rate !== 'number' || !Number.isFinite(data.rate) || data.rate <= 0 ||
          typeof data.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) throw new Error(text.invalidRate);
      rate = data.rate;
      rateDate = data.date;
      rateFetchedAt = Date.now();
    } catch (error) {
      rate = null;
      rateError = error.name === 'AbortError' ? text.timeout : error.message || String(error);
    } finally {
      clearTimeout(timer);
      rateBusy = false;
      renderTotals();
    }
  }
  function openCart() {
    renderCart();
    if (!$('cart-dialog').open) $('cart-dialog').showModal();
    if (!rate || Date.now() - rateFetchedAt > RATE_TTL) fetchRate();
  }
  $('cart-open').addEventListener('click', openCart);
  $('cart-rate-retry').addEventListener('click', fetchRate);
  $('cart-remove-dialog').addEventListener('close', () => { pendingRemove = null; });
  $('cart-remove-confirm').addEventListener('click', () => {
    if (!pendingRemove) return;
    const next = new Set(cart);
    next.delete(pendingRemove);
    if (persist(next)) {
      $('cart-remove-dialog').close();
      renderCart();
    }
  });
  window.DLSITE_CART = {createButton};
  syncButtons();
})();

