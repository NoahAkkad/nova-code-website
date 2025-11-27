"use client";

import Link from "next/link";

import { Container } from "@/components/Container";
import { Translation, TranslatedList } from "@/components/Translation";

export default function ServicesContent() {
  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-6 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Translation i18nKey="services.kicker" />
          </p>
          <h1 className="heading-accent text-4xl font-semibold">
            <Translation i18nKey="services.title" />
          </h1>
          <p className="max-w-3xl text-lg text-secondary">
            <Translation i18nKey="services.intro" />
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-10 reveal" data-animate="fade">
          <div className="grid gap-6 lg:grid-cols-3">
            <TranslatedList<{ title: string; description: string }>
              i18nKey="services.items"
              render={(service) => (
                <div key={service.title} className="card-surface reveal space-y-3 p-5" data-animate="fade">
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                  <p className="text-secondary">{service.description}</p>
                </div>
              )}
            />
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-semibold">
              <Translation i18nKey="services.ctaTitle" />
            </h3>
            <p className="text-secondary">
              <Translation i18nKey="services.ctaBody" />
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact" className="button-outline" title="Contact Nova Code AB">
                <Translation i18nKey="services.ctaPrimary" />
              </Link>
              <Link
                href="/products"
                className="link-underline-gold inline-flex items-center text-secondary underline-offset-4 hover:text-white"
                title="Explore Nova Code AB products"
              >
                <Translation i18nKey="services.ctaSecondary" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
