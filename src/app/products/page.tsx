import type { Metadata } from "next";
import Script from "next/script";

import { ProductsContent } from "@/components/pages/ProductsContent";
import { keywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Nova Play | Products | Nova Code AB Mobile Gaming App",
  description:
    "Discover Nova Play by Nova Code AB—an Android mobile gaming and reward app built in Sweden with cloud-native performance and engaging gameplay.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: `${siteConfig.domain}/products`,
  },
  openGraph: {
    title: "Nova Play | Nova Code AB Mobile Gaming App",
    description:
      "Play Nova Play—our flagship Android reward app built by Nova Code AB for immersive mobile gaming audiences in Sweden and worldwide.",
    url: `${siteConfig.domain}/products`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Nova Play mobile gaming app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Play | Nova Code AB Mobile Gaming App",
    description:
      "Nova Play is the mobile gaming and reward app from Nova Code AB, available now on Google Play for Android players.",
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-black text-white">
      <ProductsContent />
      <Script id="ld-json-softwareapplication" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Nova Play",
          applicationCategory: "GameApplication",
          operatingSystem: "Android",
          description:
            "Nova Play is a mobile gaming and reward app for Android built by Nova Code AB in Sweden, delivering immersive gameplay and reliable cloud performance.",
          image: `${siteConfig.domain}${siteConfig.ogImagePath}`,
          url: `${siteConfig.domain}/products`,
          downloadUrl:
            "https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en",
          creator: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.domain,
            logo: `${siteConfig.domain}${siteConfig.logoPath}`,
            sameAs: [siteConfig.social.linkedin],
          },
        })}
      </Script>
    </div>
  );
}
