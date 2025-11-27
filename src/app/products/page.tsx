import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { Container } from "@/components/Container";
import { Translation, TranslatedList } from "@/components/Translation";
import { keywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Nova Play | Products | Nova Code AB Mobile Gaming App",
  description:
    "Discover Nova Play by Nova Code AB—an Android mobile gaming and reward app built in Sweden with cloud-native performance and engaging gameplay.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: `${siteConfig.domain}/products`,
  },
  openGraph: {
    title: "Nova Play | Nova Code AB Mobile Gaming App",
    description:
      "Play Nova Play—our flagship Android reward app built by Nova Code AB for immersive mobile gaming audiences in Sweden and worldwide.",
    url: `${siteConfig.domain}/products`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Nova Play mobile gaming app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Play | Nova Code AB Mobile Gaming App",
    description:
      "Nova Play is the mobile gaming and reward app from Nova Code AB, available now on Google Play for Android players.",
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Translation i18nKey="products.kicker" />
          </p>
          <h1 className="heading-accent text-4xl font-semibold">
            <Translation i18nKey="products.title" />
          </h1>
          <p className="max-w-3xl text-lg text-secondary">
            <Translation i18nKey="products.description" />
          </p>
          <p className="max-w-3xl text-secondary">
            <Translation i18nKey="products.descriptionSecondary" />
          </p>
          <Link
            href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
            className="button-outline w-fit"
            target="_blank"
            rel="noreferrer"
            title="Download Nova Play on Google Play"
          >
            <Translation i18nKey="products.cta" />
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">
              <Translation i18nKey="products.featuresTitle" />
            </h2>
            <ul className="space-y-3 text-secondary">
              <TranslatedList<string>
                i18nKey="products.features"
                render={(feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                    <span>{feature}</span>
                  </li>
                )}
              />
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">
              <Translation i18nKey="products.technologyTitle" />
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <TranslatedList<string>
                i18nKey="products.technology"
                render={(item) => (
                  <div key={item} className="card-surface reveal p-4" data-animate="fade">
                    <p className="text-lg font-semibold">{item}</p>
                  </div>
                )}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell border-y border-white/10">
        <Container className="reveal flex flex-col gap-4 text-center" data-animate="fade">
          <h2 className="heading-accent text-2xl font-semibold">
            <Translation i18nKey="products.reviewsTitle" />
          </h2>
          <p className="text-secondary">
            <Translation i18nKey="products.reviewsDescription" />
          </p>
          <div className="flex justify-center">
            <Link href="/#reviews" className="button-outline">
              <Translation i18nKey="products.reviewsCta" />
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
            name: siteConfig.name,
            url: siteConfig.domain,
            logo: `${siteConfig.domain}${siteConfig.logoPath}`,
            sameAs: [siteConfig.domain, siteConfig.social.linkedin],
          },
          description:
            "Nova Play is a mobile gaming and reward app for Android built by Nova Code AB in Sweden, delivering immersive gameplay and reliable cloud performance.",
          image: `${siteConfig.domain}${siteConfig.ogImagePath}`,
          url: `${siteConfig.domain}/products`,
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
