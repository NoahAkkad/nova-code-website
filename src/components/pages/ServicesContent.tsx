"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/I18nProvider";

type Service = {
  title: string;
  description: string;
};

export function ServicesContent() {
  const { t } = useTranslation();
  const services = (t("services.items") as Service[]) ?? [];

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t("services.eyebrow") as string}
          </p>
          <h1 className="heading-accent text-4xl font-semibold">{t("services.title") as string}</h1>
          <p className="max-w-3xl text-lg text-secondary">{t("services.intro") as string}</p>
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
          <h2 className="heading-accent text-2xl font-semibold">{t("services.cta.title") as string}</h2>
          <p className="max-w-3xl text-secondary">{t("services.cta.description") as string}</p>
          <Link href="/contact" className="button-outline w-fit" title="Contact Nova Code AB">
            {t("services.cta.button") as string}
          </Link>
        </Container>
      </section>
    </div>
  );
}
