import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services | Nova Code AB Software & Mobile App Development",
  description:
    "Explore Nova Code AB services: software development, mobile app development in Göteborg, SaaS development in Sweden, cloud engineering, and UI/UX design.",
  keywords: [
    "nova code ab",
    "software development",
    "mobile apps",
    "SaaS",
    "web development",
    "Göteborg tech company",
    "app development Sweden",
    "SaaS development Sweden",
    "Custom software solutions",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se/services",
  },
  openGraph: {
    title: "Services | Nova Code AB Software & Mobile App Development",
    description:
      "Nova Code AB delivers mobile app development in Göteborg, SaaS development across Sweden, and custom software solutions tailored to your roadmap.",
    url: "https://novacode.se/services",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
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
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
