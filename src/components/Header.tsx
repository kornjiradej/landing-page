import Link from "next/link";
import { HeaderClient } from "@/components/HeaderClient";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Header() {
  return (
    <HeaderClient
      logo={
        <Link href="/#top" aria-label={`${site.name} หน้าแรก`} className="shrink-0">
          <Logo />
        </Link>
      }
    />
  );
}
