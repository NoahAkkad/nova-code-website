import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/metadata";
import { getDictionary, type Locale } from "@/locales";

type PageProps = { params: { locale: Locale } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dictionary = getDictionary(params.locale);

  return buildPageMetadata({
    locale: params.locale,
    path: "/contact",
    title: dictionary.metadata.contact.title,
    description: dictionary.metadata.contact.description,
  });
}

export default function ContactPage({ params }: PageProps) {
  const dictionary = getDictionary(params.locale);
  const { contactPage, common } = dictionary;

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{common.labels.contact}</p>
          <h1 className="heading-accent text-4xl font-semibold">{dictionary.nav.contact}</h1>
          <p className="max-w-3xl text-lg text-secondary">{contactPage.intro}</p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{common.labels.contactDetails}</h2>
            <address className="space-y-3 text-secondary not-italic">
              <p className="text-white">{contactPage.companyName}: Nova Code AB</p>
              <p>
                {contactPage.location}: {dictionary.home.hero.highlights.location}
              </p>
              <p>
                {contactPage.phone}: <a href="tel:+46736156631" className="link-underline-gold" title="Call Nova Code AB">+46 736 156 631</a>
              </p>
              <p>
                {contactPage.email}: <a href="mailto:info@novacode.se" className="link-underline-gold" title="Email Nova Code AB">info@novacode.se</a>
              </p>
            </address>
            <p className="text-secondary">{contactPage.details}</p>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-name">
                  {contactPage.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder={contactPage.form.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-email">
                  {contactPage.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder={contactPage.form.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-subject">
                  {contactPage.form.subjectLabel}
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder={contactPage.form.subjectPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-message">
                  {contactPage.form.messageLabel}
                </label>
                <textarea
                  rows={4}
                  id="contact-message"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder={contactPage.form.messagePlaceholder}
                />
              </div>
              <button type="button" className="button-outline w-full justify-center">
                {common.buttons.submit}
              </button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
