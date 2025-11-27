"use client";

import Link from "next/link";

import { Container } from "@/components/Container";
import { Translation, TranslatedList } from "@/components/Translation";

export default function HomeContent() {
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
              <Translation i18nKey="home.hero.title" />
            </h1>
            <p className="max-w-2xl text-lg text-secondary">
              <Translation i18nKey="home.hero.subtitle" />
            </p>
            <p className="max-w-3xl text-secondary">
              <Translation i18nKey="home.hero.description" />
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="button-outline" title="Explore Nova Code AB products">
                <Translation i18nKey="home.hero.ctaPrimary" />
              </Link>
              <Link
                href="/contact"
                className="link-underline-gold inline-flex items-center text-secondary underline-offset-4 hover:text-white"
                title="Book a call with Nova Code AB"
              >
                <Translation i18nKey="home.hero.ctaSecondary" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <TranslatedList<string>
                i18nKey="home.hero.highlights"
                render={(highlight) => (
                  <div key={highlight} className="card-surface reveal p-4" data-animate="fade">
                    <p className="text-secondary">{highlight}</p>
                  </div>
                )}
              />
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-[rgba(212,175,55,0.1)] blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-[rgba(245,194,91,0.08)] blur-3xl" />
            <div className="relative space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/0 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl">
                  🚀
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/70">
                    <Translation i18nKey="home.hero.rightCard.kicker" />
                  </p>
                  <p className="text-lg font-semibold">
                    <Translation i18nKey="home.hero.rightCard.title" />
                  </p>
                </div>
              </div>
              <p className="text-secondary">
                <Translation i18nKey="home.hero.rightCard.description" />
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <TranslatedList<string>
                  i18nKey="home.hero.rightCard.bullets"
                  render={(bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-sm"
                    >
                      <span>{bullet}</span>
                      <span className="text-lg">↗</span>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-8 reveal" data-animate="fade">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              <Translation i18nKey="home.aboutPreview.kicker" />
            </p>
            <h2 className="heading-accent text-3xl font-semibold">
              <Translation i18nKey="home.aboutPreview.title" />
            </h2>
            <p className="max-w-3xl text-secondary">
              <Translation i18nKey="home.aboutPreview.paragraphOne" />
            </p>
            <p className="max-w-3xl text-secondary">
              <Translation i18nKey="home.aboutPreview.paragraphTwo" />
            </p>
            <Link href="/about" className="button-outline w-fit" title="Read more about Nova Code AB">
              <Translation i18nKey="home.aboutPreview.cta" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <TranslatedList<string>
              i18nKey="home.servicePreview.items"
              render={(service) => (
                <div key={service} className="card-surface reveal p-5" data-animate="fade">
                  <p className="text-lg font-semibold">{service}</p>
                  <p className="mt-2 text-sm text-secondary">
                    <Translation i18nKey="home.servicePreview.description" />
                  </p>
                </div>
              )}
            />
          </div>
          <Link href="/services" className="button-outline w-fit" title="View all Nova Code AB services">
            <Translation i18nKey="home.servicePreview.cta" />
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-8 lg:grid-cols-2 lg:items-center" data-animate="fade">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              <Translation i18nKey="home.featuredProduct.kicker" />
            </p>
            <h2 className="heading-accent text-3xl font-semibold">
              <Translation i18nKey="home.featuredProduct.title" />
            </h2>
            <p className="text-secondary">
              <Translation i18nKey="home.featuredProduct.description" />
            </p>
            <ul className="space-y-3 text-secondary">
              <TranslatedList<string>
                i18nKey="home.featuredProduct.bullets"
                render={(bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                    <span>{bullet}</span>
                  </li>
                )}
              />
            </ul>
            <Link
              href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
              className="button-outline w-fit"
              target="_blank"
              rel="noreferrer"
              title="Download Nova Play Android game on Google Play"
            >
              <Translation i18nKey="home.featuredProduct.cta" />
            </Link>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                <Translation i18nKey="home.featuredProduct.promiseTitle" />
              </h3>
              <p className="mt-2 text-secondary">
                <Translation i18nKey="home.featuredProduct.promiseCopy" />
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="reviews" className="section-shell">
        <Container className="space-y-10 reveal" data-animate="fade">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              <Translation i18nKey="home.reviews.kicker" />
            </p>
            <h2 className="heading-accent text-3xl font-semibold">
              <Translation i18nKey="home.reviews.title" />
            </h2>
            <p className="text-secondary md:text-lg">
              <Translation i18nKey="home.reviews.description" />
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <TranslatedList<{ text: string; user: string }>
              i18nKey="home.reviews.items"
              render={(review, index) => (
                <div
                  key={`${review.user}-${index}`}
                  className="card-surface reveal flex h-full flex-col gap-4 p-5"
                  data-animate="fade"
                >
                  <div className="flex items-center gap-1 text-[var(--accent-gold)]" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed">{review.text}</p>
                  <p className="text-sm text-secondary">{review.user}</p>
                </div>
              )}
            />
          </div>

          <div className="flex justify-center">
            <Link
              href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
              className="button-outline"
              target="_blank"
              rel="noreferrer"
              title="See Nova Play reviews on Google Play"
            >
              <Translation i18nKey="home.reviews.cta" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
