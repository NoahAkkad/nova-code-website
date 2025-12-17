"use client";

import Link from "next/link";

import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";

export function ProductsContent() {
  const { t } = useLanguage();
  const features = t("products.features") as string[];
  const technologies = t("products.technology") as string[];

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{t("products.badge")}</p>
          <h1 className="heading-accent text-4xl font-semibold">{t("products.heading")}</h1>
          <p className="max-w-3xl text-lg text-secondary">{t("products.intro")}</p>
          <p className="max-w-3xl text-secondary">{t("products.detail")}</p>
          <Link
            href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
            className="button-outline w-fit"
            target="_blank"
            rel="noreferrer"
            title="Download Nova Play on Google Play"
          >
            {t("products.download")}
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{t("products.featuresHeading")}</h2>
            <ul className="space-y-3 text-secondary">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{t("products.technologyHeading")}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {technologies.map((item) => (
                <div key={item} className="card-surface reveal p-4" data-animate="fade">
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell border-y border-white/10">
        <Container className="reveal flex flex-col gap-4 text-center" data-animate="fade">
          <h2 className="heading-accent text-2xl font-semibold">{t("products.hearHeading")}</h2>
          <p className="text-secondary">{t("products.hearCopy")}</p>
          <div className="flex justify-center">
            <Link href="/#reviews" className="button-outline">
              {t("products.hearCta")}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
