export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    id: "promo-songkran",
    title: "โปรโมชั่นพิเศษต้อนรับเทศกาล ลด 20% ทุกคอร์ส",
    excerpt:
      "ฉลองเทศกาลแห่งความสุข เรือนรื่นรมย์มอบส่วนลด 20% สำหรับทุกคอร์สนวด เมื่อจองล่วงหน้าผ่าน LINE Official ตลอดทั้งเดือนนี้",
    date: "2026-05-20",
    category: "โปรโมชั่น",
    image: "/images/hero-3.webp",
  },
  {
    id: "new-aroma-menu",
    title: "เปิดตัวเมนูใหม่ นวดน้ำมันอโรมากลิ่นมะลิไทย",
    excerpt:
      "สัมผัสประสบการณ์ผ่อนคลายรูปแบบใหม่กับน้ำมันหอมระเหยกลิ่นมะลิไทยแท้ ช่วยให้รู้สึกสดชื่นและผ่อนคลายอย่างล้ำลึก",
    date: "2026-05-08",
    category: "บริการใหม่",
    image: "/images/service-oil.webp",
  },
  {
    id: "health-tips",
    title: "5 ท่ายืดเส้นง่าย ๆ คลายออฟฟิศซินโดรมด้วยตัวเอง",
    excerpt:
      "รวมเคล็ดลับการยืดเหยียดกล้ามเนื้อระหว่างวันสำหรับชาวออฟฟิศ ช่วยลดอาการปวดคอ บ่า ไหล่ ทำได้ง่ายที่โต๊ะทำงาน",
    date: "2026-04-22",
    category: "สาระสุขภาพ",
    image: "/images/hero-2.webp",
  },
];

const DATE_FORMATTER = new Intl.DateTimeFormat("th-TH", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatThaiDate(iso: string): string {
  return DATE_FORMATTER.format(new Date(iso));
}
