"use client";

import type React from "react";
import { useState } from "react";
import { Container } from "@/components/Container";

const CONTACT_EMAIL = "info@novacode.se";

type SubmissionState = "idle" | "success" | "error";

export default function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      if (!data?.success) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormValues({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form submission error", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white">
      <section className="section-shell border-b border-white/10">
        <Container className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Contact</p>
          <h1 className="text-4xl font-semibold">Get in touch</h1>
          <p className="max-w-3xl text-lg text-secondary">
            Tell us about your next product or feature. We reply to every message within two business days.
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact details</h2>
            <div className="space-y-3 text-secondary">
              <p>Company Name: Nova Code AB</p>
              <p>Location: Sweden</p>
              <p>Phone: +46 736 156 631</p>
              <p>
                Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>
          </div>
          <div className="card-surface p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Your name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Your email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Project subject"
                  value={formValues.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                  placeholder="Tell us about your goals"
                  value={formValues.message}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-3">
                <button type="submit" className="button-outline w-full justify-center" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
                {status === "success" && (
                  <p className="text-sm text-green-400">Thank you! Your message has been sent.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
