(() => {
  'use strict';
  // Adapt the existing activity export for the intersection layout. Do not modify or replace data/works.js.
  const catalog = window.DLSITE_CATALOG;
  if (!catalog || !Array.isArray(catalog.works)) return;
  const sourceURL = catalog.metadata?.source_url ||
    'https://www.dlsite.com/girls/campaign/bulkbuy/=/key/matome20261023voice/?site_group%5B0%5D=girls&ai%5B0%5D=AIG';
  const works = catalog.works.map(work => {
    const path = work.bk?.path || '';
    return {
      ...work,
      bk: {
        ...work.bk,
        // Intersection's view requires sibling-dir image URLs; both paths resolve to this activity's unchanged images.
        path: /^images\/RJ\d+\.webp$/.test(path)
          ? '../matome20261023voice/' + path
          : path
      }
    };
  });
  window.DLSITE_INTERSECTION = {
    metadata: {...catalog.metadata, count: works.length, sources: [{source_url: sourceURL}]},
    works
  };
})();
