export type HeroSlide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero-1.webp",
    alt: "ห้องนวดแผนโบราณบรรยากาศเรือนไทยที่เงียบสงบ",
    title: "ผ่อนคลายทุกความเมื่อยล้า ด้วยศาสตร์นวดไทยแท้",
    subtitle: "นวดแผนโบราณ & คลายเส้น โดยหมอนวดผู้เชี่ยวชาญที่ได้รับการรับรอง",
  },
  {
    src: "/images/hero-2.webp",
    alt: "ลูกประคบสมุนไพรไทยอุ่น ๆ พร้อมสมุนไพรสด",
    title: "ประคบสมุนไพรไทย คลายปวด ลดอักเสบ",
    subtitle: "สมุนไพรสดใหม่ทุกวัน กระตุ้นการไหลเวียนเลือดอย่างเป็นธรรมชาติ",
  },
  {
    src: "/images/hero-3.webp",
    alt: "บรรยากาศสปาผ่อนคลายพร้อมเทียนหอมและดอกไม้",
    title: "คืนสมดุลกายและใจ ในบรรยากาศแสนสงบ",
    subtitle: "พื้นที่แห่งการพักผ่อนที่ออกแบบเพื่อการผ่อนคลายอย่างแท้จริง",
  },
];

export const HERO_AUTOPLAY_MS = 6000;
