"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const emailPattern =
  /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const hasErrors = Object.values(errors).some(Boolean);

  const handleChange = (field: keyof typeof values) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Message cannot be empty.";
    }

    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/movovypk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      className="space-y-4"
      action="https://formspree.io/f/movovypk"
      method="POST"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="_subject" value="New message from Nova Code website" />
      <div>
        <label className="block text-sm font-semibold text-white" htmlFor="contact-name">
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
          placeholder="Your name"
          value={values.name}
          onChange={handleChange("name")}
          required
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name ? (
          <p id="contact-name-error" className="mt-2 text-sm text-[var(--accent-gold)]">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div>
        <label className="block text-sm font-semibold text-white" htmlFor="contact-email">
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
          placeholder="Your email"
          value={values.email}
          onChange={handleChange("email")}
          required
          autoComplete="email"
          inputMode="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          pattern={emailPattern.source}
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-2 text-sm text-[var(--accent-gold)]">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div>
        <label className="block text-sm font-semibold text-white" htmlFor="contact-subject">
          Subject
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
          placeholder="Project subject"
          value={values.subject}
          onChange={handleChange("subject")}
          required
          autoComplete="on"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
        />
        {errors.subject ? (
          <p id="contact-subject-error" className="mt-2 text-sm text-[var(--accent-gold)]">
            {errors.subject}
          </p>
        ) : null}
      </div>
      <div>
        <label className="block text-sm font-semibold text-white" htmlFor="contact-message">
          Message
        </label>
        <textarea
          rows={4}
          id="contact-message"
          name="message"
          className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
          placeholder="Tell us about your goals"
          value={values.message}
          onChange={handleChange("message")}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-2 text-sm text-[var(--accent-gold)]">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button type="submit" className="button-outline w-full justify-center">
        Submit
      </button>
      <div role="status" aria-live="polite" className="min-h-[1.5rem]">
        {status === "success" && (
          <p className="text-sm text-[var(--accent-gold)]">Thanks for reaching out! We will respond within two business days.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-[var(--accent-gold)]">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
