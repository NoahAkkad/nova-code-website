import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Nova Code AB | Software & App Development in Sweden",
  description:
    "Contact Nova Code AB for software development, mobile app development, SaaS projects, and custom software solutions from our Göteborg office.",
  keywords: [
    "nova code ab",
    "software development",
    "mobile apps",
    "SaaS",
    "web development",
    "Göteborg tech company",
    "app development Sweden",
    "Mobile app development Göteborg",
    "Custom software solutions",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se/contact",
  },
  openGraph: {
    title: "Contact Nova Code AB | Software & App Development in Sweden",
    description:
      "Get in touch with Nova Code AB for mobile app development, SaaS engineering, and custom software projects from Göteborg, Sweden.",
    url: "https://novacode.se/contact",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
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
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
