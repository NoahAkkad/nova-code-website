import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/metadata";
import { getDictionary, localizedPath, type Locale } from "@/locales";

type PageProps = { params: { locale: Locale } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dictionary = getDictionary(params.locale);

  return buildPageMetadata({
    locale: params.locale,
    path: "/services",
    title: dictionary.metadata.services.title,
    description: dictionary.metadata.services.description,
  });
}

export default function ServicesPage({ params }: PageProps) {
  const dictionary = getDictionary(params.locale);
  const { servicesPage, common } = dictionary;

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{common.labels.services}</p>
          <h1 className="heading-accent text-4xl font-semibold">{dictionary.nav.services}</h1>
          <p className="max-w-3xl text-lg text-secondary">{servicesPage.intro}</p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-4 md:grid-cols-2" data-animate="fade">
          {servicesPage.services.map((service) => (
            <div key={service.title} className="card-surface reveal p-5" data-animate="fade">
              <p className="text-lg font-semibold">{service.title}</p>
              <p className="mt-2 text-secondary">{service.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="section-shell border-t border-white/10">
        <Container className="reveal space-y-4" data-animate="fade">
          <h2 className="heading-accent text-2xl font-semibold">{servicesPage.ctaTitle}</h2>
          <p className="max-w-3xl text-secondary">{servicesPage.ctaDescription}</p>
          <Link
            href={localizedPath(params.locale, "/contact")}
            className="button-outline w-fit"
            title={common.buttons.talkToTeam}
          >
            {common.buttons.talkToTeam}
          </Link>
        </Container>
      </section>
    </div>
  );
}
