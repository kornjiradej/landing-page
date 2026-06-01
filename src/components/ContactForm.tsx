"use client";

import { useState } from "react";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { services } from "@/data/services";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(body?.message ?? "ส่งข้อความไม่สำเร็จ");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        error instanceof Error ? error.message : "เกิดข้อผิดพลาด กรุณาลองใหม่",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-cream-200 bg-white p-10 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-light text-brand">
          <CheckIcon className="size-7" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-brand-dark">
          ส่งข้อความเรียบร้อยแล้ว
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          ขอบคุณที่ติดต่อเรือนรื่นรมย์ ทีมงานจะติดต่อกลับโดยเร็วที่สุด
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-cream"
        >
          ส่งข้อความใหม่
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-cream-200 bg-cream/40 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-cream-200 bg-white p-6 shadow-[0_18px_40px_-32px_rgba(19,74,59,0.5)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-dark">
            ชื่อ - นามสกุล <span className="text-gold-dark">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="กรอกชื่อของคุณ"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-dark">
            เบอร์โทรศัพท์ <span className="text-gold-dark">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="08X-XXX-XXXX"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-dark">
            อีเมล
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-brand-dark">
            บริการที่สนใจ
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              เลือกบริการ
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="other">อื่น ๆ / สอบถามเพิ่มเติม</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-dark">
            ข้อความ <span className="text-gold-dark">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="ระบุวันเวลาที่สะดวก หรือรายละเอียดที่ต้องการสอบถาม"
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "กำลังส่ง..." : "ส่งข้อความถึงเรา"}
        {status !== "submitting" ? <ArrowRightIcon className="size-5" /> : null}
      </button>
      <p className="mt-3 text-xs text-ink-soft">
        เราจะใช้ข้อมูลของคุณเพื่อติดต่อกลับเท่านั้น ตาม
        {" "}
        <a href="/terms#privacy" className="text-brand underline underline-offset-2">
          นโยบายความเป็นส่วนตัว
        </a>
      </p>
    </form>
  );
}
