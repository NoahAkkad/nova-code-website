import type { Metadata } from "next";

import ServicesContent from "@/components/pages/ServicesContent";
import { keywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Software Development Services in Göteborg | Nova Code AB",
  description:
    "Custom software development, mobile apps, SaaS platforms, and UX/UI design from Nova Code AB in Göteborg, Sweden. We build scalable digital products.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: `${siteConfig.domain}/services`,
  },
  openGraph: {
    title: "Software Development Services in Göteborg | Nova Code AB",
    description:
      "Explore Nova Code AB software development services: mobile app development, SaaS engineering, backend APIs, and UX/UI design in Sweden.",
    url: `${siteConfig.domain}/services`,
    type: "website",
    images: [
      { url: siteConfig.ogImagePath, width: 1200, height: 630, alt: "Nova Code AB services in Göteborg" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services in Göteborg | Nova Code AB",
    description:
      "Nova Code AB offers mobile app development, SaaS platforms, backend APIs, and UX/UI design services from Göteborg, Sweden.",
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
