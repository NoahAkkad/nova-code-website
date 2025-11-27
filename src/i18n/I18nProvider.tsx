"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/locales/en.json";
import sv from "@/locales/sv.json";

type Language = "en" | "sv";
type Translations = typeof en;

type TranslationValue = string | number | boolean | TranslationValue[] | { [key: string]: TranslationValue };

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => TranslationValue | string;
};

const translations: Record<Language, Translations> = { en, sv };

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const STORAGE_KEY = "nova-code-language";

function getNestedValue(obj: Record<string, any>, path: string): TranslationValue | undefined {
  return path.split(".").reduce<TranslationValue | undefined>((acc, part) => {
    if (acc === undefined || acc === null) {
      return (obj as Record<string, TranslationValue | undefined>)[part];
    }

    if (typeof acc === "object" && part in (acc as Record<string, TranslationValue>)) {
      return (acc as Record<string, TranslationValue>)[part];
    }

    return undefined;
  }, undefined);
}

export function I18nProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "en" || stored === "sv") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  const t = useMemo(
    () =>
      (key: string) =>
        getNestedValue(translations[language] as unknown as Record<string, any>, key) ?? key,
    [language]
  );

  const setLanguage = (lang: Language) => setLanguageState(lang);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}
