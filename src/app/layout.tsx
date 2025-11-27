import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { I18nProvider } from "@/i18n/I18nProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  "GOOGLE_VERIFICATION_CODE_HERE";

export const metadata: Metadata = {
  metadataBase: new URL("https://novacode.se"),
  title: "Nova Code AB | Smart Digital Product Studio in Göteborg",
  description:
    "Nova Code AB is a Göteborg tech company delivering software development, mobile apps, SaaS, and custom digital products for teams across Sweden.",
  keywords: [
    "nova code ab",
    "software development",
    "mobile apps",
    "SaaS",
    "web development",
    "Göteborg tech company",
    "app development Sweden",
    "Software development Sweden",
    "Mobile app development Göteborg",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se",
  },
  openGraph: {
    title: "Nova Code AB | Smart Digital Product Studio in Göteborg",
    description:
      "Swedish experts in software development, mobile app development, SaaS engineering, and custom software solutions headquartered in Göteborg.",
    url: "https://novacode.se",
    type: "website",
    locale: "en_US",
    siteName: "Nova Code AB",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Nova Code AB software development hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Code AB | Smart Digital Product Studio",
    description:
      "Nova Code AB crafts premium mobile apps, web platforms, and SaaS products for businesses across Sweden and beyond.",
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/img/logo.svg" as="image" />
        <meta name="author" content="Nova Code AB" />
        <meta
          name="keywords"
          content="nova code ab, software development, mobile apps, SaaS, web development, Göteborg tech company, app development Sweden"
        />
        <meta
          name="google-site-verification"
          content={googleSiteVerification}
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <I18nProvider>
          <ScrollReveal />
          <Navbar />
          <main>{children}</main>
          <Footer />

          <Script id="ld-json-organization" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nova Code AB",
              url: "https://novacode.se",
              logo: "/img/logo.svg",
              address: "Grevegårdsvägen 152, 421 61 Västra Frölunda, Göteborg, Sweden",
              sameAs: [
                "https://novacode.se",
                "https://www.linkedin.com/company/nova-code-ab/",
              ],
            })}
          </Script>
          <Script id="ld-json-website" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://novacode.se",
              name: "Nova Code AB",
              sameAs: [
                "https://novacode.se",
                "https://www.linkedin.com/company/nova-code-ab/",
              ],
              potentialAction: {
                "@type": "SearchAction",
                target: "https://novacode.se/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            })}
          </Script>
          <Script id="ld-json-localbusiness" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nova Code AB",
              image: "https://novacode.se/img/logo.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Grevegårdsvägen 152",
                postalCode: "421 61",
                addressLocality: "Västra Frölunda",
                addressRegion: "Göteborg",
                addressCountry: "Sweden",
              },
              url: "https://novacode.se",
              telephone: "+46 736 156 631",
              sameAs: [
                "https://novacode.se",
                "https://www.linkedin.com/company/nova-code-ab/",
              ],
            })}
          </Script>
        </I18nProvider>
      </body>
    </html>
  );
}
