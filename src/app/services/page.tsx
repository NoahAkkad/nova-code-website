import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { Container } from "@/components/Container";
import { keywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services | Nova Code AB Software & Mobile App Development",
  description:
    "Explore Nova Code AB services: software development, mobile app development in Göteborg, SaaS development in Sweden, cloud engineering, and UI/UX design.",
  keywords,
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: `${siteConfig.domain}/services`,
  },
  openGraph: {
    title: "Services | Nova Code AB Software & Mobile App Development",
    description:
      "Nova Code AB delivers mobile app development in Göteborg, SaaS development across Sweden, and custom software solutions tailored to your roadmap.",
    url: `${siteConfig.domain}/services`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
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
    images: [siteConfig.ogImagePath],
    creator: "@novacodeab",
  },
};

const services = [
  {
    title: "Mobile App Development (Android/iOS)",
    description:
      "We build high-performance mobile applications tailored to your business goals. Our team designs and develops scalable Android and iOS apps with seamless UX, modern architecture, and reliable backend integrations. From concept to launch, we deliver mobile products that are fast, secure, and user-focused.",
  },
  {
    title: "Web Applications & SaaS Platforms",
    description:
      "We create robust, cloud-ready web applications and custom SaaS platforms. Our solutions are designed for scalability, security, and long-term maintainability, ensuring your business can grow without limitations. We handle everything from UI/UX to API development and cloud deployment.",
  },
  {
    title: "Custom Software Development",
    description:
      "We develop fully customized software solutions built around your specific workflows, challenges, and strategic goals. Whether you need internal tools, automation systems, or end-to-end digital platforms, we deliver precise, scalable software designed to improve performance and efficiency.",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "We create clean, intuitive, and user-centered digital experiences. Our design process includes research, wireframing, prototyping, and high-fidelity UI design tailored to your brand. The result: interfaces that look great, feel natural, and improve user engagement.",
  },
  {
    title: "Backend Development & API Systems",
    description:
      "We build secure, efficient backend systems and scalable APIs to power your applications. Our team specializes in Node.js, .NET, cloud-native architecture, microservices, and database optimization. We ensure your backend is fast, stable, and ready for high-traffic workloads.",
  },
  {
    title: "Cloud Solutions (AWS, Azure)",
    description:
      "We deliver cloud solutions that enhance reliability, reduce costs, and scale with demand. Our services include cloud migration, DevOps automation, CI/CD pipelines, serverless functions, and infrastructure setup on AWS or Azure. We help you achieve high availability and performance with modern cloud architecture.",
  },
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
            <div key={service.title} className="card-surface reveal p-5" data-animate="fade">
              <p className="text-lg font-semibold">{service.title}</p>
              <p className="mt-2 text-secondary">{service.description}</p>
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

      <Script id="ld-json-services" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${siteConfig.name} Software Development Services`,
          serviceType: services.map((service) => service.title),
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.domain,
            logo: `${siteConfig.domain}${siteConfig.logoPath}`,
            sameAs: [siteConfig.social.linkedin],
          },
          areaServed: "SE",
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${siteConfig.domain}/services`,
          },
        })}
      </Script>
    </div>
  );
}
