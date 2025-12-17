import type { Metadata } from "next";
import Script from "next/script";

import { ServicesContent } from "@/components/pages/ServicesContent";
import { keywords, siteConfig } from "@/config/site";
import { translations } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services | Nova Code AB Software & Mobile App Development",
  description:
    "Explore Nova Code AB services: software development, mobile app development in Göteborg, SaaS development in Sweden, cloud engineering, and UI/UX design.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: `${siteConfig.domain}/services`,
  },
  openGraph: {
    title: "Services | Nova Code AB Software & Mobile App Development",
    description:
      "Nova Code AB delivers mobile app development in Göteborg, SaaS development across Sweden, and custom software solutions tailored to your roadmap.",
    url: `${siteConfig.domain}/services`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Nova Code AB services overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Nova Code AB Software & Mobile App Development",
    description:
      "See how Nova Code AB builds SaaS platforms, mobile apps, and cloud-native software products for teams in Sweden and beyond.",
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">
      <ServicesContent />
      <Script id="ld-json-services" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${siteConfig.name} Software Development Services`,
          serviceType: (translations.en.services.list as { title: string }[]).map((service) => service.title),
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.domain,
            logo: `${siteConfig.domain}${siteConfig.logoPath}`,
            sameAs: [siteConfig.social.linkedin],
          },
          areaServed: "SE",
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${siteConfig.domain}/services`,
          },
        })}
      </Script>
    </div>
  );
}
