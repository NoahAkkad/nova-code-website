import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/metadata";
import { getDictionary, localizedPath, type Locale } from "@/locales";

type PageProps = { params: { locale: Locale } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dictionary = getDictionary(params.locale);

  return buildPageMetadata({
    locale: params.locale,
    path: "/products",
    title: dictionary.metadata.products.title,
    description: dictionary.metadata.products.description,
  });
}

export default function ProductsPage({ params }: PageProps) {
  const dictionary = getDictionary(params.locale);
  const { productsPage, common } = dictionary;

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{dictionary.nav.products}</p>
          <h1 className="heading-accent text-4xl font-semibold">{productsPage.intro}</h1>
          <p className="max-w-3xl text-lg text-secondary">{productsPage.description}</p>
          <Link
            href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
            className="button-outline w-fit"
            target="_blank"
            rel="noreferrer"
            title={common.buttons.download}
          >
            {common.buttons.download}
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{productsPage.featuresTitle}</h2>
            <ul className="space-y-3 text-secondary">
              {productsPage.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{productsPage.technologyTitle}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {productsPage.technology.map((item) => (
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
          <h2 className="heading-accent text-2xl font-semibold">{productsPage.hearFromUsers}</h2>
          <p className="text-secondary">{productsPage.hearFromUsersDescription}</p>
          <div className="flex justify-center">
            <Link href={localizedPath(params.locale, "/#reviews")} className="button-outline">
              {common.buttons.viewReviews}
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
          description: dictionary.metadata.products.description,
          image: "https://novacode.se/img/hero.png",
          url: `https://novacode.se${localizedPath(params.locale, "/products")}`,
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
