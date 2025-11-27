import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/metadata";
import { getDictionary, localizedPath, type Locale } from "@/locales";

type PageProps = { params: { locale: Locale } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale;
  const dictionary = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/",
    title: dictionary.metadata.home.title,
    description: dictionary.metadata.home.description,
  });
}

export default async function Home({ params }: PageProps) {
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const { home, common } = dictionary;

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
              {home.hero.title}
            </h1>
            <p className="max-w-2xl text-lg text-secondary">{home.hero.subtitle}</p>
            <p className="max-w-3xl text-secondary">{home.hero.description}</p>
            <div className="flex gap-4">
              <Link
                href={localizedPath(locale, "/products")}
                className="button-outline"
                title={common.buttons.explore}
              >
                {common.buttons.explore}
              </Link>
              <Link
                href={localizedPath(locale, "/contact")}
                className="link-underline-gold inline-flex items-center text-secondary underline-offset-4 hover:text-white"
                title={common.buttons.bookCall}
              >
                {common.buttons.bookCall}
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="card-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                {common.labels.highlights}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-secondary">{common.labels.founded}</p>
                  <p className="text-xl font-semibold">{home.hero.highlights.founded}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">{common.labels.location}</p>
                  <p className="text-xl font-semibold">{home.hero.highlights.location}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">{common.labels.focus}</p>
                  <p className="text-xl font-semibold">{home.hero.highlights.focus}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">{common.labels.team}</p>
                  <p className="text-xl font-semibold">{home.hero.highlights.team}</p>
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
              {common.labels.aboutPreview}
            </p>
            <h2 className="heading-accent text-3xl font-semibold">{home.aboutPreview.title}</h2>
            <p className="max-w-3xl text-secondary">{home.aboutPreview.description1}</p>
            <p className="max-w-3xl text-secondary">{home.aboutPreview.description2}</p>
            <Link
              href={localizedPath(locale, "/about")}
              className="button-outline w-fit"
              title={home.aboutPreview.button}
            >
              {home.aboutPreview.button}
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {home.aboutPreview.services.map((service) => (
              <div key={service} className="card-surface reveal p-5" data-animate="fade">
                <p className="text-lg font-semibold">{service}</p>
                <p className="mt-2 text-sm text-secondary">{home.aboutPreview.serviceDescription}</p>
              </div>
            ))}
          </div>
          <Link
            href={localizedPath(locale, "/services")}
            className="button-outline w-fit"
            title={common.buttons.viewServices}
          >
            {common.buttons.viewServices}
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-8 lg:grid-cols-2 lg:items-center" data-animate="fade">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {common.labels.featuredProduct}
            </p>
            <h2 className="heading-accent text-3xl font-semibold">{home.product.title}</h2>
            <p className="text-secondary">{home.product.description}</p>
            <ul className="space-y-3 text-secondary">
              {home.product.bullets.map((bullet) => (
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
              title={common.buttons.download}
            >
              {common.buttons.download}
            </Link>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{home.product.promiseTitle}</h3>
              <p className="mt-2 text-secondary">{home.product.promiseBody}</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="reviews" className="section-shell">
        <Container className="space-y-10 reveal" data-animate="fade">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {common.labels.appReviews}
            </p>
            <h2 className="heading-accent text-3xl font-semibold">{home.reviews.title}</h2>
            <p className="text-secondary md:text-lg">{home.reviews.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {home.reviews.items.map((review) => (
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
              title={common.buttons.seeMoreReviews}
            >
              {common.buttons.seeMoreReviews}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
