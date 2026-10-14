// Cloudflare Pages Functions middleware
// This file tells Pages to use the Worker from dist/server
//
// 同时为静态图片补上边缘缓存：Cloudflare 默认不缓存 Worker 生成的响应，
// 所以在此之前每个新访客（新设备 / 无痕窗口）都要回源重取图片与站点图标。
// 图片 URL 要么带内容指纹（/_next/static），要么是固定资源（/product/*.webp），
// 内容变更不频繁，因此可以安全地按年缓存；替换图片后请在 Cloudflare 后台
// 清理一次缓存（Purge Everything 或按 URL 清理），否则边缘会继续返回旧图。

/** 图片与图标都是内容稳定的资源，可以长期缓存 */
const STATIC_ASSET_CACHE_CONTROL = 'public, max-age=31536000, immutable';

/** 需要边缘缓存的请求：图片优化端点、产品截图、站点图标与分享卡 */
const CACHEABLE_PATTERNS = [
  /^\/_next\/image$/,
  /^\/_vinext\/image$/,
  /^\/product\/[^/]+\.(?:webp|png|jpe?g|avif)$/i,
  /^\/iieao-[^/]+\.(?:webp|png|jpe?g|svg)$/i,
  /^\/favicon\.svg$/i,
];

function isCacheable(request) {
  if (request.method !== 'GET') return false;
  const { pathname } = new URL(request.url);
  return CACHEABLE_PATTERNS.some((pattern) => pattern.test(pathname));
}

/**
 * 图片优化端点会用 Accept 协商输出格式（AVIF / WebP / JPEG），
 * 而 Cache API 的键只看 URL，因此把协商结果并入键，避免把 AVIF 回给只支持 JPEG 的客户端。
 * 该参数只参与缓存键，handler 解析时只读取 url/w/q，不受影响。
 */
function buildCacheKey(request) {
  const url = new URL(request.url);
  if (url.pathname === '/_next/image' || url.pathname === '/_vinext/image') {
    const accept = request.headers.get('Accept') ?? '';
    const format = accept.includes('image/avif')
      ? 'avif'
      : accept.includes('image/webp')
        ? 'webp'
        : 'legacy';
    url.searchParams.set('__cf_format', format);
  }
  return new Request(url.toString(), { method: 'GET' });
}

async function loadHandler() {
  const { default: handler } = await import('../dist/server/index.js');
  return handler;
}

export async function onRequest(context) {
  const { request, env, waitUntil } = context;

  if (!isCacheable(request)) {
    const handler = await loadHandler();
    return handler(request, env, context);
  }

  const cache = caches.default;
  const cacheKey = buildCacheKey(request);

  // 命中边缘缓存：新设备 / 无痕窗口也能直接拿到图片，不必回到源站
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const handler = await loadHandler();
  const response = await handler(request, env, context);
  if (!response.ok) return response;

  const headers = new Headers(response.headers);
  headers.set('Cache-Control', STATIC_ASSET_CACHE_CONTROL);
  headers.set('Cloudflare-CDN-Cache-Control', STATIC_ASSET_CACHE_CONTROL);

  const cacheable = new Response(response.body, { status: response.status, headers });
  waitUntil(cache.put(cacheKey, cacheable.clone()));
  return cacheable;
}
