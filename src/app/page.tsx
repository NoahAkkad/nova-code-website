import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Nova Code AB | Software Development, Mobile Apps & SaaS in Sweden",
  description:
    "Discover Nova Code AB in Göteborg: software development experts crafting mobile apps, SaaS platforms, and custom digital solutions that help teams scale.",
  keywords: [
    "nova code ab",
    "software development",
    "mobile apps",
    "SaaS",
    "web development",
    "Göteborg tech company",
    "app development Sweden",
    "Software development Sweden",
    "Mobile app development Göteborg",
    "Custom software solutions",
    "Nova Play app",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se",
  },
  openGraph: {
    title: "Nova Code AB | Software Development, Mobile Apps & SaaS",
    description:
      "Swedish product studio delivering custom software solutions, mobile app development, and SaaS engineering from Göteborg.",
    url: "https://novacode.se",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
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
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

export default function Home() {
  return <HomeContent />;
}
