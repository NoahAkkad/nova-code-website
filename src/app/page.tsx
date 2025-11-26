import { Container } from "@/components/Container";

const services = [
  {
    title: "Digital product engineering",
    description:
      "Web platforms and cloud apps tailored to your roadmap, built to scale without adding complexity.",
    icon: "🚀",
  },
  {
    title: "UX/UI design",
    description:
      "Modern interfaces with thoughtful details that deliver smooth journeys and consistent visuals across channels.",
    icon: "🎨",
  },
  {
    title: "System integration & automation",
    description:
      "Connect your existing tools and automate workflows to reduce cost, latency, and manual overhead.",
    icon: "🤖",
  },
  {
    title: "Analytics & performance",
    description:
      "Actionable dashboards and performance tuning to keep experiences fast, stable, and measurable.",
    icon: "📊",
  },
];

const projects = [
  {
    title: "Supply chain control tower",
    sector: "Logistics & shipping",
    result: "Cut delivery time by 32% through automation and predictive routing.",
  },
  {
    title: "Digital membership app",
    sector: "Retail & entertainment",
    result: "Improved retention 2.4× with personalized journeys and smart campaigns.",
  },
  {
    title: "SaaS revenue dashboard",
    sector: "B2B startups",
    result: "Unified data from 6 tools and surfaced instant alerts for hot opportunities.",
  },
];

const steps = [
  {
    title: "Focused discovery",
    text: "Clarify goals, constraints, and success metrics to build a practical roadmap.",
  },
  {
    title: "Fast, visible prototypes",
    text: "Interactive prototypes that align stakeholders before we write a single line of code.",
  },
  {
    title: "Iterative delivery",
    text: "Weekly sprints, continuous feedback, and shippable increments at every stage.",
  },
  {
    title: "Launch & ongoing support",
    text: "Performance monitoring, infrastructure readiness, and continuous improvements after release.",
  },
];

const stats = [
  { label: "Projects delivered", value: "+120" },
  { label: "Client satisfaction", value: "98%" },
  { label: "Countries served", value: "9" },
  { label: "Kickoff in", value: "10 days" },
];

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#c7d2fe,transparent_35%),radial-gradient(circle_at_80%_0%,#e0f2fe,transparent_30%),radial-gradient(circle_at_50%_80%,#ede9fe,transparent_30%)]" />
        <Container className="relative flex flex-col gap-10 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-100">
              Your all-in-one tech partner
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Ship reliable software fast and keep every release predictable.
            </h1>
            <p className="max-w-2xl text-lg text-gray-600">
              Nova Code blends engineering rigor with user-centered design to turn ideas into scalable digital products,
              backed by transparent communication and clear timelines.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Book a quick consult
              </a>
              <a
                href="#services"
                className="rounded-lg border border-indigo-200 bg-white px-6 py-3 text-indigo-700 transition hover:border-indigo-400 hover:text-indigo-800"
              >
                Explore services
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm shadow-indigo-100 backdrop-blur"
                >
                  <div className="text-3xl font-semibold text-indigo-700">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-2xl shadow-indigo-100 backdrop-blur">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
              <div className="space-y-4">
                <p className="text-sm font-semibold text-indigo-700">Live control panel</p>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Prototype quickly before we write a single line of code.
                </h3>
                <p className="text-gray-600">
                  We share interactive designs and journey maps early to de-risk decisions and ensure every development step
                  drives measurable value.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="rounded-xl bg-indigo-50 p-4">
                    <p className="font-semibold text-indigo-700">Customer journey</p>
                    <p className="mt-2 text-gray-600">Real scenarios, KPIs, and instant alerts for critical moments.</p>
                  </div>
                  <div className="rounded-xl bg-cyan-50 p-4">
                    <p className="font-semibold text-cyan-700">Infrastructure readiness</p>
                    <p className="mt-2 text-gray-600">Real-time deploy tracking, health monitoring, and auto-scaling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="py-16 lg:py-24">
        <Container className="space-y-12">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">What we do</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Practical services that remove the wait</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We plug into your team to launch quickly with a clear path from idea to production-ready software.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-white opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                  {service.icon}
                </div>
                <h3 className="relative mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="relative mt-2 text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="bg-white py-16 lg:py-24">
        <Container className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Selected work</p>
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Measurable outcomes for fast teams</h2>
              <p className="max-w-2xl text-gray-600">
                We build solutions measured by real impact: launch speed, customer happiness, and operational efficiency.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 px-4 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-500"
            >
              Discuss your next project
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-indigo-50/40 p-6 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
                  {project.sector}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{project.result}</p>
                <div className="mt-auto pt-6 text-sm font-semibold text-indigo-700">Delivered in 8 weeks</div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">How we work</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">A clear path from day one</h2>
            <p className="max-w-2xl text-gray-600">
              We start with small, deliberate steps, with weekly updates and transparent progress boards that keep your team confident.
            </p>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-base font-semibold text-indigo-700">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 p-8 text-white shadow-2xl">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Ongoing partnership</p>
              <h3 className="text-2xl font-semibold">We become your on-demand tech team</h3>
              <p className="text-sm text-white/80">
                Post-launch support, KPI monitoring, and regular experimentation to keep improving conversions and reliability.
              </p>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <span className="text-lg">📡</span>
                  <div>
                    <div className="font-semibold">Live alerts</div>
                    <p className="text-white/80">We track performance in real time and flag opportunities or incidents.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <span className="text-lg">🛠️</span>
                  <div>
                    <div className="font-semibold">Monthly improvements</div>
                    <p className="text-white/80">Maintenance and performance upgrades that match your growth curve.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <span className="text-lg">🤝</span>
                  <div>
                    <div className="font-semibold">Transparent communication</div>
                    <p className="text-white/80">Short syncs, concise reports, and open channels with the team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-white py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Get started</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Your first working session in 48 hours</h2>
            <p className="max-w-xl text-gray-600">
              Tell us about your idea or current product and we’ll send a plan with flexible engagement options within two business days.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-lg text-indigo-600">✓</span>
                <span>Clear timelines for every delivery milestone.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-lg text-indigo-600">✓</span>
                <span>Cross-functional team: engineering, design, and QA.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-lg text-indigo-600">✓</span>
                <span>Single communication hub to track decisions and tasks.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-inner">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input
                  type="text"
                  placeholder="Alex Johnson"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Work email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Project summary</label>
                <textarea
                  rows={4}
                  placeholder="What challenge or idea can we help you build?"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Submit request
              </button>
              <p className="text-xs text-gray-500">We’ll reply with a timeline and engagement options within two business days.</p>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
