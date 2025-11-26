const BASE_URL = "https://novacode.se";

const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "weekly", priority: "0.8" },
  { path: "/services", changefreq: "weekly", priority: "0.8" },
  { path: "/products", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "weekly", priority: "0.8" },
] as const;

function buildSitemap(): string {
  const urls = routes
    .map(
      ({ path, changefreq, priority }) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
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
      "Content-Type": "application/xml",
    },
  });
}
