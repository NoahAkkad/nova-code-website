export const locales = ["en", "sv"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

import en from "./en.json";
import sv from "./sv.json";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  sv,
};

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function normalizeLocale(locale?: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === "/" ? "/" : path;

  if (locale === defaultLocale) {
    return normalized;
  }

  const suffix = normalized === "/" ? "" : normalized;
  return `/${locale}${suffix}`;
}

export function stripLocale(pathname: string): string {
  const pattern = /^\/(en|sv)(?=\/|$)/;
  const stripped = pathname.replace(pattern, "");
  return stripped === "" ? "/" : stripped;
}
