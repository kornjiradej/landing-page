import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "ข้อกำหนดการใช้บริการ & นโยบายความเป็นส่วนตัว",
  description:
    "ข้อกำหนดและเงื่อนไขการใช้บริการ รวมถึงนโยบายความเป็นส่วนตัวในการเก็บรวบรวมและใช้ข้อมูลส่วนบุคคลของเรือนรื่นรมย์",
  path: "/terms",
});

const terms = [
  {
    title: "การจองและการยกเลิก",
    body: "กรุณาจองคิวล่วงหน้าเพื่อความสะดวก หากต้องการยกเลิกหรือเลื่อนนัด กรุณาแจ้งล่วงหน้าอย่างน้อย 2 ชั่วโมง การไม่มาตามนัดโดยไม่แจ้งล่วงหน้าอาจมีผลต่อการจองในครั้งถัดไป",
  },
  {
    title: "การเข้ารับบริการ",
    body: "ผู้รับบริการควรแจ้งอาการบาดเจ็บ โรคประจำตัว หรือข้อจำกัดทางสุขภาพให้พนักงานทราบก่อนทุกครั้ง การนวดเพื่อสุขภาพไม่ใช่การรักษาทางการแพทย์ หากมีอาการรุนแรงควรปรึกษาแพทย์",
  },
  {
    title: "ค่าบริการและการชำระเงิน",
    body: "อัตราค่าบริการเป็นไปตามที่ประกาศไว้ ราคาอาจมีการเปลี่ยนแปลงโดยจะแจ้งให้ทราบล่วงหน้า รับชำระด้วยเงินสด การโอนผ่านพร้อมเพย์ และบัตรเครดิต",
  },
  {
    title: "ความรับผิดชอบ",
    body: "ทางร้านดูแลทรัพย์สินมีค่าของลูกค้าด้วยความระมัดระวัง แต่ไม่รับผิดชอบต่อการสูญหายของทรัพย์สินส่วนตัว กรุณาเก็บรักษาทรัพย์สินมีค่าด้วยตนเอง",
  },
];

const privacy = [
  {
    title: "ข้อมูลที่เราเก็บรวบรวม",
    body: "เราเก็บข้อมูลที่คุณให้ผ่านแบบฟอร์มติดต่อ ได้แก่ ชื่อ เบอร์โทรศัพท์ อีเมล และข้อความ เพื่อใช้ในการติดต่อกลับและให้บริการเท่านั้น",
  },
  {
    title: "วัตถุประสงค์ในการใช้ข้อมูล",
    body: "ข้อมูลของคุณจะถูกใช้เพื่อยืนยันการจอง ตอบข้อสอบถาม และแจ้งข่าวสารโปรโมชั่น (เฉพาะเมื่อคุณยินยอม) เราจะไม่ขายหรือเปิดเผยข้อมูลของคุณแก่บุคคลภายนอกโดยไม่ได้รับอนุญาต",
  },
  {
    title: "การเก็บรักษาและความปลอดภัย",
    body: "เราจัดเก็บข้อมูลอย่างปลอดภัยและเก็บไว้เท่าที่จำเป็นตามวัตถุประสงค์ คุณสามารถขอแก้ไขหรือลบข้อมูลส่วนบุคคลของคุณได้ตามสิทธิ์ในพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA)",
  },
  {
    title: "การติดต่อเรื่องข้อมูลส่วนบุคคล",
    body: `หากต้องการใช้สิทธิ์เกี่ยวกับข้อมูลส่วนบุคคล หรือมีข้อสงสัย กรุณาติดต่อเราที่ ${site.email}`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-cream pt-28 pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <nav aria-label="breadcrumb" className="text-sm text-ink-soft">
            <Link href="/" className="hover:text-brand">
              หน้าแรก
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-dark">ข้อกำหนด & ความเป็นส่วนตัว</span>
          </nav>

          <h1 className="mt-4 font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            ข้อกำหนดการใช้บริการ & นโยบายความเป็นส่วนตัว
          </h1>
          <p className="mt-3 text-ink-soft">
            อัปเดตล่าสุด: มิถุนายน 2569 · เอกสารนี้เป็นตัวอย่างสำหรับการสาธิต
          </p>

          <section id="terms" className="mt-12 scroll-mt-28">
            <h2 className="font-display text-2xl font-bold text-brand">
              ข้อกำหนดการใช้บริการ
            </h2>
            <div className="mt-6 space-y-6">
              {terms.map((item, index) => (
                <article key={item.title}>
                  <h3 className="font-display text-lg font-semibold text-brand-dark">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="privacy" className="mt-14 scroll-mt-28">
            <h2 className="font-display text-2xl font-bold text-brand">
              นโยบายความเป็นส่วนตัว
            </h2>
            <div className="mt-6 space-y-6">
              {privacy.map((item, index) => (
                <article key={item.title}>
                  <h3 className="font-display text-lg font-semibold text-brand-dark">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-dark"
            >
              ← กลับสู่หน้าแรก
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
