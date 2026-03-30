import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "luis.gutierrezgo@mail.udp.cl";

export async function POST(request: Request) {
  const { name, email, phone, service, projectType, message, honeypot } =
    await request.json();

  // Anti-spam
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Basic validation
  if (!name || !email || !phone || !service || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `New estimate request: ${service}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:8px;font-weight:bold;color:#555;">Name</td><td style="padding:8px;">${name}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;color:#555;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#555;">Phone</td><td style="padding:8px;">${phone}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;color:#555;">Service</td><td style="padding:8px;">${service}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#555;">Project Type</td><td style="padding:8px;">${projectType || "—"}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;color:#555;">Message</td><td style="padding:8px;white-space:pre-wrap;">${message}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
