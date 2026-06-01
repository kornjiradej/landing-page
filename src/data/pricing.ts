export type PricePlan = {
  id: string;
  name: string;
  durations: { time: string; price: number }[];
  note?: string;
  popular?: boolean;
};

export const pricing: PricePlan[] = [
  {
    id: "thai-traditional",
    name: "นวดแผนโบราณ",
    durations: [
      { time: "60 นาที", price: 350 },
      { time: "90 นาที", price: 500 },
      { time: "120 นาที", price: 650 },
    ],
  },
  {
    id: "relax-muscle",
    name: "นวดคลายเส้น เฉพาะจุด",
    popular: true,
    durations: [
      { time: "60 นาที", price: 400 },
      { time: "90 นาที", price: 580 },
      { time: "120 นาที", price: 750 },
    ],
    note: "ยอดนิยมสำหรับชาวออฟฟิศ",
  },
  {
    id: "aroma-oil",
    name: "นวดน้ำมันอโรมา",
    durations: [
      { time: "60 นาที", price: 550 },
      { time: "90 นาที", price: 750 },
      { time: "120 นาที", price: 950 },
    ],
  },
  {
    id: "herbal-compress",
    name: "ประคบสมุนไพร",
    durations: [
      { time: "60 นาที", price: 450 },
      { time: "90 นาที", price: 650 },
    ],
    note: "รวมค่าลูกประคบสมุนไพร",
  },
  {
    id: "foot-massage",
    name: "นวดฝ่าเท้า สะท้อนเท้า",
    durations: [
      { time: "45 นาที", price: 300 },
      { time: "60 นาที", price: 400 },
    ],
  },
  {
    id: "head-shoulder",
    name: "นวดศีรษะ & บ่า",
    durations: [
      { time: "30 นาที", price: 250 },
      { time: "60 นาที", price: 450 },
    ],
  },
];

export const pricingNotes = [
  "ราคารวมบริการน้ำสมุนไพรต้อนรับและผ้าเย็นแล้ว",
  "สมาชิกรับส่วนลด 10% ทุกบริการ และสะสมแต้มแลกของรางวัล",
  "รับชำระเงินสด โอนผ่านพร้อมเพย์ และบัตรเครดิตทุกธนาคาร",
];
