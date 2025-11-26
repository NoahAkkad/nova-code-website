import { Container } from "@/components/Container";

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
        <Container className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Services</p>
          <h1 className="text-4xl font-semibold">Services</h1>
          <p className="max-w-3xl text-lg text-secondary">
            End-to-end teams that design, build, and support modern digital products with clarity and speed.
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="card-surface p-5">
              <p className="text-lg font-semibold">{service}</p>
              <p className="mt-2 text-secondary">
                Tailored engagements with precise roadmaps, transparent communication, and measurable delivery.
              </p>
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
}
