import { Container } from "@/components/Container";

const values = ["Innovation", "Quality", "Scalability", "Transparency"];

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">About</p>
          <h1 className="text-4xl font-semibold">About Nova Code AB</h1>
          <p className="max-w-3xl text-lg text-secondary">
            Nova Code AB is a Swedish software development company focused on building high-performance digital products.
            Founded in 2025, our mission is to deliver innovative, user-focused solutions using modern technologies.
          </p>
          <p className="text-white">
            Location: Grevegårdsvägen 152, 421 61 Västra Frölunda, Göteborg, Sweden
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="text-secondary">
              To craft smart, scalable, and user-centered software that unlocks new growth for businesses and creates meaningful
              experiences for their customers.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="text-secondary">
              To be recognized as the premium Swedish software company known for modern engineering, precise design, and reliable
              delivery.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="space-y-6">
          <h3 className="text-2xl font-semibold">Values</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value} className="card-surface p-4 text-center">
                <p className="text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
