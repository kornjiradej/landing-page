import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { LeafIcon, HandIcon, HeartPulseIcon, SparkleIcon } from "@/components/icons";

const stats = [
  { value: "12+", label: "ปีแห่งประสบการณ์" },
  { value: "20,000+", label: "ลูกค้าที่ไว้วางใจ" },
  { value: "800 ชม.", label: "หลักสูตรอบรมหมอนวด" },
  { value: "4.9/5", label: "คะแนนรีวิวเฉลี่ย" },
];

const values = [
  {
    icon: HandIcon,
    title: "หมอนวดผู้เชี่ยวชาญ",
    text: "ผ่านการรับรองจากกรมสนับสนุนบริการสุขภาพ",
  },
  {
    icon: LeafIcon,
    title: "สมุนไพรธรรมชาติ",
    text: "คัดสรรสมุนไพรไทยสดใหม่และน้ำมันสกัดบริสุทธิ์",
  },
  {
    icon: SparkleIcon,
    title: "สะอาด ปลอดภัย",
    text: "อุปกรณ์สะอาด ผ้าใหม่ทุกครั้ง ใส่ใจสุขอนามัย",
  },
  {
    icon: HeartPulseIcon,
    title: "ดูแลเฉพาะบุคคล",
    text: "ปรับเทคนิคการนวดตามอาการและความต้องการ",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/images/about.webp"
              alt="บรรยากาศภายในร้านเรือนรื่นรมย์ สไตล์เรือนไทยอบอุ่น"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={70}
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-brand px-6 py-4 text-cream shadow-soft sm:block">
            <p className="font-display text-2xl font-bold">เปิดบริการทุกวัน</p>
            <p className="text-sm text-cream/80">10:00 - 22:00 น.</p>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="เกี่ยวกับเรา"
            title="สืบสานศาสตร์นวดไทย ด้วยหัวใจของการดูแล"
            description="เรือนรื่นรมย์ก่อตั้งขึ้นจากความตั้งใจที่จะส่งต่อภูมิปัญญาการนวดแผนโบราณของไทย ผสานความเชี่ยวชาญกับบรรยากาศเรือนไทยที่อบอุ่น เพื่อให้ทุกการมาเยือนเป็นช่วงเวลาแห่งการพักผ่อนอย่างแท้จริง"
          />

          <div className="mt-8 grid grid-cols-2 gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-cream-200 bg-white p-4"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-brand-dark">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-6">
        <dl className="grid grid-cols-2 gap-4 rounded-3xl bg-brand px-6 py-8 text-center text-cream sm:grid-cols-4 sm:py-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-bold text-gold sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-cream/80">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
