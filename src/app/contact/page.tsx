import { Container } from "@/components/Container";

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
            <div className="space-y-3 text-secondary">
              <p>Company Name: Nova Code AB</p>
              <p>Location: Grevegårdsvägen 152, 421 61 Västra Frölunda, Göteborg, Sweden</p>
              <p>Phone: +46 736 156 631</p>
              <p>Email: contact@novacode.se</p>
            </div>
          </div>
          <div className="card-surface reveal p-6" data-animate="fade">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white">Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Subject</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Project subject"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Message</label>
                <textarea
                  rows={4}
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
