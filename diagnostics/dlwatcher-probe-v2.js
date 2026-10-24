// Temporary Cloudflare Worker probe. Run in the dashboard preview only.
// Compatibility date: 2024-11-11 or later (cache: "no-store" support).
const TIMEOUT_MS = 6000;
const BODY_LIMIT = 65536;
const RESPONSE_HEADERS = [
  "content-type", "content-length", "cache-control", "age", "date",
  "server", "via", "x-cache", "x-amz-cf-pop", "x-amz-cf-id",
  "cf-cache-status", "cf-ray", "etag", "last-modified", "vary", "location"
];
const ORIGINAL_HEADERS = {
  "Accept": "application/json,text/plain,*/*",
  "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
  "Referer": "https://dlwatcher.com/"
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

async function readLimitedBody(response) {
  if (!response.body) return { text: "", truncated: false };
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  let bytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return { text: text + decoder.decode(), truncated: false };
      const remaining = BODY_LIMIT - bytes;
      text += decoder.decode(value.subarray(0, remaining), { stream: true });
      bytes += value.byteLength;
      if (bytes > BODY_LIMIT) {
        await reader.cancel();
        return { text: text + decoder.decode(), truncated: true };
      }
    }
  } finally {
    reader.releaseLock();
  }
}

async function probe(variant) {
  const started = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const result = {
    name: variant.name,
    url: variant.url,
    requestHeaders: variant.init.headers || {},
    requestCache: variant.init.cache || "default"
  };
  try {
    const response = await fetch(variant.url, {
      ...variant.init,
      signal: controller.signal
    });
    result.status = response.status;
    result.finalUrl = response.url;
    result.redirected = response.redirected;
    result.responseHeaders = {};
    for (const name of RESPONSE_HEADERS) {
      const value = response.headers.get(name);
      if (value !== null) result.responseHeaders[name] = value;
    }
    const body = await readLimitedBody(response);
    result.bodyTruncated = body.truncated;
    if (!body.truncated) {
      try {
        const data = JSON.parse(body.text);
        result.jsonParsed = true;
        result.productId = data?.productId ?? null;
        result.lowestPrice = data?.lowestPrice ?? null;
        result.latestDiscountPrice = data?.latestDiscountPrice ?? null;
      } catch (error) {
        result.jsonParsed = false;
        result.jsonError = String(error.message || error);
      }
    }
    if (!response.ok || !result.jsonParsed) {
      result.bodyPreview = body.text.slice(0, 2000);
    }
  } catch (error) {
    result.error = controller.signal.aborted
      ? "Timed out after " + TIMEOUT_MS + " ms (including response body)"
      : String(error.message || error);
  } finally {
    clearTimeout(timeout);
    result.elapsedMs = Date.now() - started;
  }
  return result;
}

export default {
  async fetch(request) {
    if (request.method !== "GET") {
      return jsonResponse({ error: "method_not_allowed" }, 405);
    }
    const input = new URL(request.url);
    const workno = (input.searchParams.get("workno") || "RJ01065324")
      .trim().toUpperCase();
    if (!/^(?:RJ|BJ)\d+$/.test(workno)) {
      return jsonResponse({ error: "invalid_workno" }, 400);
    }
    const startedAt = new Date().toISOString();
    const source = "https://dlwatcher.com/product/" + workno + ".json";
    const variants = [
      { name: "original", url: source, init: { headers: ORIGINAL_HEADERS } },
      {
        name: "browser_user_agent", url: source,
        init: {
          headers: {
            ...ORIGINAL_HEADERS,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
          }
        }
      },
      {
        name: "identity_encoding", url: source,
        init: { headers: { ...ORIGINAL_HEADERS, "Accept-Encoding": "identity" } }
      },
      {
        name: "encoded_first_letter",
        url: "https://dlwatcher.com/product/%" + workno.charCodeAt(0).toString(16).toUpperCase() + workno.slice(1) + ".json",
        init: { headers: ORIGINAL_HEADERS }
      }
    ];
    // Sequential to observe the original response before any cache intervention.
    const results = [];
    for (const variant of variants) results.push(await probe(variant));
    return jsonResponse({
      probeVersion: "2026-10-11-v2",
      workno,
      startedAt,
      workerColo: request.cf?.colo ?? null,
      notes: [
        "This report records upstream responses, not a successful site import.",
        "Encoded unreserved characters may be normalized before the cache lookup.",
        "Encoding and User-Agent variants each change only one explicit request property.",
        "Each variant can take up to 6 seconds; the report is never cached."
      ],
      results
    });
  }
};
