# เรือนรื่นรมย์ — Landing Page (นวดแผนโบราณ & คลายเส้น)

Landing page สาธิตสำหรับธุรกิจบริการ **นวดแผนโบราณ & คลายเส้น** เน้น performance, SEO
และรองรับการใช้งานบนมือถือ (mobile-first, responsive) อย่างเต็มรูปแบบ
ข้อมูลทั้งหมดเป็น **mock data** สำหรับการสาธิต

## Tech Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Zod** สำหรับ validate ฟอร์มฝั่ง server
- **Nodemailer** สำหรับส่งอีเมลจากฟอร์มติดต่อ (ทำงานแบบ mock เมื่อไม่ได้ตั้งค่า SMTP)

## โครงสร้างหน้าเว็บ

- **Header** — โลโก้ (ซ้าย) + เมนูกลาง (บริการ, อัตราค่าบริการ, เกี่ยวกับเรา,
  คำถามที่พบบ่อย, ข่าวสาร, ติดต่อเรา) + ปุ่มโทร/จองคิว, รองรับเมนูมือถือ
- **Content**
  - Hero banner แบบ image carousel เลื่อนรูปอัตโนมัติ (หยุดเมื่อ hover/focus, เคารพ `prefers-reduced-motion`)
  - บริการ, อัตราค่าบริการ, เกี่ยวกับเรา, คำถามที่พบบ่อย (FAQ), ข่าวสาร
  - ติดต่อเรา — ฟอร์มกรอกข้อมูลและส่งเข้าอีเมล (`/api/contact`)
- **Footer** — โลโก้ + ที่อยู่, โซเชียล (Facebook, YouTube, Instagram, LINE),
  อีเมล, เบอร์โทร, เวลาทำการ และลิงก์ข้อกำหนด & ความเป็นส่วนตัว

## ทำไมเลือก single-page + anchor scroll (SEO)

เมนูใช้การ **เลื่อน (smooth scroll) ไปยัง section** ในหน้าเดียว ไม่ใช่แยกหลายหน้า
เพราะเนื้อหาเป็นชุดข้อมูลของธุรกิจเดียว การรวมไว้ในหน้าเดียวช่วยให้:

- รวมสัญญาณ SEO (links, content) ไว้ที่ URL เดียว แทนที่จะกระจายจนเจือจาง
- ผู้ใช้เห็นข้อมูลครบในครั้งเดียว ลด bounce และเพิ่ม dwell time
- โหลดเร็ว ไม่มี navigation ระหว่างหน้า

เสริมความแข็งแรงด้าน SEO ด้วย: semantic HTML, heading ตามลำดับ, metadata + Open Graph,
`sitemap.xml`, และ **JSON-LD structured data** (`HealthAndBeautyBusiness` + `FAQPage`)
ส่วนเนื้อหาที่เป็นเอกสาร (ข้อกำหนด & ความเป็นส่วนตัว) แยกเป็นหน้า `/terms`

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

```bash
npm run build   # production build
npm run start   # run production server
npm run lint    # eslint
```

## ตั้งค่าอีเมล (ตัวเลือก)

ฟอร์มติดต่อจะทำงานได้ทันทีแบบ mock (log ข้อมูลฝั่ง server) หากไม่ได้ตั้งค่า SMTP
หากต้องการส่งอีเมลจริง ให้สร้างไฟล์ `.env.local`:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-password
CONTACT_TO=owner@example.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

> หมายเหตุ: ข้อมูลร้าน รูปภาพ ราคา ข่าวสาร และช่องทางติดต่อทั้งหมดเป็นตัวอย่างสำหรับการสาธิตเท่านั้น
