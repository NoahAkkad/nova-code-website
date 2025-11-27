"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/I18nProvider";

type Review = { text: string; user: string };

type Highlights = {
  heading: string;
  founded: string;
  foundedValue: string;
  location: string;
  locationValue: string;
  focus: string;
  focusValue: string;
  team: string;
  teamValue: string;
};

export function HomeContent() {
  const { t } = useTranslation();

  const servicePreview = (t("home.servicePreview.items") as string[]) ?? [];
  const reviews = (t("home.reviews.items") as Review[]) ?? [];
  const featureBullets = (t("home.featuredProduct.bullets") as string[]) ?? [];
  const highlights = (t("home.hero.highlights") as Highlights) ?? ({} as Highlights);

  return (
    <div className="bg-black text-white">
      <section
        className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#060606] via-[#0a0a0a] to-[#111111]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_45%)]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0,_transparent_45%)]" />
        </div>
        <div className="absolute -left-10 top-16 h-64 w-64 rounded-full bg-[rgba(212,175,55,0.08)] blur-3xl" />
        <Container
          className="relative flex flex-col gap-10 py-24 lg:flex-row lg:items-center lg:py-32 reveal"
          data-animate="fade"
        >
          <div className="space-y-6 lg:w-3/5">
            <h1 className="heading-accent text-4xl font-semibold leading-tight sm:text-5xl">
              {t("home.hero.title") as string}
            </h1>
            <p className="max-w-2xl text-lg text-secondary">{t("home.hero.subtitle") as string}</p>
            <p className="max-w-3xl text-secondary">{t("home.hero.description") as string}</p>
            <div className="flex gap-4">
              <Link href="/products" className="button-outline" title="Explore Nova Code AB products">
                {t("home.hero.ctaPrimary") as string}
              </Link>
              <Link
                href="/contact"
                className="link-underline-gold inline-flex items-center text-secondary underline-offset-4 hover:text-white"
                title="Book a call with Nova Code AB"
              >
                {t("home.hero.ctaSecondary") as string}
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="card-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                {highlights.heading}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-secondary">{highlights.founded}</p>
                  <p className="text-xl font-semibold">{highlights.foundedValue}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">{highlights.location}</p>
                  <p className="text-xl font-semibold">{highlights.locationValue}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">{highlights.focus}</p>
                  <p className="text-xl font-semibold">{highlights.focusValue}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">{highlights.team}</p>
                  <p className="text-xl font-semibold">{highlights.teamValue}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-8 reveal" data-animate="fade">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t("home.aboutPreview.eyebrow") as string}
            </p>
            <h2 className="heading-accent text-3xl font-semibold">{t("home.aboutPreview.title") as string}</h2>
            <p className="max-w-3xl text-secondary">{t("home.aboutPreview.paragraphOne") as string}</p>
            <p className="max-w-3xl text-secondary">{t("home.aboutPreview.paragraphTwo") as string}</p>
            <Link href="/about" className="button-outline w-fit" title="Read more about Nova Code AB">
              {t("home.aboutPreview.cta") as string}
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {servicePreview.map((service) => (
              <div key={service} className="card-surface reveal p-5" data-animate="fade">
                <p className="text-lg font-semibold">{service}</p>
                <p className="mt-2 text-sm text-secondary">{t("home.servicePreview.description") as string}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="button-outline w-fit" title="View all Nova Code AB services">
            {t("home.servicePreview.cta") as string}
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-8 lg:grid-cols-2 lg:items-center" data-animate="fade">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t("home.featuredProduct.eyebrow") as string}
            </p>
            <h2 className="heading-accent text-3xl font-semibold">
              {t("home.featuredProduct.title") as string}
            </h2>
            <p className="text-secondary">{t("home.featuredProduct.description") as string}</p>
            <ul className="space-y-3 text-secondary">
              {featureBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
              className="button-outline w-fit"
              target="_blank"
              rel="noreferrer"
              title="Download Nova Play Android game on Google Play"
            >
              {t("home.featuredProduct.cta") as string}
            </Link>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{t("home.promise.title") as string}</h3>
              <p className="mt-2 text-secondary">{t("home.promise.description") as string}</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="reviews" className="section-shell">
        <Container className="space-y-10 reveal" data-animate="fade">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t("home.reviews.eyebrow") as string}
            </p>
            <h2 className="heading-accent text-3xl font-semibold">{t("home.reviews.title") as string}</h2>
            <p className="text-secondary md:text-lg">{t("home.reviews.description") as string}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reviews.map((review) => (
              <div
                key={review.user}
                className="card-surface reveal flex h-full flex-col gap-4 p-5"
                data-animate="fade"
              >
                <div className="flex items-center gap-1 text-[var(--accent-gold)]" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg leading-relaxed">{review.text}</p>
                <p className="text-sm text-secondary">{review.user}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
              className="button-outline"
              target="_blank"
              rel="noreferrer"
              title="See Nova Play reviews on Google Play"
            >
              {t("home.reviews.cta") as string}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
