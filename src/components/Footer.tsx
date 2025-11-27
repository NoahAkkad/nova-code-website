import Link from "next/link";
import { Container } from "@/components/Container";
import { useI18n } from "./I18nProvider";
import { localizedPath } from "@/locales";

const quickLinks = [
  { labelKey: "home", href: "/" },
  { labelKey: "about", href: "/about" },
  { labelKey: "services", href: "/services" },
  { labelKey: "products", href: "/products" },
  { labelKey: "contact", href: "/contact" },
];

const legalLinks = [
  { labelKey: "privacy", href: "#" },
  { labelKey: "terms", href: "#" },
];

export function Footer() {
  const { dictionary, locale } = useI18n();

  return (
    <footer className="footer-border-gold bg-black py-10 text-sm text-white">
      <Container className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-xl space-y-3">
          <h3 className="text-lg font-semibold">Nova Code AB</h3>
          <p className="text-secondary">{dictionary.footer.description}</p>
          <p className="text-secondary">{dictionary.footer.contact}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {dictionary.footer.quickLinks}
            </p>
            <div className="flex flex-col gap-2 text-secondary">
              {quickLinks.map((item) => (
                <Link
                  key={item.labelKey}
                  href={localizedPath(locale, item.href)}
                  className="link-underline-gold transition hover:text-white"
                >
                  {dictionary.nav[item.labelKey as keyof typeof dictionary.nav]}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {dictionary.footer.legal}
            </p>
            <div className="flex flex-col gap-2 text-secondary">
              {legalLinks.map((item) => (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  className="link-underline-gold transition hover:text-white"
                >
                  {dictionary.footer[item.labelKey as keyof typeof dictionary.footer]}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {dictionary.footer.follow}
            </p>
            <div className="flex flex-col gap-2 text-secondary">
              <Link href="https://www.linkedin.com/company/nova-code-ab" className="link-underline-gold transition hover:text-white">
                {dictionary.footer.linkedIn}
              </Link>
              <Link href="https://www.twitter.com" className="link-underline-gold transition hover:text-white">
                {dictionary.footer.twitter}
              </Link>
              <Link href="https://www.instagram.com" className="link-underline-gold transition hover:text-white">
                {dictionary.footer.instagram}
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-10 border-t border-white/10 pt-6">
        <Container className="flex flex-col gap-2 text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white">{dictionary.footer.copyright}</p>
          <div className="flex gap-4 text-secondary">
            {legalLinks.map((item) => (
              <Link
                key={item.labelKey}
                href={item.href}
                className="link-underline-gold transition hover:text-white"
              >
                {dictionary.footer[item.labelKey as keyof typeof dictionary.footer]}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
