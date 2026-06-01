import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(1, "กรุณากรอกชื่อ").max(120),
  phone: z.string().trim().min(6, "กรุณากรอกเบอร์โทรให้ถูกต้อง").max(30),
  email: z.string().trim().email("อีเมลไม่ถูกต้อง").max(160).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1, "กรุณากรอกข้อความ").max(2000),
});

function buildEmail(data: z.infer<typeof contactSchema>) {
  const lines = [
    `ชื่อ: ${data.name}`,
    `เบอร์โทร: ${data.phone}`,
    `อีเมล: ${data.email || "-"}`,
    `บริการที่สนใจ: ${data.service || "-"}`,
    "",
    "ข้อความ:",
    data.message,
  ];
  return lines.join("\n");
}

async function sendEmail(text: string): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

  // No SMTP configured: this is a mock/demo deployment.
  // Log the submission server-side so the form still works end-to-end.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.info("[contact] (mock) new submission:\n" + text);
    return;
  }

  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"${site.name} เว็บไซต์" <${SMTP_USER}>`,
    to: CONTACT_TO ?? site.email,
    subject: `ข้อความใหม่จากเว็บไซต์ ${site.name}`,
    text,
  });
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "รูปแบบข้อมูลไม่ถูกต้อง" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "ข้อมูลไม่ถูกต้อง";
    return NextResponse.json({ message }, { status: 422 });
  }

  try {
    await sendEmail(buildEmail(parsed.data));
  } catch (error) {
    console.error("[contact] failed to send email", error);
    return NextResponse.json(
      { message: "ส่งข้อความไม่สำเร็จ กรุณาลองใหม่หรือโทรหาเราโดยตรง" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
