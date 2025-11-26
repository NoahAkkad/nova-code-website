import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "About Nova Code AB | Göteborg Software Development Company",
  description:
    "Learn about Nova Code AB in Göteborg, Sweden—software development specialists building mobile apps, SaaS platforms, and custom software solutions.",
  keywords: [
    "nova code ab",
    "software development",
    "mobile apps",
    "SaaS",
    "web development",
    "Göteborg tech company",
    "app development Sweden",
    "Software development Sweden",
    "Mobile app development Göteborg",
    "Custom software solutions",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se/about",
  },
  openGraph: {
    title: "About Nova Code AB | Göteborg Software Development Company",
    description:
      "Meet Nova Code AB, a Göteborg-based team delivering custom software solutions, SaaS development, and mobile app engineering across Sweden.",
    url: "https://novacode.se/about",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Nova Code AB software development in Göteborg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nova Code AB | Göteborg Software Development Company",
    description:
      "Discover the Nova Code AB team building mobile apps, SaaS platforms, and custom software solutions from Göteborg, Sweden.",
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

const values = ["Innovation", "Quality", "Scalability", "Transparency"];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-6 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">About</p>
          <h1 className="heading-accent text-4xl font-semibold">About Nova Code AB</h1>
          <p className="max-w-3xl text-lg text-secondary">
            Nova Code AB is a Swedish software development company focused on building high-performance digital products.
            Founded in 2025, our mission is to deliver innovative, user-focused solutions using modern technologies.
          </p>
          <p className="text-white">Location: Gothenburg, Sweden</p>
          <p className="max-w-3xl text-secondary">
            As a Göteborg tech company, we specialize in mobile app development, SaaS development in Sweden, and custom software
            solutions that align design, engineering, and product strategy for growing teams.
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">Mission</h2>
            <p className="text-secondary">
              To craft smart, scalable, and user-centered software that unlocks new growth for businesses and creates meaningful
              experiences for their customers.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">Vision</h2>
            <p className="text-secondary">
              To be recognized as the premium Swedish software company known for modern engineering, precise design, and reliable
              delivery.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-6 reveal" data-animate="fade">
          <h3 className="heading-accent text-2xl font-semibold">Values</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
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
