"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import en from "@/locales/en.json";
import sv from "@/locales/sv.json";

type Language = "en" | "sv";
type TranslationValue = string | number | boolean | TranslationValue[] | { [key: string]: TranslationValue };

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => TranslationValue;
};

const resources: Record<Language, Record<string, TranslationValue>> = {
  en,
  sv,
};

const STORAGE_KEY = "nova-code-language";

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getNestedValue(obj: Record<string, TranslationValue>, key: string): TranslationValue | undefined {
  return key.split(".").reduce<TranslationValue | undefined>((acc, part) => {
    if (acc && typeof acc === "object" && !Array.isArray(acc)) {
      return (acc as Record<string, TranslationValue>)[part];
    }
    if (acc === undefined) return undefined;
    return undefined;
  }, obj);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (window.localStorage.getItem(STORAGE_KEY) as Language | null) : null;
    if (stored === "en" || stored === "sv") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    }
  }, []);

  const t = useCallback(
    (key: string): TranslationValue => {
      const fromCurrent = getNestedValue(resources[language], key);
      if (fromCurrent !== undefined) return fromCurrent;

      const fallback = getNestedValue(resources.en, key);
      if (fallback !== undefined) return fallback;

      return key;
    },
    [language],
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
