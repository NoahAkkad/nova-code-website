"use client";

import Script from "next/script";

import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/config/site";

export function AboutContent() {
  const { t } = useLanguage();
  const values = t("about.values") as string[];

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-6 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{t("about.badge")}</p>
          <h1 className="heading-accent text-4xl font-semibold">{t("about.heading")}</h1>
          <p className="max-w-3xl text-lg text-secondary">{t("about.intro")}</p>
          <p className="text-white">{t("about.location")}</p>
          <p className="max-w-3xl text-secondary">{t("about.detail")}</p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{t("about.missionHeading")}</h2>
            <p className="text-secondary">{t("about.missionCopy")}</p>
          </div>
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{t("about.visionHeading")}</h2>
            <p className="text-secondary">{t("about.visionCopy")}</p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-6 reveal" data-animate="fade">
          <h3 className="heading-accent text-2xl font-semibold">{t("about.valuesHeading")}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value} className="card-surface reveal p-4 text-center" data-animate="fade">
                <p className="text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Script id="ld-json-organization-about" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.domain,
          logo: `${siteConfig.domain}${siteConfig.logoPath}`,
          sameAs: [siteConfig.social.linkedin],
        })}
      </Script>
    </div>
  );
}
