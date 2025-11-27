import type { Metadata } from "next";

import ProductsContent from "@/components/pages/ProductsContent";
import { keywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Nova Play & Digital Products | Nova Code AB Göteborg",
  description:
    "Discover Nova Play, the flagship product from Nova Code AB in Göteborg. Explore our digital product lineup, SaaS solutions, and app experiences.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: `${siteConfig.domain}/products`,
  },
  openGraph: {
    title: "Nova Play & Digital Products | Nova Code AB Göteborg",
    description:
      "Explore Nova Play and other digital products by Nova Code AB: engaging gaming experiences and scalable software platforms crafted in Sweden.",
    url: `${siteConfig.domain}/products`,
    type: "website",
    images: [
      { url: siteConfig.ogImagePath, width: 1200, height: 630, alt: "Nova Code AB products and Nova Play" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Play & Digital Products | Nova Code AB Göteborg",
    description:
      "See Nova Play and other digital products built by Nova Code AB in Göteborg: gaming experiences, SaaS products, and innovative software.",
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
