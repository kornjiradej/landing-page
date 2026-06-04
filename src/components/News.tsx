import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { news, formatThaiDate } from "@/data/news";

export function News() {
  return (
    <section
      id="news"
      className="scroll-mt-24 bg-brand-light/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="ข่าวสาร & โปรโมชั่น"
          title="อัปเดตข่าวสารและสิทธิพิเศษ"
          description="ติดตามโปรโมชั่น บริการใหม่ และสาระสุขภาพดี ๆ จากเรือนรื่นรมย์"
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <li key={item.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-[0_18px_40px_-32px_rgba(19,74,59,0.5)] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    quality={65}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-brand-dark lg:backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time
                    dateTime={item.date}
                    className="text-xs font-medium text-gold-dark"
                  >
                    {formatThaiDate(item.date)}
                  </time>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors group-hover:text-gold-dark">
                    อ่านเพิ่มเติม
                    <ArrowRightIcon className="size-4" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
