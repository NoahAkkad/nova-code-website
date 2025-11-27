"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/I18nProvider";

const quickLinks = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.services", href: "/services" },
  { labelKey: "nav.products", href: "/products" },
  { labelKey: "nav.contact", href: "/contact" },
];

const legalLinks = [
  { labelKey: "footer.privacy", href: "#" },
  { labelKey: "footer.terms", href: "#" },
];

const socialUrls = {
  linkedin: "https://www.linkedin.com/company/nova-code-ab/",
  x: "https://x.com/",
  instagram: "https://instagram.com/",
};

const socialLinks = [
  { label: "LinkedIn", ariaLabel: "LinkedIn", href: socialUrls.linkedin, Icon: LinkedInIcon },
  { label: "X", ariaLabel: "X (Twitter)", href: socialUrls.x, Icon: XIcon },
  { label: "Instagram", ariaLabel: "Instagram", href: socialUrls.instagram, Icon: InstagramIcon },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-border-gold bg-black py-10 text-sm text-white">
      <Container className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-xl space-y-3">
          <h3 className="text-lg font-semibold">Nova Code AB</h3>
          <p className="text-secondary">{t("footer.description") as string}</p>
          <p className="text-secondary">{t("footer.contact") as string}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t("footer.quickLinks") as string}
            </p>
            <div className="flex flex-col gap-2 text-secondary">
              {quickLinks.map((item) => (
                <Link key={item.labelKey} href={item.href} className="link-underline-gold transition hover:text-white">
                  {t(item.labelKey) as string}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t("footer.legal") as string}
            </p>
            <div className="flex flex-col gap-2 text-secondary">
              {legalLinks.map((item) => (
                <Link key={item.labelKey} href={item.href} className="link-underline-gold transition hover:text-white">
                  {t(item.labelKey) as string}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t("footer.follow") as string}
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {socialLinks.map(({ label, ariaLabel, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={ariaLabel}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition duration-200 hover:scale-105 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] hover:shadow-[0_0_0_1px_var(--accent-gold),0_10px_25px_rgba(212,175,55,0.18)]"
                >
                  <Icon />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-10 border-t border-white/10 pt-6">
        <Container className="flex flex-col gap-2 text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white">{t("footer.copyright") as string}</p>
          <div className="flex gap-4 text-secondary">
            {legalLinks.map((item) => (
              <Link key={item.labelKey} href={item.href} className="link-underline-gold transition hover:text-white">
                {t(item.labelKey) as string}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M5.16 8.56V19H2.1V8.56h3.06ZM3.63 3.5c.98 0 1.78.8 1.78 1.78 0 .98-.8 1.79-1.78 1.79A1.79 1.79 0 0 1 1.85 5.28c0-.99.8-1.78 1.78-1.78ZM13.2 11.05c1.33 0 2.23.87 2.23 2.74V19h3.05v-5.7c0-3.24-1.73-4.73-4.05-4.73-1.88 0-2.71 1.03-3.16 1.75V8.56H8.22V19h3.05v-6.18c0-.34.02-.68.13-.92.29-.68.96-1.85 1.8-1.85Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="m17.07 3.5-3.77 4.34 4.41 6.32h-3.49l-2.47-3.7-3.12 3.7H3.95l4.17-4.93-4.3-5.73h3.52l2.35 3.42 2.9-3.42h4.48ZM7.65 6.05 6.03 8.01l4.91 6.87 1.6-1.9-4.89-6.93Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm0 2A2.5 2.5 0 0 0 5.5 8v8A2.5 2.5 0 0 0 8 18.5h8a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 16 5.5H8Zm7.75.75a1 1 0 1 1-.01 2.01 1 1 0 0 1 .01-2.01ZM12 8.25A3.75 3.75 0 1 1 12 15.75 3.75 3.75 0 0 1 12 8.25Zm0 2A1.75 1.75 0 1 0 12 13.5a1.75 1.75 0 0 0 0-3.25Z" />
    </svg>
  );
}
