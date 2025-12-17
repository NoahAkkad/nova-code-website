"use client";

import Link from "next/link";

import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";

export function ServicesContent() {
  const { t } = useLanguage();
  const services = t("services.list") as { title: string; description: string }[];

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{t("services.badge")}</p>
          <h1 className="heading-accent text-4xl font-semibold">{t("services.heading")}</h1>
          <p className="max-w-3xl text-lg text-secondary">{t("services.intro")}</p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-4 md:grid-cols-2" data-animate="fade">
          {services.map((service) => (
            <div key={service.title} className="card-surface reveal p-5" data-animate="fade">
              <p className="text-lg font-semibold">{service.title}</p>
              <p className="mt-2 text-secondary">{service.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="section-shell border-t border-white/10">
        <Container className="reveal space-y-4" data-animate="fade">
          <h2 className="heading-accent text-2xl font-semibold">{t("services.planHeading")}</h2>
          <p className="max-w-3xl text-secondary">{t("services.planCopy")}</p>
          <Link href="/contact" className="button-outline w-fit" title="Contact Nova Code AB">
            {t("services.planCta")}
          </Link>
        </Container>
      </section>
    </div>
  );
}
