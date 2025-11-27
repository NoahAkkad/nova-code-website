import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Translation } from "@/components/Translation";
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
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Translation i18nKey="contact.kicker" />
          </p>
          <h1 className="heading-accent text-4xl font-semibold">
            <Translation i18nKey="contact.title" />
          </h1>
          <p className="max-w-3xl text-lg text-secondary">
            <Translation i18nKey="contact.description" />
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">
              <Translation i18nKey="contact.detailsTitle" />
            </h2>
            <address className="space-y-3 text-secondary not-italic">
              <p className="text-white">
                <Translation i18nKey="contact.companyLabel" /> {siteConfig.name}
              </p>
              <p>
                <Translation i18nKey="contact.locationLabel" /> {siteConfig.address.city}, {siteConfig.address.region},
                {" "}
                {siteConfig.address.country}
              </p>
              <p>
                <Translation i18nKey="contact.phoneLabel" /> {" "}
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="link-underline-gold" title="Call Nova Code AB">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <Translation i18nKey="contact.emailLabel" /> {" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="link-underline-gold" title="Email Nova Code AB">
                  {siteConfig.contactEmail}
                </a>
              </p>
            </address>
            <p className="text-secondary">
              <Translation i18nKey="contact.support" />
            </p>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <ContactForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
