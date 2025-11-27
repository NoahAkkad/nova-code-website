import type { Metadata } from "next";
import { Locale, defaultLocale, localizedPath } from "@/locales";

const BASE_URL = "https://novacode.se";

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const normalizedPath = path === "" ? "/" : path;
  const localizedPathname = localizedPath(locale, normalizedPath);
  const defaultPath = normalizedPath;
  const alternateSv = localizedPath("sv", normalizedPath);
  const canonicalPath = locale === defaultLocale ? defaultPath : localizedPathname;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${canonicalPath}`,
      languages: {
        en: `${BASE_URL}${defaultPath}`,
        sv: `${BASE_URL}${alternateSv}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${locale === defaultLocale ? defaultPath : localizedPathname}`,
      type: "website",
      locale: locale === "sv" ? "sv_SE" : "en_US",
      siteName: "Nova Code AB",
      images: [
        {
          url: "/img/hero.png",
          width: 1200,
          height: 630,
          alt: "Nova Code AB preview image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/img/hero.png"],
      creator: "@novacodeab",
    },
  };
}
