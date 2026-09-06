// Temporary workaround: the CDN doesn't resolve directory URLs (e.g. "/foo/")
// to their index.html object, so every generated URL needs the filename
// spelled out explicitly until that's fixed at the CDN level.
export function withIndexHtml(url: string): string {
    const parsed = new URL(url);
    if (parsed.pathname !== "/" && parsed.pathname.endsWith("/")) {
        parsed.pathname += "index.html";
    }
    return parsed.toString();
}
