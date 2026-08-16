const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400"
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": status === 200 ? "public, max-age=3600" : "no-store"
    }
  });
}

function normalizeWorkno(value) {
  const clean = String(value || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  const match = clean.match(/(?:RJ|BJ)?\d+/);
  if (!match) return "";
  return /^(?:RJ|BJ)/.test(match[0]) ? match[0] : "RJ" + match[0];
}

function dlsiteProductSites(workno) {
  return workno.startsWith("BJ")
    ? ["girls", "comic", "books", "maniax"]
    : ["maniax"];
}

function hasProductData(text) {
  try {
    const data = JSON.parse(text);
    return Array.isArray(data)
      ? data.length > 0
      : Boolean(data && typeof data === "object" && Object.keys(data).length);
  } catch (error) {
    return false;
  }
}

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    if (request.method !== "GET") {
      return jsonResponse({ error: "method_not_allowed" }, 405);
    }

    const url = new URL(request.url);
    const endpoint = url.searchParams.get("endpoint") || "product";
    const useTranslatable = endpoint === "translatable";
    const useDlwatcher = endpoint === "dlwatcher";
    const workno = normalizeWorkno(url.searchParams.get("workno") || url.searchParams.get("keyword") || url.searchParams.get("rj"));
    if (!workno) {
      return jsonResponse({ error: "missing_workno" }, 400);
    }

    const upstreamTargets = useDlwatcher
      ? [{
          url: "https://dlwatcher.com/product/" + encodeURIComponent(workno) + ".json",
          referer: "https://dlwatcher.com/"
        }]
      : useTranslatable
        ? [{
            url: "https://www.dlsite.com/maniax/api/=/translatableProducts.json?keyword=" + encodeURIComponent(workno),
            referer: "https://www.dlsite.com/maniax/"
          }]
        : dlsiteProductSites(workno).map((site) => ({
            url: "https://www.dlsite.com/" + site + "/api/=/product.json?workno=" + encodeURIComponent(workno),
            referer: "https://www.dlsite.com/" + site + "/"
          }));
    let lastStatus = 502;
    for (const target of upstreamTargets) {
      try {
        const upstream = await fetch(target.url, {
          headers: {
            "Accept": "application/json,text/plain,*/*",
            "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
            "Referer": target.referer
          }
        });
        if (!upstream.ok) {
          lastStatus = upstream.status;
          continue;
        }
        const text = await upstream.text();
        if (!useDlwatcher && !useTranslatable && !hasProductData(text)) {
          lastStatus = 404;
          continue;
        }
        return new Response(text, {
          status: 200,
          headers: {
            ...CORS_HEADERS,
            "Content-Type": upstream.headers.get("Content-Type") || "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600"
          }
        });
      } catch (error) {
        lastStatus = 502;
      }
    }
    return jsonResponse({ error: useDlwatcher ? "dlwatcher_error" : "dlsite_error", status: lastStatus }, lastStatus);
  }
};
