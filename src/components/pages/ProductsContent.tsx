"use client";

import Link from "next/link";

import { Container } from "@/components/Container";
import { Translation, TranslatedList } from "@/components/Translation";

export default function ProductsContent() {
  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-6 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Translation i18nKey="products.kicker" />
          </p>
          <h1 className="heading-accent text-4xl font-semibold">
            <Translation i18nKey="products.title" />
          </h1>
          <p className="max-w-3xl text-lg text-secondary">
            <Translation i18nKey="products.intro" />
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
              className="button-outline"
              target="_blank"
              rel="noreferrer"
              title="Download Nova Play on Google Play"
            >
              <Translation i18nKey="products.ctaPrimary" />
            </Link>
            <Link href="/contact" className="link-underline-gold text-secondary hover:text-white" title="Contact Nova Code AB">
              <Translation i18nKey="products.ctaSecondary" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-12 reveal" data-animate="fade">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                <Translation i18nKey="products.novaPlay.kicker" />
              </p>
              <h2 className="heading-accent text-3xl font-semibold">
                <Translation i18nKey="products.novaPlay.title" />
              </h2>
              <p className="text-secondary">
                <Translation i18nKey="products.novaPlay.description" />
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <TranslatedList<string>
                  i18nKey="products.novaPlay.features"
                  render={(feature) => (
                    <div key={feature} className="card-surface reveal p-4" data-animate="fade">
                      <p className="font-semibold">{feature}</p>
                    </div>
                  )}
                />
              </div>
              <Link
                href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
                className="button-outline w-fit"
                target="_blank"
                rel="noreferrer"
                title="See Nova Play on Google Play"
              >
                <Translation i18nKey="products.novaPlay.cta" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[rgba(212,175,55,0.08)] blur-3xl" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[rgba(245,194,91,0.08)] blur-3xl" />
              <div className="relative space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                  <span>Nova Code AB</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--accent-gold)]" />
                  <span>Nova Play</span>
                </div>
                <h3 className="text-2xl font-semibold">
                  <Translation i18nKey="products.novaPlay.snapshotTitle" />
                </h3>
                <p className="text-secondary">
                  <Translation i18nKey="products.novaPlay.snapshotCopy" />
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <TranslatedList<string>
                    i18nKey="products.novaPlay.snapshotHighlights"
                    render={(highlight) => (
                      <div key={highlight} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-secondary">
                        {highlight}
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-4 text-center">
              <h3 className="text-2xl font-semibold">
                <Translation i18nKey="products.otherProductsTitle" />
              </h3>
              <p className="text-secondary">
                <Translation i18nKey="products.otherProductsDescription" />
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <TranslatedList<string>
                i18nKey="products.otherProducts"
                render={(product) => (
                  <div key={product} className="card-surface reveal p-4 text-center" data-animate="fade">
                    <p className="font-semibold">{product}</p>
                  </div>
                )}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
