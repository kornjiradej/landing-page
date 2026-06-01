import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceIconMap, CheckIcon } from "@/components/icons";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="บริการของเรา"
          title="ศาสตร์การนวดเพื่อสุขภาพที่ครบครัน"
          description="เลือกบริการที่เหมาะกับร่างกายของคุณ ทุกบริการดูแลโดยหมอนวดผู้เชี่ยวชาญด้วยเทคนิคเฉพาะตัว"
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <li
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-[0_18px_40px_-30px_rgba(19,74,59,0.55)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={65}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : null}
                  <span className="absolute left-4 top-4 inline-flex size-11 items-center justify-center rounded-2xl bg-cream/90 text-brand shadow-sm backdrop-blur">
                    <Icon className="size-6" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-brand-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-gold-dark" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
