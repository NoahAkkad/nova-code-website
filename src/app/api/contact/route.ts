export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED_FIELDS = ["name", "email", "subject", "message"] as const;

const defaultRecipient = "info@novacode.se";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const missing = REQUIRED_FIELDS.filter((field) => !body?.[field]);
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = body as Record<string, string>;

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT) {
      console.error("SMTP host/port not configured");
      return NextResponse.json({ error: "Mail service not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASSWORD
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
          : undefined,
    });

    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER || defaultRecipient;

    await transporter.sendMail({
      from: fromAddress,
      to: process.env.CONTACT_TO_EMAIL || defaultRecipient,
      replyTo: email,
      subject: "New message from Nova Code website",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
