import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Services | Nova Code AB Software & Mobile App Development",
  description:
    "Explore Nova Code AB services: software development, mobile app development in Göteborg, SaaS development in Sweden, cloud engineering, and UI/UX design.",
  keywords: [
    "nova code ab",
    "software development",
    "mobile apps",
    "SaaS",
    "web development",
    "Göteborg tech company",
    "app development Sweden",
    "SaaS development Sweden",
    "Custom software solutions",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se/services",
  },
  openGraph: {
    title: "Services | Nova Code AB Software & Mobile App Development",
    description:
      "Nova Code AB delivers mobile app development in Göteborg, SaaS development across Sweden, and custom software solutions tailored to your roadmap.",
    url: "https://novacode.se/services",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Nova Code AB services overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Nova Code AB Software & Mobile App Development",
    description:
      "See how Nova Code AB builds SaaS platforms, mobile apps, and cloud-native software products for teams in Sweden and beyond.",
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

const services = [
  "Mobile App Development (Android/iOS)",
  "Web Applications & SaaS Platforms",
  "Custom Software Development",
  "UI/UX Design & Prototyping",
  "Backend Development & API Systems",
  "Cloud Solutions (AWS, Azure)",
  "Full-Cycle Development & Maintenance",
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Services</p>
          <h1 className="heading-accent text-4xl font-semibold">Services</h1>
          <p className="max-w-3xl text-lg text-secondary">
            End-to-end teams that design, build, and support modern digital products with clarity and speed. We lead software
            development Sweden projects with battle-tested engineering, product strategy, and secure delivery.
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-4 md:grid-cols-2" data-animate="fade">
          {services.map((service) => (
            <div key={service} className="card-surface reveal p-5" data-animate="fade">
              <p className="text-lg font-semibold">{service}</p>
              <p className="mt-2 text-secondary">
                Tailored engagements with precise roadmaps, transparent communication, and measurable delivery. Our team blends
                mobile app development in Göteborg, SaaS development in Sweden, and cloud expertise to build custom software
                solutions.
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="section-shell border-t border-white/10">
        <Container className="reveal space-y-4" data-animate="fade">
          <h2 className="heading-accent text-2xl font-semibold">Plan your next release with us</h2>
          <p className="max-w-3xl text-secondary">
            Whether you need an app development company to ship a new Android build or a partner to modernize SaaS infrastructure,
            Nova Code AB aligns to your roadmap and keeps every stakeholder informed.
          </p>
          <Link href="/contact" className="button-outline w-fit" title="Contact Nova Code AB">
            Talk to our team
          </Link>
        </Container>
      </section>
    </div>
  );
}
