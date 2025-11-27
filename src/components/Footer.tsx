import Link from "next/link";
import { Container } from "@/components/Container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export function Footer() {
  return (
    <footer className="footer-border-gold bg-black py-10 text-sm text-white">
      <Container className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-xl space-y-3">
          <h3 className="text-lg font-semibold">Nova Code AB</h3>
          <p className="text-secondary">
            Swedish software development company delivering premium, modern, and scalable digital products for ambitious teams.
          </p>
          <p className="text-secondary">
            Location: Grevegårdsvägen 152, 421 61 Västra Frölunda, Göteborg, Sweden · Phone: +46 736 156 631 · Email:
            info@novacode.se
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Quick Links</p>
            <div className="flex flex-col gap-2 text-secondary">
              {quickLinks.map((item) => (
                <Link key={item.label} href={item.href} className="link-underline-gold transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Legal</p>
            <div className="flex flex-col gap-2 text-secondary">
              {legalLinks.map((item) => (
                <Link key={item.label} href={item.href} className="link-underline-gold transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Follow</p>
            <div className="flex flex-col gap-2 text-secondary">
              <Link href="https://www.linkedin.com/company/nova-code-ab" className="link-underline-gold transition hover:text-white">
                LinkedIn
              </Link>
              <Link href="https://x.com/NovaCodeAB" className="link-underline-gold transition hover:text-white">
                X
              </Link>
              <Link href="https://www.instagram.com/novacodeab/" className="link-underline-gold transition hover:text-white">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-10 border-t border-white/10 pt-6">
        <Container className="flex flex-col gap-2 text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white">© 2025 Nova Code AB. All rights reserved.</p>
          <div className="flex gap-4 text-secondary">
            {legalLinks.map((item) => (
              <Link key={item.label} href={item.href} className="link-underline-gold transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
