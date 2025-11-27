import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/metadata";
import { getDictionary, type Locale } from "@/locales";

type PageProps = { params: { locale: Locale } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dictionary = getDictionary(params.locale);

  return buildPageMetadata({
    locale: params.locale,
    path: "/about",
    title: dictionary.metadata.about.title,
    description: dictionary.metadata.about.description,
  });
}

export default function AboutPage({ params }: PageProps) {
  const dictionary = getDictionary(params.locale);
  const { aboutPage, common } = dictionary;

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-6 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{common.labels.aboutPreview}</p>
          <h1 className="heading-accent text-4xl font-semibold">{dictionary.nav.about} Nova Code AB</h1>
          <p className="max-w-3xl text-lg text-secondary">{aboutPage.intro}</p>
          <p className="text-white">{aboutPage.location}</p>
          <p className="max-w-3xl text-secondary">{aboutPage.body}</p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{aboutPage.missionTitle}</h2>
            <p className="text-secondary">{aboutPage.mission}</p>
          </div>
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">{aboutPage.visionTitle}</h2>
            <p className="text-secondary">{aboutPage.vision}</p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-6 reveal" data-animate="fade">
          <h3 className="heading-accent text-2xl font-semibold">{aboutPage.valuesTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.values.map((value) => (
              <div key={value} className="card-surface reveal p-4 text-center" data-animate="fade">
                <p className="text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
