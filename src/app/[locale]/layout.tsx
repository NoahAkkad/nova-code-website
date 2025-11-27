import type { ReactNode } from "react";
import { locales, normalizeLocale, type Locale } from "@/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  normalizeLocale(params.locale);
  return children;
}
