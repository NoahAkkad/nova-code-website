import Link from "next/link";
import { Container } from "@/components/Container";

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
        <Container className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Products</p>
          <h1 className="text-4xl font-semibold">Nova Play — Mobile Gaming Application</h1>
          <p className="max-w-3xl text-lg text-secondary">
            Nova Play is our flagship mobile gaming platform designed to deliver fun, interactive, and reward-based experiences.
          </p>
          <Link
            href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
            className="button-outline w-fit"
            target="_blank"
          >
            Download on Google Play
          </Link>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="space-y-3 text-secondary">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technology</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {technologies.map((item) => (
                <div key={item} className="card-surface p-4">
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
