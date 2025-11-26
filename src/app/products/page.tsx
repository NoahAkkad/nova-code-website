import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Nova Play | Products | Nova Code AB Mobile Gaming App",
  description:
    "Discover Nova Play by Nova Code AB—an Android mobile gaming and reward app built in Sweden with cloud-native performance and engaging gameplay.",
  keywords: [
    "nova code ab",
    "mobile apps",
    "Nova Play app",
    "mobile gaming",
    "reward app",
    "Android game",
    "Google Play app",
    "app development Sweden",
    "Mobile app development Göteborg",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se/products",
  },
  openGraph: {
    title: "Nova Play | Nova Code AB Mobile Gaming App",
    description:
      "Play Nova Play—our flagship Android reward app built by Nova Code AB for immersive mobile gaming audiences in Sweden and worldwide.",
    url: "https://novacode.se/products",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Nova Play mobile gaming app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Play | Nova Code AB Mobile Gaming App",
    description:
      "Nova Play is the mobile gaming and reward app from Nova Code AB, available now on Google Play for Android players.",
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

const features = [
  "Reward-based gameplay loops",
  "Real-time performance tuned for mobile",
  "Secure user profiles and progress sync",
  "Cloud-native infrastructure for scale",
];

const technologies = [
  "React Native",
  "TypeScript",
  "Node.js APIs",
  "Cloud services on AWS/Azure",
];

export default function ProductsPage() {
  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Products</p>
          <h1 className="heading-accent text-4xl font-semibold">Nova Play — Mobile Gaming Application</h1>
          <p className="max-w-3xl text-lg text-secondary">
            Nova Play is our flagship mobile gaming platform designed to deliver fun, interactive, and reward-based experiences.
          </p>
          <p className="max-w-3xl text-secondary">
            Built by our app development company in Sweden, Nova Play combines mobile gaming, SaaS-backed infrastructure, and
            custom software solutions to ensure reliable performance at scale.
          </p>
          <Link
            href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
            className="button-outline w-fit"
            target="_blank"
            rel="noreferrer"
            title="Download Nova Play on Google Play"
          >
            Download on Google Play
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">Features</h2>
            <ul className="space-y-3 text-secondary">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">Technology</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {technologies.map((item) => (
                <div key={item} className="card-surface reveal p-4" data-animate="fade">
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell border-y border-white/10">
        <Container className="reveal flex flex-col gap-4 text-center" data-animate="fade">
          <h2 className="heading-accent text-2xl font-semibold">Hear from our users</h2>
          <p className="text-secondary">
            Explore the latest community feedback and see why players love Nova Play.
          </p>
          <div className="flex justify-center">
            <Link href="/#reviews" className="button-outline">
              View App Reviews
            </Link>
          </div>
        </Container>
      </section>

      <Script id="ld-json-product" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Nova Play",
          brand: {
            "@type": "Organization",
            name: "Nova Code AB",
            url: "https://novacode.se",
            logo: "https://novacode.se/img/logo.svg",
            sameAs: [
              "https://novacode.se",
              "https://www.linkedin.com/company/nova-code-ab/",
            ],
          },
          description:
            "Nova Play is a mobile gaming and reward app for Android built by Nova Code AB in Sweden, delivering immersive gameplay and reliable cloud performance.",
          image: "https://novacode.se/img/hero.png",
          url: "https://novacode.se/products",
          category: "MobileApplication",
          operatingSystem: "Android",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "SEK",
            url: "https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en",
            availability: "https://schema.org/InStock",
          },
        })}
      </Script>
    </div>
  );
}
