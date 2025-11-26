const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://novacode.se/sitemap.xml`;

export function GET() {
  return new Response(ROBOTS_TXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
