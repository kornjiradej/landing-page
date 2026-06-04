"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/icons";
import { navItems, site } from "@/lib/site";

const sectionIds = navItems
  .filter((item) => item.href.includes("#"))
  .map((item) => item.href.split("#")[1]);

type HeaderClientProps = {
  logo: React.ReactNode;
};

function headerSurfaceClass(scrolled: boolean) {
  if (scrolled) {
    return "bg-cream/95 shadow-[0_6px_24px_-18px_rgba(19,74,59,0.6)] lg:bg-cream/90 lg:backdrop-blur";
  }

  return "bg-cream/90 lg:bg-cream/70 lg:backdrop-blur-sm";
}

export function HeaderClient({ logo }: HeaderClientProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let teardown: (() => void) | undefined;

    const setupObserver = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) setActive(visible.target.id);
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
      );

      sections.forEach((section) => observer.observe(section));
      teardown = () => observer.disconnect();
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(setupObserver, { timeout: 3000 });
      return () => {
        window.cancelIdleCallback(idleId);
        teardown?.();
      };
    }

    const timeoutId = setTimeout(setupObserver, 500);
    return () => {
      clearTimeout(timeoutId);
      teardown?.();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerSurfaceClass(scrolled)}`}
    >
      <nav
        aria-label="เมนูหลัก"
        className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        {logo}

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.split("#")[1] ?? "";
            const isActive = active === id;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-light text-brand-dark"
                      : "text-ink-soft hover:text-brand-dark"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            <PhoneIcon className="size-4" />
            จองคิว / โทร
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-full text-brand-dark transition-colors hover:bg-brand-light lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-cream-200 bg-cream/95 lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-brand-light hover:text-brand-dark"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={`tel:${site.phoneHref}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-base font-semibold text-cream"
            >
              <PhoneIcon className="size-5" />
              จองคิว / โทร {site.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
