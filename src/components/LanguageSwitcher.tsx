"use client";

import { useI18n } from "@/context/I18nContext";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();

  const handleChange = (next: "en" | "sv") => () => setLanguage(next);

  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
      <button
        type="button"
        onClick={handleChange("en")}
        className={`transition hover:text-[var(--accent-gold)] ${
          language === "en" ? "text-[var(--accent-gold)]" : "text-white/80"
        }`}
        aria-pressed={language === "en"}
      >
        {t("common.language.en") as string}
      </button>
      <span className="text-white/50">|</span>
      <button
        type="button"
        onClick={handleChange("sv")}
        className={`transition hover:text-[var(--accent-gold)] ${
          language === "sv" ? "text-[var(--accent-gold)]" : "text-white/80"
        }`}
        aria-pressed={language === "sv"}
      >
        {t("common.language.sv") as string}
      </button>
    </div>
  );
}
