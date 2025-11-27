"use client";

import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/I18nProvider";

type FeatureList = string[];

type TechnologyList = string[];

export function ProductsContent() {
  const { t } = useTranslation();
  const features = (t("products.features.items") as FeatureList) ?? [];
  const technologies = (t("products.technology.items") as TechnologyList) ?? [];

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t("products.eyebrow") as string}
          </p>
          <h1 className="heading-accent text-4xl font-semibold">{t("products.title") as string}</h1>
          <p className="max-w-3xl text-lg text-secondary">{t("products.intro") as string}</p>
          <p className="max-w-3xl text-secondary">{t("products.body") as string}</p>
          <Link
            href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
            className="button-outline w-fit"
            target="_blank"
            rel="noreferrer"
            title="Download Nova Play on Google Play"
          >
            {t("products.cta") as string}
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{t("products.features.title") as string}</h2>
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
            <h2 className="heading-accent text-2xl font-semibold">{t("products.technology.title") as string}</h2>
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
          <h2 className="heading-accent text-2xl font-semibold">{t("products.reviews.title") as string}</h2>
          <p className="text-secondary">{t("products.reviews.description") as string}</p>
          <div className="flex justify-center">
            <Link href="/#reviews" className="button-outline">
              {t("products.reviews.cta") as string}
            </Link>
          </div>
        </Container>
      </section>

      <Script id="ld-json-product" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Nova Play",
          brand: {
            "@type": "Organization",
            name: "Nova Code AB",
            url: "https://novacode.se",
            logo: "https://novacode.se/img/logo.svg",
            sameAs: [
              "https://novacode.se",
              "https://www.linkedin.com/company/nova-code-ab/",
            ],
          },
          description:
            "Nova Play is a mobile gaming and reward app for Android built by Nova Code AB in Sweden, delivering immersive gameplay and reliable cloud performance.",
          image: "https://novacode.se/img/hero.png",
          url: "https://novacode.se/products",
          category: "MobileApplication",
          operatingSystem: "Android",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "SEK",
            url: "https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en",
            availability: "https://schema.org/InStock",
          },
        })}
      </Script>
    </div>
  );
}
