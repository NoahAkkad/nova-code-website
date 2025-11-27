"use client";

import { Container } from "@/components/Container";
import { Translation, TranslatedList } from "@/components/Translation";

export default function AboutContent() {
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
