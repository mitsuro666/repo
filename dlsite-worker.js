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
  const match = clean.match(/(?:RJ)?\d+/);
  if (!match) return "";
  return match[0].startsWith("RJ") ? match[0] : "RJ" + match[0];
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

    const upstreamUrl = useDlwatcher
      ? "https://dlwatcher.com/product/" + encodeURIComponent(workno) + ".json"
      : useTranslatable
        ? "https://www.dlsite.com/maniax/api/=/translatableProducts.json?keyword=" + encodeURIComponent(workno)
        : "https://www.dlsite.com/maniax/api/=/product.json?workno=" + encodeURIComponent(workno);
    const upstream = await fetch(upstreamUrl, {
      headers: {
        "Accept": "application/json,text/plain,*/*",
        "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
        "Referer": useDlwatcher ? "https://dlwatcher.com/" : "https://www.dlsite.com/maniax/"
      }
    });

    if (!upstream.ok) {
      return jsonResponse({ error: useDlwatcher ? "dlwatcher_error" : "dlsite_error", status: upstream.status }, upstream.status);
    }

    const text = await upstream.text();
    return new Response(text, {
      status: 200,
      headers: {
        ...CORS_HEADERS,
        "Content-Type": upstream.headers.get("Content-Type") || "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=3600"
      }
    });
  }
};
