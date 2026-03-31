import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, service, message, honeypot } =
    await request.json();

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !phone || !service || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // TODO: integrate Resend when API key is available
  return NextResponse.json({ ok: true });
}
