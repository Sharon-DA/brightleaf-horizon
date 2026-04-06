import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  address?: string;
  preferredTime?: string;
  customDateTime?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatValue(value?: string) {
  const trimmedValue = value?.trim();
  return trimmedValue ? escapeHtml(trimmedValue) : "Not provided";
}

function buildEmailHtml(payload: Required<Pick<ContactPayload, "fullName" | "email" | "phone" | "companyName" | "address" | "preferredTime">> & {
  customDateTime?: string;
}) {
  const rows = [
    ["Full Name", payload.fullName],
    ["Email Address", payload.email],
    ["Phone Number", payload.phone],
    ["Company Name", payload.companyName],
    ["Address", payload.address],
    ["Preferred Time", payload.preferredTime],
    ["Custom Date & Time", payload.customDateTime || "Not provided"],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 12px 0; width: 180px; vertical-align: top; color: #475569; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${escapeHtml(label)}</td>
          <td style="padding: 12px 0; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${formatValue(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:720px;margin:0 auto;padding:32px 16px;">
        <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:24px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.08);">
          <div style="padding:32px;background:linear-gradient(135deg,#0f172a,#1e293b);color:#ffffff;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#fbbf24;font-weight:700;">BrightLeaf Horizon</p>
            <h1 style="margin:0;font-size:28px;line-height:1.2;">New Consultation Request</h1>
            <p style="margin:12px 0 0;font-size:15px;line-height:1.6;color:#cbd5e1;">A new consultation request was submitted from the website contact form.</p>
          </div>
          <div style="padding:32px;">
            <table role="presentation" style="width:100%;border-collapse:collapse;">
              <tbody>
                ${rows}
              </tbody>
            </table>
            <div style="margin-top:28px;padding:16px 18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;">
              <p style="margin:0;font-size:13px;line-height:1.6;color:#475569;">Reply to this customer at <a href="mailto:${escapeHtml(payload.email)}" style="color:#c2410c;text-decoration:none;font-weight:600;">${escapeHtml(payload.email)}</a> or call <strong>${formatValue(payload.phone)}</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { success: false, error: "RESEND_API_KEY is not configured." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const fullName = payload.fullName?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const companyName = payload.companyName?.trim();
  const address = payload.address?.trim();
  const preferredTime = payload.preferredTime?.trim();
  const customDateTime = payload.customDateTime?.trim();

  const missingFields = [
    !fullName && "fullName",
    !email && "email",
    !phone && "phone",
    !companyName && "companyName",
    !address && "address",
    !preferredTime && "preferredTime",
  ].filter(Boolean) as string[];

  if (missingFields.length > 0) {
    return NextResponse.json(
      { success: false, error: "Missing required form fields.", missingFields },
      { status: 400 }
    );
  }

  const validatedPayload = {
    fullName: fullName as string,
    email: email as string,
    phone: phone as string,
    companyName: companyName as string,
    address: address as string,
    preferredTime: preferredTime as string,
    customDateTime,
  };

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kolawoleadetola630@gmail.com",
      subject: "New Consultation Request",
      replyTo: validatedPayload.email,
      html: buildEmailHtml(validatedPayload),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id ?? null }, { status: 200 });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}