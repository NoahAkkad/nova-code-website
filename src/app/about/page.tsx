import type { Metadata } from "next";

import AboutContent from "@/components/pages/AboutContent";
import { keywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Nova Code AB | Göteborg Software Development Company",
  description:
    "Learn about Nova Code AB in Göteborg, Sweden—software development specialists building mobile apps, SaaS platforms, and custom software solutions.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: `${siteConfig.domain}/about`,
  },
  openGraph: {
    title: "About Nova Code AB | Göteborg Software Development Company",
    description:
      "Meet Nova Code AB, a Göteborg-based team delivering custom software solutions, SaaS development, and mobile app engineering across Sweden.",
    url: `${siteConfig.domain}/about`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Nova Code AB software development in Göteborg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nova Code AB | Göteborg Software Development Company",
    description:
      "Discover the Nova Code AB team building mobile apps, SaaS platforms, and custom software solutions from Göteborg, Sweden.",
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
