function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) {
    return explicit.startsWith("http") ? explicit : `https://${explicit}`;
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(
    /\/$/,
    "",
  );
  if (production) {
    return production.startsWith("http")
      ? production
      : `https://${production}`;
  }

  const vercel = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercel) {
    return `https://${vercel}`;
  }

  return "https://ruenruenrom.example.com";
}

export const SITE_URL = resolveSiteUrl();

export const site = {
  name: "เรือนรื่นรมย์",
  fullName: "เรือนรื่นรมย์ นวดแผนโบราณ & คลายเส้น",
  tagline: "นวดแผนโบราณ & คลายเส้น",
  shortDescription:
    "ผ่อนคลายกล้ามเนื้อและคืนสมดุลให้ร่างกาย ด้วยศาสตร์การนวดแผนโบราณแท้ดั้งเดิม โดยหมอนวดผู้เชี่ยวชาญที่ได้รับการรับรอง",
  description:
    "เรือนรื่นรมย์ ให้บริการนวดแผนโบราณ นวดคลายเส้น นวดน้ำมันอโรมา ประคบสมุนไพร และนวดฝ่าเท้า ในบรรยากาศเรือนไทยที่เงียบสงบ ดูแลโดยหมอนวดผู้เชี่ยวชาญที่ผ่านการอบรมหลักสูตรนวดไทยมากกว่า 800 ชั่วโมง",
  email: "contact@ruenruenrom.co.th",
  phoneDisplay: "08X-XXX-XXXX",
  phoneHref: "+6680000000",
  lineId: "@ruenruenrom",
  address: {
    street: "123 ซอยสุขใจ ถนนรื่นรมย์",
    district: "แขวงคลองตัน เขตวัฒนา",
    city: "กรุงเทพมหานคร",
    postalCode: "10110",
    country: "ประเทศไทย",
  },
  geo: { lat: 13.7308, lng: 100.5698 },
  mapUrl: "https://maps.google.com/?q=13.7308,100.5698",
  priceRange: "฿฿",
  openingHours: [
    { days: "จันทร์ - ศุกร์", time: "10:00 - 21:00 น." },
    { days: "เสาร์ - อาทิตย์ และวันหยุดนักขัตฤกษ์", time: "09:00 - 22:00 น." },
  ],
  socials: {
    facebook: "https://facebook.com/ruenruenrom",
    youtube: "https://youtube.com/@ruenruenrom",
    instagram: "https://instagram.com/ruenruenrom",
    twitter: "@ruenruenrom",
    line: "https://line.me/R/ti/p/@ruenruenrom",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** true = links to a different route, false = same-page section anchor */
  external?: boolean;
};

export const navItems: NavItem[] = [
  { label: "บริการ", href: "/#services" },
  { label: "อัตราค่าบริการ", href: "/#pricing" },
  { label: "เกี่ยวกับเรา", href: "/#about" },
  { label: "คำถามที่พบบ่อย", href: "/#faq" },
  { label: "ข่าวสาร", href: "/#news" },
  { label: "ติดต่อเรา", href: "/#contact" },
];
