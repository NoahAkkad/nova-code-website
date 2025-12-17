"use client";

import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";

export function RootClient({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <RootLayoutShell>{children}</RootLayoutShell>
    </LanguageProvider>
  );
}

function RootLayoutShell({ children }: { children: ReactNode }) {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("common.skip")}
      </a>
      <ScrollReveal />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
