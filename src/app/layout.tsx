import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { I18nProvider } from "@/components/I18nProvider";
import { getDictionary, normalizeLocale, type Locale } from "@/locales";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  "GOOGLE_VERIFICATION_CODE_HERE";

export const metadata: Metadata = {
  metadataBase: new URL("https://novacode.se"),
  title: "Nova Code AB",
  description:
    "Nova Code AB builds premium digital products including software development, mobile apps, and SaaS solutions in Sweden.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale?: Locale };
}>) {
  const locale = normalizeLocale(params?.locale);
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale}>
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
        <ScrollReveal />
        <I18nProvider locale={locale} dictionary={dictionary}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>

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
      </body>
    </html>
  );
}
