import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDownIcon } from "@/components/icons";
import { faqs } from "@/data/faq";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="คำถามที่พบบ่อย"
          title="เรื่องที่ลูกค้าถามเราบ่อย ๆ"
          description="รวมคำตอบสำหรับข้อสงสัยก่อนเข้ารับบริการ หากมีคำถามเพิ่มเติมติดต่อเราได้ทุกช่องทาง"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-cream-200 bg-white px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-brand-dark sm:text-lg">
                {faq.question}
                <ChevronDownIcon className="size-5 shrink-0 text-gold-dark transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
