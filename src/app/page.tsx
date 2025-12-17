import type { Metadata } from "next";
import Script from "next/script";

import { HomeContent } from "@/components/pages/HomeContent";
import { keywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Nova Code AB | Software Development, Mobile Apps & SaaS in Sweden",
  description:
    "Discover Nova Code AB in Göteborg: software development experts crafting mobile apps, SaaS platforms, and custom digital solutions that help teams scale.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title: "Nova Code AB | Software Development, Mobile Apps & SaaS",
    description:
      "Swedish product studio delivering custom software solutions, mobile app development, and SaaS engineering from Göteborg.",
    url: siteConfig.domain,
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Nova Code AB software development and mobile apps hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Code AB | Software Development, Mobile Apps & SaaS",
    description:
      "Nova Code AB crafts mobile apps, SaaS platforms, and custom software solutions for businesses across Sweden.",
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HomeContent />
      <Script id="ld-json-organization-home" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.domain,
          logo: `${siteConfig.domain}${siteConfig.logoPath}`,
          sameAs: [siteConfig.social.linkedin],
        })}
      </Script>

      <Script id="ld-json-website-home" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.domain,
          sameAs: [siteConfig.social.linkedin],
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.domain}/?s={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>
    </div>
  );
}
