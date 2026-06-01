import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  LineIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
} from "@/components/icons";
import { navItems, site } from "@/lib/site";

const socialLinks = [
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.socials.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.socials.line, label: "LINE", Icon: LineIcon },
];

export function Footer() {
  const fullAddress = `${site.address.street} ${site.address.district} ${site.address.city} ${site.address.postalCode}`;

  return (
    <footer className="bg-brand-dark text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {site.shortDescription}
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-brand-dark"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="ลิงก์ด่วน" className="lg:col-span-1">
          <h2 className="font-display text-base font-bold text-cream">เมนูลัด</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/terms" className="transition-colors hover:text-gold">
                ข้อกำหนด & ความเป็นส่วนตัว
              </Link>
            </li>
          </ul>
        </nav>

        <address className="not-italic lg:col-span-1">
          <h2 className="font-display text-base font-bold text-cream">ติดต่อเรา</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPinIcon className="size-5 shrink-0 text-gold" />
              <span>{fullAddress}</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="size-5 shrink-0 text-gold" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="size-5 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </address>

        <div className="lg:col-span-1">
          <h2 className="font-display text-base font-bold text-cream">เวลาทำการ</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {site.openingHours.map((slot) => (
              <li key={slot.days} className="flex gap-3">
                <ClockIcon className="size-5 shrink-0 text-gold" />
                <span>
                  <span className="block text-cream">{slot.days}</span>
                  <span className="text-cream/70">{slot.time}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.fullName}. สงวนลิขสิทธิ์
          </p>
          <p>
            ออกแบบเพื่อการผ่อนคลายของคุณ · ข้อมูลทั้งหมดเป็นตัวอย่างสำหรับการสาธิต
          </p>
        </div>
      </div>
    </footer>
  );
}
