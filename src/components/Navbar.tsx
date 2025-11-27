"use client";
import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { useTranslation } from "@/i18n/I18nProvider";

const links = [
  { label: "nav.home", href: "/" },
  { label: "nav.about", href: "/about" },
  { label: "nav.services", href: "/services" },
  { label: "nav.products", href: "/products" },
  { label: "nav.contact", href: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/85 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(212,175,55,0.7)] bg-[rgba(212,175,55,0.08)] p-2 font-semibold shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            NC
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold">Nova Code AB</p>
            <p className="text-xs text-white/70">{t("nav.tagline")}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.18em]">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 transition hover:text-[var(--accent-gold)]"
              >
                {t(item.label) as string}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`transition hover:text-[var(--accent-gold)] ${
                language === "en" ? "text-[var(--accent-gold)]" : ""
              }`}
            >
              {t("nav.language.en") as string}
            </button>
            <span className="text-white/40">|</span>
            <button
              type="button"
              onClick={() => setLanguage("sv")}
              className={`transition hover:text-[var(--accent-gold)] ${
                language === "sv" ? "text-[var(--accent-gold)]" : ""
              }`}
            >
              {t("nav.language.sv") as string}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {t(item.label) as string}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-3 pt-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`transition hover:text-[var(--accent-gold)] ${
                  language === "en" ? "text-[var(--accent-gold)]" : ""
                }`}
              >
                {t("nav.language.en") as string}
              </button>
              <span className="text-white/40">|</span>
              <button
                type="button"
                onClick={() => setLanguage("sv")}
                className={`transition hover:text-[var(--accent-gold)] ${
                  language === "sv" ? "text-[var(--accent-gold)]" : ""
                }`}
              >
                {t("nav.language.sv") as string}
              </button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
