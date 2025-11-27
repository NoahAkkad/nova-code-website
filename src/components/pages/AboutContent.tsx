"use client";

import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/I18nProvider";

export function AboutContent() {
  const { t } = useTranslation();
  const values = (t("about.values.items") as string[]) ?? [];

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-6 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t("about.eyebrow") as string}
          </p>
          <h1 className="heading-accent text-4xl font-semibold">{t("about.title") as string}</h1>
          <p className="max-w-3xl text-lg text-secondary">{t("about.intro") as string}</p>
          <p className="text-white">{t("about.location") as string}</p>
          <p className="max-w-3xl text-secondary">{t("about.body") as string}</p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{t("about.mission.title") as string}</h2>
            <p className="text-secondary">{t("about.mission.description") as string}</p>
          </div>
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{t("about.vision.title") as string}</h2>
            <p className="text-secondary">{t("about.vision.description") as string}</p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-6 reveal" data-animate="fade">
          <h3 className="heading-accent text-2xl font-semibold">{t("about.values.title") as string}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value} className="card-surface reveal p-4 text-center" data-animate="fade">
                <p className="text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
