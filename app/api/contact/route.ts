import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { STUDIO, SERVICES } from "@/lib/data";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Richiesta non valida" }, { status: 400 });
  }

  // Server-side validation
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { message: "Dati non validi", errors: result.error.flatten() },
      { status: 422 }
    );
  }

  const data = result.data;

  // Honeypot check
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const serviceName =
    SERVICES.find((s) => s.id === data.servizio)?.title ?? data.servizio;

  const emailHtml = `
<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8" /><title>Nuova richiesta di contatto</title></head>
<body style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
  <div style="background: #16243d; padding: 24px 32px;">
    <h1 style="color: #ffffff; font-size: 20px; margin: 0;">${STUDIO.name}</h1>
    <p style="color: #b98a3d; font-size: 12px; margin: 4px 0 0; text-transform: uppercase; letter-spacing: 0.08em;">Nuova richiesta di contatto</p>
  </div>
  <div style="padding: 32px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr style="border-bottom: 1px solid #e9e5db;">
        <td style="padding: 10px 0; font-size: 13px; color: #666; width: 140px;">Nome</td>
        <td style="padding: 10px 0; font-size: 15px; font-weight: 600;">${data.nome}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e9e5db;">
        <td style="padding: 10px 0; font-size: 13px; color: #666;">Email</td>
        <td style="padding: 10px 0; font-size: 15px;"><a href="mailto:${data.email}" style="color: #16243d;">${data.email}</a></td>
      </tr>
      ${data.telefono ? `
      <tr style="border-bottom: 1px solid #e9e5db;">
        <td style="padding: 10px 0; font-size: 13px; color: #666;">Telefono</td>
        <td style="padding: 10px 0; font-size: 15px;"><a href="tel:${data.telefono}" style="color: #16243d;">${data.telefono}</a></td>
      </tr>` : ""}
      <tr style="border-bottom: 1px solid #e9e5db;">
        <td style="padding: 10px 0; font-size: 13px; color: #666;">Servizio</td>
        <td style="padding: 10px 0; font-size: 15px;">${serviceName}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; font-size: 13px; color: #666; vertical-align: top;">Messaggio</td>
        <td style="padding: 10px 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.messaggio}</td>
      </tr>
    </table>
    <div style="margin-top: 32px; padding: 16px; background: #faf8f3; border-radius: 8px; font-size: 12px; color: #888;">
      Messaggio ricevuto dal form di contatto del sito ${STUDIO.siteUrl}
    </div>
  </div>
</body>
</html>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `${STUDIO.name} <noreply@${new URL(STUDIO.siteUrl).hostname}>`,
      to: STUDIO.emailNotify,
      replyTo: data.email,
      subject: `Nuova richiesta: ${serviceName} — ${data.nome}`,
      html: emailHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { message: "Errore nell'invio dell'email. Riprova più tardi." },
      { status: 500 }
    );
  }
}
