import type { ServiceIconName } from "@/components/icons";

export type Service = {
  id: string;
  title: string;
  icon: ServiceIconName;
  description: string;
  image?: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    id: "thai-traditional",
    title: "นวดแผนโบราณ",
    icon: "hand",
    image: "/images/hero-1.jpg",
    description:
      "การกดจุดและยืดเส้นตามศาสตร์นวดไทยดั้งเดิม ช่วยปรับสมดุลพลังงานในร่างกาย ลดอาการปวดเมื่อยและเพิ่มความยืดหยุ่น",
    highlights: ["กดจุดตามแนวเส้นประธานสิบ", "ยืดเหยียดกล้ามเนื้อ", "ไม่ใช้น้ำมัน สวมชุดสบาย"],
  },
  {
    id: "relax-muscle",
    title: "นวดคลายเส้น เฉพาะจุด",
    icon: "heart",
    image: "/images/service-foot.jpg",
    description:
      "เน้นคลายกล้ามเนื้อที่ตึงเป็นพิเศษ เช่น คอ บ่า ไหล่ และหลัง เหมาะกับผู้ที่นั่งทำงานนานหรือออฟฟิศซินโดรม",
    highlights: ["แก้อาการคอ บ่า ไหล่", "บรรเทาออฟฟิศซินโดรม", "ปรับท่านวดตามอาการ"],
  },
  {
    id: "aroma-oil",
    title: "นวดน้ำมันอโรมา",
    icon: "sparkle",
    image: "/images/service-oil.jpg",
    description:
      "ผ่อนคลายล้ำลึกด้วยน้ำมันหอมระเหยสกัดธรรมชาติ ช่วยให้กล้ามเนื้อคลายตัวและจิตใจสงบ ลดความเครียดสะสม",
    highlights: ["น้ำมันสกัดธรรมชาติ", "กลิ่นให้เลือกหลากหลาย", "บำรุงผิวชุ่มชื้น"],
  },
  {
    id: "herbal-compress",
    title: "ประคบสมุนไพร",
    icon: "leaf",
    image: "/images/hero-2.jpg",
    description:
      "ใช้ลูกประคบสมุนไพรไทยอบอุ่น เช่น ไพล ตะไคร้ ขมิ้น ประคบตามจุด ช่วยลดการอักเสบและกระตุ้นการไหลเวียนเลือด",
    highlights: ["สมุนไพรสดทุกวัน", "ลดการอักเสบของกล้ามเนื้อ", "กระตุ้นการไหลเวียน"],
  },
  {
    id: "foot-massage",
    title: "นวดฝ่าเท้า สะท้อนเท้า",
    icon: "foot",
    image: "/images/service-foot.jpg",
    description:
      "กดจุดสะท้อนบนฝ่าเท้าที่เชื่อมโยงกับอวัยวะภายใน ช่วยผ่อนคลาย ลดอาการเมื่อยล้าจากการยืนหรือเดินทั้งวัน",
    highlights: ["กดจุดสะท้อนฝ่าเท้า", "บรรเทาอาการเท้าล้า", "ผ่อนคลายทั้งร่างกาย"],
  },
  {
    id: "head-shoulder",
    title: "นวดศีรษะ & บ่า",
    icon: "sparkle",
    image: "/images/hero-3.jpg",
    description:
      "นวดผ่อนคลายบริเวณศีรษะ คอ และบ่า ลดอาการปวดศีรษะจากความเครียด ช่วยให้นอนหลับสบายและสดชื่นขึ้น",
    highlights: ["ลดปวดศีรษะจากความเครียด", "ช่วยให้หลับสบาย", "ใช้เวลาไม่นาน"],
  },
];
