import { Container } from "@/components/Container";

const services = [
  "Mobile App Development (Android & iOS)",
  "Web Applications & SaaS Platforms",
  "Custom Software Development",
  "UI/UX Design & Prototyping",
  "Full-Cycle Development & Maintenance",
  "Cloud-based Solutions",
  "Backend & API Development",
];

const technologyStack = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", ".NET / C#", "Python", "PHP"],
  },
  {
    title: "Mobile",
    items: ["Kotlin", "Java (Android)", "Swift (iOS)"],
  },
  {
    title: "Cloud & Hosting",
    items: ["AWS", "Azure", "DigitalOcean"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
];

const values = [
  "Innovation",
  "Quality",
  "Transparency",
  "User-Centered Design",
  "Scalability",
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-indigo-100/60">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#c7d2fe,transparent_35%),radial-gradient(circle_at_80%_0%,#e0f2fe,transparent_30%),radial-gradient(circle_at_50%_80%,#ede9fe,transparent_30%)]" />
        <Container className="relative grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-100">
              Nova Code AB · Sweden
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Company Profile
            </h1>
            <p className="max-w-3xl text-lg text-gray-700">
              Nova Code AB is a Swedish software development company specialized in building modern, scalable, and high-performance digital products. The team crafts mobile apps, web applications, SaaS platforms, and custom solutions that blend technology, creativity, and user-centered design.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-semibold text-indigo-700">Founded</p>
                <p className="text-lg font-semibold text-gray-900">2025</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-semibold text-indigo-700">Location</p>
                <p className="text-lg font-semibold text-gray-900">Sweden</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-semibold text-indigo-700">Company Size</p>
                <p className="text-lg font-semibold text-gray-900">2–10 employees</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-semibold text-indigo-700">Industry</p>
                <p className="text-lg font-semibold text-gray-900">Software Development</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <a
                href="https://www.novacode.se"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow transition hover:bg-indigo-700"
              >
                Visit Website
              </a>
              <span className="inline-flex items-center gap-2 rounded-lg border border-indigo-100 bg-white px-4 py-2 text-indigo-800 shadow-sm">
                Phone: +46 736 156 631
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-indigo-100 ring-1 ring-indigo-100">
              <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-indigo-100 blur-3xl" aria-hidden />
              <div className="space-y-4 text-gray-800">
                <h3 className="text-2xl font-semibold text-gray-900">What We Build</h3>
                <p>
                  Nova Code AB delivers end-to-end software products—from discovery and design to development and maintenance. Each engagement focuses on performance, security, and measurable business outcomes.
                </p>
                <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-600">•</span>
                    <span>Mobile and web applications tailored to modern user journeys.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-600">•</span>
                    <span>Cloud-native SaaS platforms with scalable architectures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-600">•</span>
                    <span>APIs, integrations, and automation that streamline operations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-indigo-600">•</span>
                    <span>Design systems and prototypes that keep experiences cohesive.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-white py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Mission & Vision</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-indigo-50/60 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Mission</p>
                <p className="mt-3 text-gray-700">
                  Create smart, efficient, and user-centered digital solutions that transform ideas into successful technologies and deliver real value to users and businesses.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Vision</p>
                <p className="mt-3 text-gray-700">
                  To become a leading Swedish software company recognized for high-quality, innovative, and scalable digital products used across global markets.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50 to-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Key Facts</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                <span>Founded: 2025</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                <span>Location: Sweden</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                <span>Industry: Software Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                <span>Company Size: 2–10 employees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                <span>Website: www.novacode.se</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                <span>Phone: +46 736 156 631</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Services</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Solutions Crafted for Growth</h2>
            <p className="mx-auto max-w-3xl text-gray-700">
              Nova Code AB delivers focused expertise across the full software lifecycle—from ideation to launch and continuous optimization.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="group relative h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-white opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-start gap-3">
                  <span className="mt-1 text-lg text-indigo-600">•</span>
                  <p className="text-lg font-semibold text-gray-900">{service}</p>
                </div>
                <p className="relative mt-3 text-sm text-gray-700">
                  Tailored deliverables, transparent communication, and measurable outcomes at every stage.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-white py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Technology Stack</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Modern, Reliable, and Scalable</h2>
            <p className="max-w-3xl text-gray-700">
              The team selects proven technologies that match each project’s performance, security, and maintainability requirements. The stack spans frontend, backend, mobile, cloud, and databases to deliver cohesive products.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {technologyStack.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-700">
                  {category.title}
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-16 text-white lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-200">Flagship Product</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Nova Play</h2>
            <p className="text-indigo-50">
              Nova Play is the main active product developed by Nova Code AB. It is a mobile gaming platform that provides interactive entertainment with real-value engagement features, blending smooth experiences with secure transactions.
            </p>
            <a
              href="https://play.google.com/store/search?q=nova+play+and+earn+real+money&c=apps&hl=en"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-indigo-800 shadow hover:bg-indigo-50"
            >
              Download on Google Play
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-white/10 p-8 shadow-2xl shadow-indigo-900/30 ring-1 ring-white/10 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">Engagement Highlights</p>
              <ul className="mt-4 space-y-3 text-indigo-50">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>Interactive mobile gaming experience focused on long-term player value.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>Real-value engagement features with transparent mechanics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>Secure integrations, scalable infrastructure, and continuous updates.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-white py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Company Values</p>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Principles That Guide Every Build</h2>
            <p className="text-gray-700">
              Nova Code AB operates with clarity and consistency—prioritizing innovation, reliability, and human-centered outcomes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-gray-900 shadow-sm"
              >
                <p className="text-lg font-semibold text-indigo-700">{value}</p>
                <p className="mt-2 text-sm text-gray-700">
                  A commitment to {value.toLowerCase()} is embedded into planning, delivery, and support.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-gray-50 py-16 lg:py-20">
        <Container className="space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Contact</p>
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Let’s Collaborate</h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            Nova Code AB is open to partnerships and custom development projects. Contact us to bring your digital product idea to life and build solutions that scale with your ambitions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-800">
            <a
              href="https://www.novacode.se"
              className="rounded-lg bg-indigo-600 px-5 py-3 text-white shadow transition hover:bg-indigo-700"
            >
              www.novacode.se
            </a>
            <span className="rounded-lg border border-indigo-100 bg-white px-5 py-3 shadow-sm">
              Phone: +46 736 156 631
            </span>
          </div>
        </Container>
      </section>
    </main>
  );
}
