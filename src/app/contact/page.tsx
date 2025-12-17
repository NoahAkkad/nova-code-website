import type { Metadata } from "next";

import { ContactContent } from "@/components/pages/ContactContent";
import { keywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Nova Code AB | Software & App Development in Sweden",
  description:
    "Contact Nova Code AB for software development, mobile app development, SaaS projects, and custom software solutions from our Göteborg office.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: `${siteConfig.domain}/contact`,
  },
  openGraph: {
    title: "Contact Nova Code AB | Software & App Development in Sweden",
    description:
      "Get in touch with Nova Code AB for mobile app development, SaaS engineering, and custom software projects from Göteborg, Sweden.",
    url: `${siteConfig.domain}/contact`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Contact Nova Code AB in Göteborg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nova Code AB | Software & App Development in Sweden",
    description:
      "Reach out to Nova Code AB for app development, SaaS solutions, and custom software from our Göteborg-based team.",
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

export default function ContactPage() {
  return (
    <ContactContent />
  );
}
