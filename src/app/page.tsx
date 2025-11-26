import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Nova Code AB | Software Development, Mobile Apps & SaaS in Sweden",
  description:
    "Discover Nova Code AB in Göteborg: software development experts crafting mobile apps, SaaS platforms, and custom digital solutions that help teams scale.",
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
    "Nova Play app",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se/",
  },
  openGraph: {
    title: "Nova Code AB | Software Development, Mobile Apps & SaaS",
    description:
      "Swedish product studio delivering custom software solutions, mobile app development, and SaaS engineering from Göteborg.",
    url: "https://novacode.se/",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Nova Code AB software development and mobile apps hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Code AB | Software Development, Mobile Apps & SaaS",
    description:
      "Nova Code AB crafts mobile apps, SaaS platforms, and custom software solutions for businesses across Sweden.",
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

const servicePreview = [
  "Mobile App Development",
  "Web Applications & SaaS",
  "Custom Software Solutions",
];

const reviews = [
  {
    text: "Amazing app! Smooth experience and really fun to use.",
    user: "– Sarah J.",
  },
  {
    text: "Nova Play is definitely one of the best reward apps I’ve tried. Highly recommended!",
    user: "– David M.",
  },
  {
    text: "Great design, easy to use, and the rewards actually work.",
    user: "– Lina R.",
  },
  {
    text: "I love the interface and the performance. Very enjoyable experience!",
    user: "– Alex P.",
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white">
      <section
        className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#060606] via-[#0a0a0a] to-[#111111]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_45%)]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0,_transparent_45%)]" />
        </div>
        <div className="absolute -left-10 top-16 h-64 w-64 rounded-full bg-[rgba(212,175,55,0.08)] blur-3xl" />
        <Container
          className="relative flex flex-col gap-10 py-24 lg:flex-row lg:items-center lg:py-32 reveal"
          data-animate="fade"
        >
          <div className="space-y-6 lg:w-3/5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Nova Code AB · Grevegårdsvägen 152, 421 61 Västra Frölunda, Göteborg, Sweden
            </p>
            <h1 className="heading-accent text-4xl font-semibold leading-tight sm:text-5xl">
              We Build Smart Digital Products
            </h1>
            <p className="max-w-2xl text-lg text-secondary">
              Software Development | Mobile Apps | Digital Solutions
            </p>
            <p className="max-w-3xl text-secondary">
              Software development Sweden specialists delivering mobile app development in Göteborg, SaaS platforms, and custom software
              solutions that keep your business performing fast.
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="button-outline" title="Explore Nova Code AB products">
                Explore Our Work
              </Link>
              <Link
                href="/contact"
                className="link-underline-gold inline-flex items-center text-secondary underline-offset-4 hover:text-white"
                title="Book a call with Nova Code AB"
              >
                Book a call
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="card-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Highlights</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-secondary">Founded</p>
                  <p className="text-xl font-semibold">2025</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">Location</p>
                  <p className="text-xl font-semibold">Grevegårdsvägen 152, 421 61 Västra Frölunda, Göteborg, Sweden</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">Focus</p>
                  <p className="text-xl font-semibold">Digital Products</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">Team</p>
                  <p className="text-xl font-semibold">Design & Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-8 reveal" data-animate="fade">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">About Preview</p>
            <h2 className="heading-accent text-3xl font-semibold">Who we are</h2>
            <p className="max-w-3xl text-secondary">
              Nova Code AB is a Swedish software development company specializing in modern, scalable, and user-centered digital
              products. We build mobile apps, web applications, SaaS platforms, and custom software solutions with teams based in
              Göteborg.
            </p>
            <p className="max-w-3xl text-secondary">
              Learn more about our story, team, and approach to mobile app development in Göteborg on the dedicated About page.
            </p>
            <Link href="/about" className="button-outline w-fit" title="Read more about Nova Code AB">
              About Nova Code AB
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {servicePreview.map((service) => (
              <div key={service} className="card-surface reveal p-5" data-animate="fade">
                <p className="text-lg font-semibold">{service}</p>
                <p className="mt-2 text-sm text-secondary">Sharp execution, transparent delivery, and products built for growth.</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="button-outline w-fit" title="View all Nova Code AB services">
            View all services
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-8 lg:grid-cols-2 lg:items-center" data-animate="fade">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Featured Product</p>
            <h2 className="heading-accent text-3xl font-semibold">Nova Play — Mobile Gaming Application</h2>
            <p className="text-secondary">
              Nova Play is our flagship mobile gaming platform designed to deliver fun, interactive, and reward-based experiences
              for Android users in Sweden and beyond.
            </p>
            <ul className="space-y-3 text-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                <span>Immersive, high-performance mobile experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                <span>Reward mechanisms that keep players engaged.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                <span>Built with scalable cloud-first infrastructure.</span>
              </li>
            </ul>
            <Link
              href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
              className="button-outline w-fit"
              target="_blank"
              rel="noreferrer"
              title="Download Nova Play Android game on Google Play"
            >
              Download on Google Play
            </Link>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Our promise</h3>
              <p className="mt-2 text-secondary">
                We design and engineer every Nova Code AB product to feel premium: minimalistic visuals, precise motion, and
                resilient technology layers that scale with your audience.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="reviews" className="section-shell">
        <Container className="space-y-10 reveal" data-animate="fade">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">App Reviews</p>
            <h2 className="heading-accent text-3xl font-semibold">What Our Users Say</h2>
            <p className="text-secondary md:text-lg">
              Users around the world enjoy Nova Play for its fun experience, smooth performance, and rewarding system. Here are
              some of the latest reviews from our community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reviews.map((review) => (
              <div
                key={review.user}
                className="card-surface reveal flex h-full flex-col gap-4 p-5"
                data-animate="fade"
              >
                <div className="flex items-center gap-1 text-[var(--accent-gold)]" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg leading-relaxed">{review.text}</p>
                <p className="text-sm text-secondary">{review.user}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
              className="button-outline"
              target="_blank"
              rel="noreferrer"
              title="See Nova Play reviews on Google Play"
            >
              See More Reviews on Google Play
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
