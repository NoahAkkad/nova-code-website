import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Translation, TranslatedList } from "@/components/Translation";
import { keywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Nova Code AB | Göteborg Software Development Company",
  description:
    "Learn about Nova Code AB in Göteborg, Sweden—software development specialists building mobile apps, SaaS platforms, and custom software solutions.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: `${siteConfig.domain}/about`,
  },
  openGraph: {
    title: "About Nova Code AB | Göteborg Software Development Company",
    description:
      "Meet Nova Code AB, a Göteborg-based team delivering custom software solutions, SaaS development, and mobile app engineering across Sweden.",
    url: `${siteConfig.domain}/about`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Nova Code AB software development in Göteborg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nova Code AB | Göteborg Software Development Company",
    description:
      "Discover the Nova Code AB team building mobile apps, SaaS platforms, and custom software solutions from Göteborg, Sweden.",
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-6 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Translation i18nKey="about.kicker" />
          </p>
          <h1 className="heading-accent text-4xl font-semibold">
            <Translation i18nKey="about.title" />
          </h1>
          <p className="max-w-3xl text-lg text-secondary">
            <Translation i18nKey="about.intro" />
          </p>
          <p className="text-white">
            <Translation i18nKey="about.location" />
          </p>
          <p className="max-w-3xl text-secondary">
            <Translation i18nKey="about.body" />
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">
              <Translation i18nKey="about.missionTitle" />
            </h2>
            <p className="text-secondary">
              <Translation i18nKey="about.missionBody" />
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">
              <Translation i18nKey="about.visionTitle" />
            </h2>
            <p className="text-secondary">
              <Translation i18nKey="about.visionBody" />
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-6 reveal" data-animate="fade">
          <h3 className="heading-accent text-2xl font-semibold">
            <Translation i18nKey="about.valuesTitle" />
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TranslatedList<string>
              i18nKey="about.values"
              render={(value) => (
                <div key={value} className="card-surface reveal p-4 text-center" data-animate="fade">
                  <p className="text-lg font-semibold">{value}</p>
                </div>
              )}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
