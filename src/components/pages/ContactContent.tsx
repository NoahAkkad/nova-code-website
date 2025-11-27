"use client";

import { Container } from "@/components/Container";
import { useTranslation } from "@/i18n/I18nProvider";

export function ContactContent() {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t("contact.eyebrow") as string}
          </p>
          <h1 className="heading-accent text-4xl font-semibold">{t("contact.title") as string}</h1>
          <p className="max-w-3xl text-lg text-secondary">{t("contact.intro") as string}</p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{t("contact.details.title") as string}</h2>
            <address className="space-y-3 text-secondary not-italic">
              <p className="text-white">{t("contact.details.company") as string}</p>
              <p>{t("contact.details.location") as string}</p>
              <p>
                {t("contact.details.phoneLabel") as string} {" "}
                <a href="tel:+46736156631" className="link-underline-gold" title="Call Nova Code AB">
                  +46 736 156 631
                </a>
              </p>
              <p>
                {t("contact.details.emailLabel") as string} {" "}
                <a href="mailto:info@novacode.se" className="link-underline-gold" title="Email Nova Code AB">
                  info@novacode.se
                </a>
              </p>
            </address>
            <p className="text-secondary">{t("contact.details.description") as string}</p>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-name">
                  {t("contact.form.name") as string}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder={t("contact.form.namePlaceholder") as string}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-email">
                  {t("contact.form.email") as string}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder={t("contact.form.emailPlaceholder") as string}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-subject">
                  {t("contact.form.subject") as string}
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder={t("contact.form.subjectPlaceholder") as string}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-message">
                  {t("contact.form.message") as string}
                </label>
                <textarea
                  rows={4}
                  id="contact-message"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder={t("contact.form.messagePlaceholder") as string}
                />
              </div>
              <button type="button" className="button-outline w-full justify-center">
                {t("contact.form.submit") as string}
              </button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
