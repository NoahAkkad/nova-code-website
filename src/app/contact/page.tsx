import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact Nova Code AB | Software & App Development in Sweden",
  description:
    "Contact Nova Code AB for software development, mobile app development, SaaS projects, and custom software solutions from our Göteborg office.",
  keywords: [
    "nova code ab",
    "software development",
    "mobile apps",
    "SaaS",
    "web development",
    "Göteborg tech company",
    "app development Sweden",
    "Mobile app development Göteborg",
    "Custom software solutions",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se/contact",
  },
  openGraph: {
    title: "Contact Nova Code AB | Software & App Development in Sweden",
    description:
      "Get in touch with Nova Code AB for mobile app development, SaaS engineering, and custom software projects from Göteborg, Sweden.",
    url: "https://novacode.se/contact",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Contact Nova Code AB in Göteborg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nova Code AB | Software & App Development in Sweden",
    description:
      "Reach out to Nova Code AB for app development, SaaS solutions, and custom software from our Göteborg-based team.",
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4 reveal" data-animate="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Contact</p>
          <h1 className="heading-accent text-4xl font-semibold">Get in touch</h1>
          <p className="max-w-3xl text-lg text-secondary">
            Tell us about your next product or feature. We reply to every message within two business days.
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="reveal grid gap-10 lg:grid-cols-2" data-animate="fade">
          <div className="space-y-4">
            <h2 className="heading-accent text-2xl font-semibold">Contact details</h2>
            <address className="space-y-3 text-secondary not-italic">
              <p className="text-white">Company Name: Nova Code AB</p>
              <p>Location: Gothenburg, Sweden</p>
              <p>Phone: <a href="tel:+46736156631" className="link-underline-gold" title="Call Nova Code AB">+46 736 156 631</a></p>
              <p>
                Email: <a href="mailto:info@novacode.se" className="link-underline-gold" title="Email Nova Code AB">info@novacode.se</a>
              </p>
            </address>
            <p className="text-secondary">
              Our Göteborg tech company helps businesses across Sweden with mobile app development, SaaS development, and custom
              software solutions tailored to their market.
            </p>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-name">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-email">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Project subject"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  rows={4}
                  id="contact-message"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Tell us about your goals"
                />
              </div>
              <button type="button" className="button-outline w-full justify-center">
                Submit
              </button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
