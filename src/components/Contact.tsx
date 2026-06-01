import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, LineIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Contact() {
  const fullAddress = `${site.address.street} ${site.address.district} ${site.address.city} ${site.address.postalCode}`;

  return (
    <section id="contact" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="ติดต่อเรา"
          title="พร้อมดูแลคุณ ทักหาเราได้ทุกวัน"
          description="กรอกแบบฟอร์มเพื่อจองคิวหรือสอบถามข้อมูล แล้วเราจะติดต่อกลับโดยเร็วที่สุด"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-4 rounded-2xl border border-cream-200 bg-white p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <MapPinIcon className="size-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-brand-dark">ที่อยู่</p>
                  <p className="mt-1 text-sm text-ink-soft">{fullAddress}</p>
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-brand underline underline-offset-2"
                  >
                    ดูแผนที่บน Google Maps
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 rounded-2xl border border-cream-200 bg-white p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <PhoneIcon className="size-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-brand-dark">โทรศัพท์</p>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="mt-1 inline-block text-sm text-ink-soft hover:text-brand"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 rounded-2xl border border-cream-200 bg-white p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <MailIcon className="size-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-brand-dark">อีเมล & LINE</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-sm text-ink-soft hover:text-brand"
                  >
                    {site.email}
                  </a>
                  <a
                    href={site.socials.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-brand"
                  >
                    <LineIcon className="size-4 text-[#06C755]" />
                    LINE: {site.lineId}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 rounded-2xl border border-cream-200 bg-white p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <ClockIcon className="size-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-brand-dark">เวลาทำการ</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-ink-soft">
                    {site.openingHours.map((slot) => (
                      <li key={slot.days}>
                        {slot.days}: {slot.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
