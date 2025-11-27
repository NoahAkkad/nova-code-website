import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Translation, TranslatedList } from "@/components/Translation";
import { keywords, siteConfig } from "@/config/site";

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
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Translation i18nKey="services.kicker" />
          </p>
          <h1 className="heading-accent text-4xl font-semibold">
            <Translation i18nKey="services.title" />
          </h1>
          <p className="max-w-3xl text-lg text-secondary">
            <Translation i18nKey="services.description" />
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-4 md:grid-cols-2" data-animate="fade">
          <TranslatedList<{ title: string; description: string }>
            i18nKey="services.list"
            render={(service) => (
              <div key={service.title} className="card-surface reveal p-5" data-animate="fade">
                <p className="text-lg font-semibold">{service.title}</p>
                <p className="mt-2 text-secondary">{service.description}</p>
              </div>
            )}
          />
        </Container>
      </section>

      <section className="section-shell border-t border-white/10">
        <Container className="reveal space-y-4" data-animate="fade">
          <h2 className="heading-accent text-2xl font-semibold">
            <Translation i18nKey="services.ctaTitle" />
          </h2>
          <p className="max-w-3xl text-secondary">
            <Translation i18nKey="services.ctaDescription" />
          </p>
          <Link href="/contact" className="button-outline w-fit" title="Contact Nova Code AB">
            <Translation i18nKey="services.ctaButton" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
