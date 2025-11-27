import { siteConfig } from "@/config/site";

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: ${siteConfig.domain}/sitemap.xml`;

export function GET() {
  return new Response(ROBOTS_TXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
