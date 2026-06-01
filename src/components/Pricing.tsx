import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { pricing, pricingNotes } from "@/data/pricing";

const priceFormatter = new Intl.NumberFormat("th-TH");

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-brand-light/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="อัตราค่าบริการ"
          title="ราคาที่จับต้องได้ คุ้มค่าทุกนาที"
          description="ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง เลือกระยะเวลาที่เหมาะกับคุณได้เลย"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl border bg-white p-7 transition-transform duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-gold shadow-[0_22px_50px_-28px_rgba(167,127,51,0.7)]"
                  : "border-cream-200 shadow-[0_18px_40px_-32px_rgba(19,74,59,0.5)]"
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-brand-dark">
                  ยอดนิยม
                </span>
              ) : null}
              <h3 className="font-display text-xl font-bold text-brand-dark">
                {plan.name}
              </h3>
              <ul className="mt-5 space-y-3">
                {plan.durations.map((duration) => (
                  <li
                    key={duration.time}
                    className="flex items-baseline justify-between border-b border-dashed border-cream-200 pb-2 last:border-0"
                  >
                    <span className="text-sm text-ink-soft">{duration.time}</span>
                    <span className="font-display text-lg font-bold text-brand">
                      ฿{priceFormatter.format(duration.price)}
                    </span>
                  </li>
                ))}
              </ul>
              {plan.note ? (
                <p className="mt-4 flex items-center gap-2 text-sm text-gold-dark">
                  <CheckIcon className="size-4" />
                  {plan.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl bg-white p-7 shadow-[0_18px_40px_-32px_rgba(19,74,59,0.5)] sm:grid-cols-[1fr_auto] sm:items-center">
          <ul className="space-y-2">
            {pricingNotes.map((note) => (
              <li key={note} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            จองคิวเลย
            <ArrowRightIcon className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
