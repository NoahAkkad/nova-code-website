import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { keywords, siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  "GOOGLE_VERIFICATION_CODE_HERE";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "Swedish experts in software development, mobile app development, SaaS engineering, and custom software solutions headquartered in Göteborg.",
    url: siteConfig.domain,
    type: "website",
    locale: "en_US",
    siteName: "Nova Code AB",
    images: [
      {
        url: siteConfig.ogImagePath,
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
    images: [siteConfig.ogImagePath],
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
          content={keywords.join(", ")}
        />
        <meta
          name="google-site-verification"
          content={googleSiteVerification}
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <ScrollReveal />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        <Script id="ld-json-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.domain,
            logo: `${siteConfig.domain}${siteConfig.logoPath}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              postalCode: siteConfig.address.postalCode,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.region,
              addressCountry: siteConfig.address.country,
            },
            sameAs: [
              siteConfig.domain,
              siteConfig.social.linkedin,
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: siteConfig.contactEmail,
              telephone: siteConfig.phone,
              areaServed: "SE",
              availableLanguage: ["en", "sv"],
            },
          })}
        </Script>
        <Script id="ld-json-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: siteConfig.domain,
            name: siteConfig.name,
            sameAs: [
              siteConfig.domain,
              siteConfig.social.linkedin,
            ],
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteConfig.domain}/?s={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
        <Script id="ld-json-localbusiness" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            image: `${siteConfig.domain}${siteConfig.logoPath}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              postalCode: siteConfig.address.postalCode,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.region,
              addressCountry: siteConfig.address.country,
            },
            url: siteConfig.domain,
            telephone: siteConfig.phone,
            email: siteConfig.contactEmail,
            sameAs: [
              siteConfig.domain,
              siteConfig.social.linkedin,
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
