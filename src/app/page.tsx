import Link from "next/link";
import { Container } from "@/components/Container";

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
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black/40" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0,_transparent_45%)]" />
        </div>
        <Container className="relative flex flex-col gap-10 py-24 lg:flex-row lg:items-center lg:py-32">
          <div className="space-y-6 lg:w-3/5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Nova Code AB · Sweden</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              We Build Smart Digital Products
            </h1>
            <p className="max-w-2xl text-lg text-secondary">
              Software Development | Mobile Apps | Digital Solutions
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="button-outline">
                Explore Our Work
              </Link>
              <Link href="/contact" className="inline-flex items-center text-secondary underline-offset-4 hover:text-white">
                Book a call
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="card-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Highlights</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-secondary">Founded</p>
                  <p className="text-xl font-semibold">2025</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">Location</p>
                  <p className="text-xl font-semibold">Sweden</p>
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
        <Container className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">About Preview</p>
            <h2 className="text-3xl font-semibold">Who we are</h2>
            <p className="max-w-3xl text-secondary">
              Nova Code AB is a Swedish software development company specializing in modern, scalable, and user-centered digital
              products. We build mobile apps, web applications, SaaS platforms, and custom software solutions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {servicePreview.map((service) => (
              <div key={service} className="card-surface p-5">
                <p className="text-lg font-semibold">{service}</p>
                <p className="mt-2 text-sm text-secondary">Sharp execution, transparent delivery, and products built for growth.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Featured Product</p>
            <h2 className="text-3xl font-semibold">Nova Play — Mobile Gaming Application</h2>
            <p className="text-secondary">
              Nova Play is our flagship mobile gaming platform designed to deliver fun, interactive, and reward-based experiences.
            </p>
            <ul className="space-y-3 text-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <span>Immersive, high-performance mobile experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <span>Reward mechanisms that keep players engaged.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <span>Built with scalable cloud-first infrastructure.</span>
              </li>
            </ul>
            <Link
              href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
              className="button-outline w-fit"
              target="_blank"
            >
              Download on Google Play
            </Link>
          </div>
          <div className="card-surface p-6">
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
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">App Reviews</p>
            <h2 className="text-3xl font-semibold">What Our Users Say</h2>
            <p className="text-secondary md:text-lg">
              Users around the world enjoy Nova Play for its fun experience, smooth performance, and rewarding system. Here are
              some of the latest reviews from our community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reviews.map((review) => (
              <div
                key={review.user}
                className="flex h-full flex-col gap-4 rounded-2xl border border-[#222222] bg-[#0d0d0d] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center gap-1 text-yellow-400" aria-label="5 star rating">
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
            >
              See More Reviews on Google Play
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
