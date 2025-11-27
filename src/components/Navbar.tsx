"use client";
import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Translation } from "./Translation";
import { useI18n } from "@/context/I18nContext";

const links = [
  { key: "common.nav.home", href: "/" },
  { key: "common.nav.about", href: "/about" },
  { key: "common.nav.services", href: "/services" },
  { key: "common.nav.products", href: "/products" },
  { key: "common.nav.contact", href: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/85 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(212,175,55,0.7)] bg-[rgba(212,175,55,0.08)] p-2 font-semibold shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            NC
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold">Nova Code AB</p>
            <p className="text-xs text-white/70">
              <Translation i18nKey="common.brandTagline" />
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.18em] md:flex"
          aria-label="Primary navigation"
        >
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 transition hover:text-[var(--accent-gold)]">
              <Translation i18nKey={item.key} />
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white"
            aria-label={t("common.nav.toggle") as string}
            aria-expanded={open}
            aria-controls="mobile-menu"
            type="button"
          >
            <span className="sr-only">
              <Translation i18nKey="common.nav.toggle" />
            </span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden" id="mobile-menu">
          <Container className="flex flex-col gap-2 py-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                <Translation i18nKey={item.key} />
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
