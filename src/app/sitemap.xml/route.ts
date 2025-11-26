const BASE_URL = "https://novacode.se";

const routes = ["/", "/about", "/services", "/products", "/contact"] as const;

function buildSitemap(): string {
  const urls = routes
    .map(
      (path) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function GET() {
  const body = buildSitemap();

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
