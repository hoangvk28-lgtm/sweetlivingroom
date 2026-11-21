// Cloudflare Pages Function. public/_routes.json limits it to the spam paths a
// previous owner or hijacker got indexed (/info, /local, /ptjs/*.html ...), so it
// never runs for real pages. 410 tells search engines the URLs are gone for good,
// which drops them from the index faster than a 404.
export function onRequest() {
  return new Response("410 Gone", {
    status: 410,
    headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
  });
}
