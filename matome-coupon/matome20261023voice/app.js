(() => {
  'use strict';
  const cn = (...codes) => String.fromCharCode(...codes);
  const labels = {
    voice:cn(0x58f0,0x4f18), circle:cn(0x793e,0x56e2),
    version:cn(0x4e2d,0x6587,0x7248,0x672c), subtitles:cn(0x4e2d,0x6587,0x5b57,0x5e55), script:cn(0x4e2d,0x6587,0x53f0,0x672c),
    chineseVersion:cn(0x4e2d,0x6587,0x7248), nonChineseVersion:cn(0x975e,0x4e2d,0x6587,0x7248),
    unspecified:cn(0x672a,0x6807,0x6ce8), yes:cn(0x662f), no:cn(0x5426), has:cn(0x6709), without:cn(0x65e0),
    hasSubtitles:cn(0x6709,0x4e2d,0x6587,0x5b57,0x5e55), noSubtitles:cn(0x65e0,0x4e2d,0x6587,0x5b57,0x5e55),
    hasScript:cn(0x542b,0x4e2d,0x6587,0x53f0,0x672c), noScript:cn(0x65e0,0x4e2d,0x6587,0x53f0,0x672c),
    unknown:cn(0x5b98,0x65b9,0x672a,0x6807,0x6ce8),
    pending:cn(0x5f85,0x8865,0x5168), cover:cn(0x5c01,0x9762,0x6682,0x7f3a),
    open:cn(0x6253,0x5f00,0x4f5c,0x54c1,0x9875)+' \u2197',
    works:cn(0x90e8,0x4f5c,0x54c1), snapshot:cn(0x91c7,0x96c6,0x65f6,0x95f4),
    partial:cn(0x6570,0x636e,0x91c7,0x96c6,0x5c1a,0x672a,0x5b8c,0x6210)
  };
  const $ = id => document.getElementById(id);
  const catalog = window.DLSITE_CATALOG;
  const dialog = $('error-dialog');
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  if (!catalog || !Array.isArray(catalog.works)) { dialog.showModal(); return; }
  const fold = value => String(value || '').normalize('NFKC').toLocaleLowerCase();
  const works = catalog.works;
  function versionText(info) {
    if (info.is_chinese_version === true) return labels.yes + (info.edition_label ? ` (${info.edition_label})` : '');
    if (info.is_chinese_version === false) return labels.no + (info.edition_label ? ` (${info.edition_label})` : '');
    return labels.unspecified;
  }
  function subtitleText(info) {
    return info.chinese_subtitles === 'yes' ? labels.has : info.chinese_subtitles === 'no' ? labels.without : labels.unspecified;
  }
  const indexed = works.map(work => {
    const info = work.language || {};
    const fields = {title:fold(work.title), voice:fold(work.voice_actors.join(' ')),
      rj:fold(work.rj), circle:fold(work.circle.name),
      language:fold([info.is_chinese_version === true ? labels.chineseVersion : '', info.edition_label || '',
        info.chinese_subtitles === 'yes' ? labels.hasSubtitles : '', info.chinese_script === 'yes' ? labels.hasScript : ''].join(' '))};
    fields.all = Object.values(fields).join(' ');
    return {work, fields};
  });
  let page = 1;
  let matched = indexed;
  const pageSize = 48;
  function link(url, title) {
    const a = document.createElement('a');
    if (/^https:\/\/www\.dlsite\.com\//.test(url || '')) a.href = url;
    a.textContent = title;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
  }
  function card(work) {
    const article = document.createElement('article');
    article.className = 'card';
    const cover = link(work.url, '');
    cover.className = 'cover';
    cover.setAttribute('aria-label', work.title);
    cover.dataset.label = labels.cover;
    if (work.bk.path && /^images\/RJ\d+\.webp$/.test(work.bk.path)) {
      const img = document.createElement('img');
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      img.width = work.bk.width;
      img.height = work.bk.height;
      img.addEventListener('error', () => { img.remove(); cover.classList.add('missing'); }, {once:true});
      img.src = work.bk.path;
      cover.append(img);
    } else cover.classList.add('missing');
    const title = document.createElement('h2');
    title.append(link(work.url, work.title));
    const facts = document.createElement('dl');
    const info = work.language || {};
    const rows = [[labels.voice, work.voice_actors.join(' / ') ||
      (work.voices_complete ? labels.unknown : labels.pending)],
      [labels.circle, link(work.circle.url, work.circle.name)], ['RJ', work.rj],
      [labels.version, versionText(info)],
      [labels.script, info.chinese_script === 'yes' ? labels.has : info.chinese_script === 'no' ? labels.without : labels.unspecified],
      [labels.subtitles, subtitleText(info)]];
    for (const [name, value] of rows) {
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = name;
      if (value instanceof Node) dd.append(value); else dd.textContent = value;
      if (name === 'RJ') dd.className = 'rj';
      facts.append(dt, dd);
    }
    const open = link(work.url, labels.open);
    open.className = 'work-link';
    article.append(cover, title, facts, open);
    return article;
  }
  function render() {
    const pages = Math.max(1, Math.ceil(matched.length / pageSize));
    page = Math.min(Math.max(page, 1), pages);
    $('results').replaceChildren(...matched.slice((page-1)*pageSize,page*pageSize).map(item => card(item.work)));
    $('count').textContent = `${matched.length} / ${works.length} ${labels.works}`;
    $('empty').hidden = matched.length > 0;
    $('prev').disabled = page === 1;
    $('next').disabled = page === pages;
    $('page').replaceChildren(...Array.from({length:pages}, (_, i) => new Option(`${i+1} / ${pages}`, String(i+1))));
    $('page').value = String(page);
  }
  function search() {
    const tokens = fold($('query').value).trim().split(/\s+/).filter(Boolean);
    const field = $('field').value;
    matched = indexed.filter(item => tokens.every(token => item.fields[field].includes(token)));
    page = 1;
    render();
  }
  $('search-form').addEventListener('submit', event => { event.preventDefault(); search(); });
  $('query').addEventListener('input', search);
  $('field').addEventListener('change', search);
  $('reset').addEventListener('click', () => {
    $('query').value = ''; $('field').value = 'all';
    search(); $('query').focus();
  });
  function turn(next) { page = next; render(); $('search-form').scrollIntoView({block:'start'}); }
  $('prev').addEventListener('click', () => turn(page-1));
  $('next').addEventListener('click', () => turn(page+1));
  $('page').addEventListener('change', () => turn(Number($('page').value)));
  const date = new Date(catalog.metadata.exported_at);
  $('snapshot').textContent = Number.isNaN(date.getTime()) ? '' : `${labels.snapshot} ${date.toLocaleString('zh-CN', {timeZone:'Asia/Shanghai',hour12:false})}`;
  $('partial').hidden = catalog.metadata.complete === true && catalog.metadata.language_complete === true;
  $('partial').textContent = labels.partial;
  render();
})();
