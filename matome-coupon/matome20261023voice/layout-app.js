(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const cn = (...codes) => String.fromCharCode(...codes);
  const labels = document.body.dataset;
  const STORE_KEY = 'dlsite-matome20261023voice-ui-v1';
  const DISPLAY_KEY = 'dlsite-matome20261023voice-display-v1';
  const UNLISTED = '__unlisted__';
  const app = $('app');
  const displayControls = ['hide-rj', 'hide-cart-buttons'];
  let displaySaved = {};
  try { displaySaved = JSON.parse(localStorage.getItem(DISPLAY_KEY) || '{}') || {}; } catch (_) { /* Optional display preferences. */ }
  for (const id of displayControls) {
    const input = $(id);
    input.checked = displaySaved[id] === true;
    $('results').classList.toggle(id, input.checked);
    input.addEventListener('change', () => {
      $('results').classList.toggle(id, input.checked);
      try {
        localStorage.setItem(DISPLAY_KEY, JSON.stringify(Object.fromEntries(
          displayControls.map(key => [key, $(key).checked]))));
      } catch (_) { /* The display switch still works when storage is unavailable. */ }
    });
  }
  const mobile = window.matchMedia('(max-width: 640px)');
  const collator = new Intl.Collator(['ja', 'zh-CN'], {numeric: true, sensitivity: 'base'});
  const fold = value => String(value || '').normalize('NFKC').toLocaleLowerCase();
  const safeURL = url => /^https:\/\/www\.dlsite\.com\//.test(url || '') ? url : '';
  const icon = name => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#i-' + name);
    svg.append(use);
    return svg;
  };

  // Shared site-owned dialogs: only the topmost backdrop closes its dialog.
  for (const dialog of document.querySelectorAll('dialog')) {
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right ||
          event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
    dialog.querySelectorAll('[data-close-dialog]').forEach(button => {
      button.addEventListener('click', () => dialog.close());
    });
  }
  function showError(message, title = cn(0x6570,0x636e,0x52a0,0x8f7d,0x5931,0x8d25)) {
    $('error-title').textContent = title;
    if (message) $('error-message').textContent = message;
    if (!$('error-dialog').open) $('error-dialog').showModal();
  }
  const catalog = window.DLSITE_INTERSECTION;
  if (!catalog || !Array.isArray(catalog.works) || !catalog.metadata) {
    $('batch-open').disabled = true;
    $('results').setAttribute('aria-busy', 'false');
    $('pager').hidden = true;
    showError();
    return;
  }

  const works = catalog.works;
  const CARD_CACHE_LIMIT = 96;
  const cardCache = new Map();
  const batchSelected = new Set();
  const batchActions = [...document.querySelectorAll('[data-batch-action]')];
  let batchMode = false;
  let pendingBatch = null;
  const voiceStats = new Map();
  const circleStats = new Map();
  const indexed = works.map((work, index) => {
    const voices = work.voice_actors.length ? work.voice_actors : [UNLISTED];
    for (const name of new Set(voices)) {
      const item = voiceStats.get(name) || {name: name === UNLISTED ? labels.unknown : name, count: 0};
      item.count += 1;
      voiceStats.set(name, item);
    }
    const circleID = work.circle.id || work.circle.name;
    const item = circleStats.get(circleID) || {name: work.circle.name, count: 0};
    item.count += 1;
    circleStats.set(circleID, item);
    return {work, index, voices, circleID,
      text: fold([work.title, work.rj, work.circle.name, work.voice_actors.join(' ')].join(' '))};
  });
  let saved = {};
  try { saved = JSON.parse(sessionStorage.getItem(STORE_KEY) || '{}') || {}; } catch (_) { /* Optional UI preference storage. */ }
  const selectedVoices = new Set((Array.isArray(saved.voices) ? saved.voices : []).filter(name => voiceStats.has(name)));
  const selectedCircles = new Set((Array.isArray(saved.circles) ? saved.circles : []).filter(id => circleStats.has(id)));
  const languageButtons = [...$('language-filters').querySelectorAll('button[data-language]')];
  const purchasedFilter = $('purchased-filter');
  let showPurchased = false;
  const selectedLanguages = new Set((Array.isArray(saved.languages) ? saved.languages : [])
    .filter(key => languageButtons.some(button => button.dataset.language === key)));
  let page = Math.max(1, Math.floor(Number(saved.page) || 1));
  let pageSize = mobile.matches ? 16 : 20;
  let matched = indexed;
  let saveTimer = 0;
  let queryTimer = 0;
  let imageErrorShown = false;
  $('query').value = typeof saved.query === 'string' ? saved.query : '';
  if (['default', 'title', 'circle', 'rj'].includes(saved.sort)) $('sort').value = saved.sort;

  function syncBatchSelection() {
    $('results').classList.toggle('batch-mode', batchMode);
    $('batch-label').textContent = batchMode ? cn(0x6279,0x91cf,0x64cd,0x4f5c) : cn(0x6279,0x91cf,0x7ba1,0x7406);
    $('batch-open').setAttribute('aria-pressed', String(batchMode));
    if (batchMode) $('batch-open').setAttribute('aria-haspopup', 'dialog');
    else $('batch-open').removeAttribute('aria-haspopup');
    $('batch-count').textContent = String(batchSelected.size);
    $('batch-count').hidden = !batchMode;
    $('batch-summary').textContent = cn(0x5df2,0x9009,0x62e9) + ' ' + batchSelected.size + ' ' + cn(0x90e8,0x4f5c,0x54c1);
    batchActions.forEach(button => { button.disabled = batchSelected.size === 0; });
    $('batch-clear-selection').disabled = batchSelected.size === 0;
    $('batch-select-page').disabled = matched.length === 0;
    document.querySelectorAll('[data-batch-rj]').forEach(input => {
      input.checked = batchSelected.has(input.dataset.batchRj);
    });
  }
  function runBatch(action, rjs) {
    const button = batchActions.find(item => item.dataset.batchAction === action);
    const affected = window.DLSITE_CART.applyBatch(action, rjs);
    if (affected === null) return false;
    $('batch-status').textContent = button.textContent + '\uff1a' + affected + ' ' + cn(0x90e8);
    syncBatchSelection();
    return true;
  }
  $('batch-open').addEventListener('click', () => {
    if (!batchMode) {
      batchMode = true;
      $('batch-status').textContent = '';
      syncBatchSelection();
      return;
    }
    syncBatchSelection();
    if (!$('batch-dialog').open) $('batch-dialog').showModal();
  });
  batchActions.forEach(button => {
    button.addEventListener('click', () => {
      if (!batchSelected.size) return;
      const action = button.dataset.batchAction;
      const rjs = [...batchSelected];
      if (action.endsWith('-remove')) {
        pendingBatch = {action, rjs};
        $('batch-confirm-message').textContent = cn(0x786e,0x8ba4,0x5bf9,0x9009,0x4e2d,0x7684) + ' ' + rjs.length + ' ' +
          cn(0x90e8,0x4f5c,0x54c1,0x6267,0x884c) + '\u300c' + button.textContent + '\u300d\uff1f';
        $('batch-confirm-dialog').showModal();
      } else runBatch(action, rjs);
    });
  });
  $('batch-confirm').addEventListener('click', () => {
    if (pendingBatch && runBatch(pendingBatch.action, pendingBatch.rjs)) $('batch-confirm-dialog').close();
  });
  $('batch-confirm-dialog').addEventListener('close', () => { pendingBatch = null; });
  $('batch-select-page').addEventListener('click', () => {
    matched.slice((page - 1) * pageSize, page * pageSize).forEach(item => batchSelected.add(item.work.rj));
    $('batch-status').textContent = '';
    syncBatchSelection();
  });
  $('batch-clear-selection').addEventListener('click', () => {
    batchSelected.clear();
    $('batch-status').textContent = '';
    syncBatchSelection();
  });
  $('batch-exit').addEventListener('click', () => {
    batchMode = false;
    batchSelected.clear();
    $('batch-dialog').close();
    syncBatchSelection();
  });

  function saveState() {
    try {
      sessionStorage.setItem(STORE_KEY, JSON.stringify({query: $('query').value,
        sort: $('sort').value, voices: [...selectedVoices], circles: [...selectedCircles], languages: [...selectedLanguages],
        page, scroll: app.scrollTop}));
    } catch (_) { /* Browsing still works when storage is unavailable. */ }
  }
  app.addEventListener('scroll', () => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveState, 180);
  }, {passive: true});
  window.addEventListener('pagehide', saveState);

  function makeOptions(kind, stats, selected) {
    const container = $(kind + '-options');
    const entries = [...stats.entries()].sort((a, b) =>
      b[1].count - a[1].count || collator.compare(a[1].name, b[1].name));
    const fragment = document.createDocumentFragment();
    entries.forEach(([value, info], index) => {
      const label = document.createElement('label');
      label.className = 'option';
      label.dataset.search = fold(info.name);
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.value = value;
      input.id = kind + '-option-' + index;
      input.checked = selected.has(value);
      input.addEventListener('change', () => {
        if (input.checked) selected.add(value); else selected.delete(value);
        applyFilters(true);
      });
      const name = document.createElement('span');
      name.className = 'option-name';
      name.textContent = info.name;
      const count = document.createElement('span');
      count.className = 'option-count';
      count.textContent = String(info.count);
      label.append(input, name, count);
      fragment.append(label);
    });
    container.append(fragment);
    $(kind + '-query').addEventListener('input', event => {
      const tokens = fold(event.target.value).trim().split(/\s+/).filter(Boolean);
      for (const label of container.children) {
        label.hidden = !tokens.every(token => label.dataset.search.includes(token));
      }
    });
  }
  makeOptions('voice', voiceStats, selectedVoices);
  makeOptions('circle', circleStats, selectedCircles);
  document.addEventListener('click', event => {
    document.querySelectorAll('.filter-group[open]').forEach(details => {
      if (!details.contains(event.target)) details.open = false;
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || document.querySelector('dialog[open]')) return;
    const details = document.querySelector('.filter-group[open]');
    if (details) {
      details.open = false;
      details.querySelector('summary').focus();
    }
  });
  document.querySelectorAll('.filter-group').forEach(details => {
    details.addEventListener('toggle', () => {
      if (!details.open) return;
      document.querySelectorAll('.filter-group').forEach(other => {
        if (details !== other) other.open = false;
      });
    });
  });
  $('filter-toggle').addEventListener('click', () => {
    const expanded = $('filter-toggle').getAttribute('aria-expanded') !== 'true';
    $('filter-toggle').setAttribute('aria-expanded', String(expanded));
    $('search-form').classList.toggle('mobile-expanded', expanded);
    if (!expanded) document.querySelectorAll('.filter-group').forEach(details => { details.open = false; });
  });

  function updateFilterLabels() {
    for (const [kind, selected, stats, name] of [
      ['voice', selectedVoices, voiceStats, labels.voice],
      ['circle', selectedCircles, circleStats, labels.circle]
    ]) {
      $(kind + '-summary').textContent = name + '\uff1a' + (selected.size ? selected.size : labels.all);
      $(kind + '-options').querySelectorAll('input').forEach(input => { input.checked = selected.has(input.value); });
    }
    const chips = [];
    for (const [selected, stats, category] of [
      [selectedVoices, voiceStats, labels.voice], [selectedCircles, circleStats, labels.circle]
    ]) {
      for (const value of selected) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'chip';
        const name = category + '\uff1a' + stats.get(value).name;
        button.textContent = name;
        button.setAttribute('aria-label', labels.remove + ' ' + name);
        button.append(icon('close'));
        button.addEventListener('click', () => { selected.delete(value); applyFilters(true); });
        chips.push(button);
      }
    }
    $('selected-filters').replaceChildren(...chips);
    $('selected-filters').hidden = !chips.length;
    const filterCount = chips.length + selectedLanguages.size + Number(showPurchased);
    $('filter-count').textContent = String(filterCount);
    $('filter-count').hidden = !filterCount;
    purchasedFilter.classList.toggle('is-present', showPurchased);
    purchasedFilter.setAttribute('aria-pressed', String(showPurchased));
    for (const button of languageButtons) {
      const selected = selectedLanguages.has(button.dataset.language);
      button.classList.toggle('is-present', selected);
      button.setAttribute('aria-pressed', String(selected));
    }
  }

  function languageStates(work) {
    const language = work.language || {};
    return {
      version: language.is_chinese_version,
      subtitles: language.chinese_subtitles === 'yes' ? true : language.chinese_subtitles === 'no' ? false : null,
      script: language.chinese_script === 'yes' ? true : language.chinese_script === 'no' ? false : null
    };
  }

  function card(work, index) {
    const cached = cardCache.get(work.rj);
    if (cached) {
      cardCache.delete(work.rj);
      cardCache.set(work.rj, cached);
      cached.querySelector('.purchased-badge').hidden = !window.DLSITE_CART.isPurchased(work.rj);
      const image = cached.querySelector('.cover img');
      if (image && index < 8) image.loading = 'eager';
      if (image && index < (mobile.matches ? 2 : 4)) image.fetchPriority = 'high';
      if (image?.complete && image.naturalWidth > 0) image.decoding = 'sync';
      return cached;
    }
    const article = $('card-template').content.firstElementChild.cloneNode(true);
    const cover = article.querySelector('.cover');
    const rj = article.querySelector('.rj');
    rj.textContent = work.rj;
    const cartButton = window.DLSITE_CART.createButton(work);
    cover.append(cartButton);
    const purchasedBadge = document.createElement('span');
    purchasedBadge.className = 'purchased-badge';
    purchasedBadge.textContent = cn(0x5df2,0x8d2d,0x4e70);
    purchasedBadge.hidden = !window.DLSITE_CART.isPurchased(work.rj);
    cover.append(purchasedBadge);
    const batchPick = document.createElement('label');
    batchPick.className = 'batch-pick';
    const batchInput = document.createElement('input');
    batchInput.type = 'checkbox';
    batchInput.dataset.batchRj = work.rj;
    batchInput.checked = batchSelected.has(work.rj);
    batchInput.setAttribute('aria-label', cn(0x9009,0x62e9) + ' ' + work.title);
    batchInput.addEventListener('change', () => {
      if (batchInput.checked) batchSelected.add(work.rj); else batchSelected.delete(work.rj);
      $('batch-status').textContent = '';
      syncBatchSelection();
    });
    batchPick.append(batchInput);
    cover.append(batchPick);
    const image = document.createElement('img');
    image.alt = work.title;
    image.width = work.bk.width || 320;
    image.height = work.bk.height || 240;
    image.loading = index < 8 ? 'eager' : 'lazy';
    image.fetchPriority = index < (mobile.matches ? 2 : 4) ? 'high' : 'auto';
    image.decoding = 'async';
    image.addEventListener('error', () => {
      if (cardCache.get(work.rj) === article) cardCache.delete(work.rj);
      cover.classList.add('missing');
      cover.replaceChildren(document.createTextNode(labels.coverError), rj, cartButton, purchasedBadge, batchPick);
      if (!imageErrorShown) {
        imageErrorShown = true;
        showError(labels.coverError + '\uff1a' + work.bk.path);
      }
    }, {once: true});
    if (/^\.\.\/(matome20261023voice|dlsite-coupon-20261016)\/images\/RJ\d+\.webp$/.test(work.bk.path)) {
      image.src = work.bk.path;
      cover.append(image);
    } else {
      cover.classList.add('missing');
      cover.replaceChildren(document.createTextNode(labels.coverError), rj, cartButton, purchasedBadge, batchPick);
    }
    const title = article.querySelector('.title-link');
    title.href = safeURL(work.url);
    title.title = work.title;
    title.querySelector('span').textContent = work.title;
    title.addEventListener('click', saveState);
    const voices = article.querySelector('.voices');
    voices.textContent = work.voice_actors.join(' / ') || labels.unknown;
    voices.title = voices.textContent;
    const circle = article.querySelector('.circle a');
    circle.textContent = work.circle.name;
    circle.href = safeURL(work.circle.url);
    circle.title = work.circle.name;
    circle.addEventListener('click', saveState);
    const states = languageStates(work);
    article.querySelectorAll('.language-tag').forEach(tag => {
      const state = states[tag.dataset.language];
      tag.classList.toggle('is-present', state === true);
      const status = state === true ? cn(0x6709) : state === false ? cn(0x5426) : cn(0x672a, 0x6807, 0x6ce8);
      tag.title = tag.textContent + '\uff1a' + status;
      tag.setAttribute('aria-label', tag.title);
    });
    cardCache.set(work.rj, article);
    if (cardCache.size > CARD_CACHE_LIMIT) cardCache.delete(cardCache.keys().next().value);
    return article;
  }

  function renderPageNumbers(pages) {
    const windowSize = mobile.matches ? 3 : 5;
    const start = Math.max(1, Math.min(page - Math.floor(windowSize / 2), pages - windowSize + 1));
    const visible = new Set([1, pages]);
    for (let number = start; number <= Math.min(pages, start + windowSize - 1); number++) visible.add(number);
    const items = [];
    let previous = 0;
    for (const number of [...visible].sort((a, b) => a - b)) {
      if (previous && number - previous > 1) {
        const gap = document.createElement('span');
        gap.className = 'page-gap';
        gap.textContent = '\u2026';
        gap.setAttribute('aria-hidden', 'true');
        items.push(gap);
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'page-number';
      button.textContent = String(number);
      button.setAttribute('aria-label', cn(0x7b2c) + number + cn(0x9875));
      if (number === page) button.setAttribute('aria-current', 'page');
      button.addEventListener('click', () => { if (number !== page) turn(number); });
      items.push(button);
      previous = number;
    }
    $('page-numbers').replaceChildren(...items);
  }

  function render() {
    const pages = Math.max(1, Math.ceil(matched.length / pageSize));
    page = Math.min(Math.max(1, page), pages);
    imageErrorShown = false;
    const cards = matched.slice((page - 1) * pageSize, page * pageSize).map((item, index) => card(item.work, index));
    const results = $('results');
    if (results.children.length !== cards.length || cards.some((node, index) => results.children[index] !== node)) {
      results.replaceChildren(...cards);
    }
    window.DLSITE_CART.refreshButtons();
    syncBatchSelection();
    $('results').setAttribute('aria-busy', 'false');
    $('count').textContent = labels.total + ' ' + (matched.length === works.length ? works.length : matched.length + ' / ' + works.length) + ' ' + labels.works;
    $('empty').hidden = matched.length > 0;
    $('pager').hidden = matched.length === 0;
    $('prev').disabled = page === 1;
    $('next').disabled = page === pages;
    $('first').disabled = page === 1;
    $('last').disabled = page === pages;
    $('page-jump-input').max = String(pages);
    $('page-jump-input').value = '';
    renderPageNumbers(pages);
    updateFilterLabels();
    saveState();
  }
  function applyFilters(resetPage) {
    const tokens = fold($('query').value).trim().split(/\s+/).filter(Boolean);
    matched = indexed.filter(item => tokens.every(token => item.text.includes(token)) &&
      window.DLSITE_CART.isPurchased(item.work.rj) === showPurchased &&
      (!selectedVoices.size || item.voices.some(voice => selectedVoices.has(voice))) &&
      (!selectedCircles.size || selectedCircles.has(item.circleID)) &&
      [...selectedLanguages].every(key => languageStates(item.work)[key] === true));
    const sort = $('sort').value;
    if (sort !== 'default') matched.sort((a, b) => {
      const av = sort === 'circle' ? a.work.circle.name : a.work[sort];
      const bv = sort === 'circle' ? b.work.circle.name : b.work[sort];
      return collator.compare(av, bv) || a.index - b.index;
    });
    if (resetPage) page = 1;
    render();
  }
  function reset() {
    clearTimeout(queryTimer);
    selectedVoices.clear();
    selectedCircles.clear();
    selectedLanguages.clear();
    showPurchased = false;
    $('query').value = '';
    $('sort').value = 'default';
    for (const kind of ['voice', 'circle']) {
      $(kind + '-query').value = '';
      Array.from($(kind + '-options').children).forEach(label => { label.hidden = false; });
    }
    document.querySelectorAll('.filter-group').forEach(details => { details.open = false; });
    applyFilters(true);
  }
  $('query').addEventListener('input', () => {
    clearTimeout(queryTimer);
    queryTimer = setTimeout(() => applyFilters(true), 120);
  });
  $('search-form').addEventListener('submit', event => { event.preventDefault(); clearTimeout(queryTimer); applyFilters(true); });
  $('sort').addEventListener('change', () => applyFilters(true));
  purchasedFilter.addEventListener('click', () => {
    showPurchased = !showPurchased;
    applyFilters(true);
  });
  window.addEventListener('dlsite-purchases-change', () => applyFilters(false));
  for (const button of languageButtons) {
    button.addEventListener('click', () => {
      const key = button.dataset.language;
      if (selectedLanguages.has(key)) selectedLanguages.delete(key); else selectedLanguages.add(key);
      applyFilters(true);
    });
  }
  $('reset').addEventListener('click', reset);
  $('empty-reset').addEventListener('click', reset);
  function turn(next) {
    page = next;
    render();
    app.scrollTo({top: 0, behavior: 'auto'});
    saveState();
  }
  $('prev').addEventListener('click', () => turn(page - 1));
  $('next').addEventListener('click', () => turn(page + 1));
  $('first').addEventListener('click', () => turn(1));
  $('last').addEventListener('click', () => turn(Math.max(1, Math.ceil(matched.length / pageSize))));
  $('page-jump').addEventListener('submit', event => {
    event.preventDefault();
    const input = $('page-jump-input');
    const value = input.value.trim();
    const target = Number(value);
    const pages = Math.max(1, Math.ceil(matched.length / pageSize));
    if (!value || !Number.isInteger(target) || target < 1 || target > pages) {
      showError(cn(0x8bf7,0x8f93,0x5165,0x31,0x81f3) + pages + cn(0x4e4b,0x95f4,0x7684,0x6574,0x6570,0x9875,0x7801,0x3002), cn(0x9875,0x7801,0x8f93,0x5165,0x65e0,0x6548));
      return;
    }
    input.blur();
    turn(target);
  });
  mobile.addEventListener('change', () => {
    const first = (page - 1) * pageSize;
    pageSize = mobile.matches ? 16 : 20;
    page = Math.floor(first / pageSize) + 1;
    render();
  });

  const meta = catalog.metadata;
  $('total').textContent = works.length + ' ' + cn(0x90e8);
  meta.sources.forEach((source, index) => {
    const headerLink = $(index === 0 ? 'bulk-link' : 'coupon-link');
    headerLink.href = safeURL(source.source_url);
  });
  applyFilters(false);
  requestAnimationFrame(() => { app.scrollTop = Math.max(0, Number(saved.scroll) || 0); });
})();
