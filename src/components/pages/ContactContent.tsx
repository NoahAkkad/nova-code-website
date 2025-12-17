"use client";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/config/site";

export function ContactContent() {
  const { t } = useLanguage();

  const nameLabel = (t("contact.nameLabel") as string).replace("{{name}}", siteConfig.name);
  const locationLabel = (t("contact.locationLabel") as string)
    .replace("{{city}}", siteConfig.address.city)
    .replace("{{region}}", siteConfig.address.region)
    .replace("{{country}}", siteConfig.address.country);

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{t("contact.badge")}</p>
          <h1 className="heading-accent text-4xl font-semibold">{t("contact.heading")}</h1>
          <p className="max-w-3xl text-lg text-secondary">{t("contact.intro")}</p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{t("contact.detailsHeading")}</h2>
            <address className="space-y-3 text-secondary not-italic">
              <p className="text-white">{nameLabel}</p>
              <p>{locationLabel}</p>
              <p>
                {t("contact.phoneLabel")}
                {" "}
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="link-underline-gold" title="Call Nova Code AB">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                {t("contact.emailLabel")}
                {" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="link-underline-gold" title="Email Nova Code AB">
                  {siteConfig.contactEmail}
                </a>
              </p>
            </address>
            <p className="text-secondary">{t("contact.detailsCopy")}</p>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <ContactForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
