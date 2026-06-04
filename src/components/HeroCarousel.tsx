"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from "@/components/icons";
import { HERO_AUTOPLAY_MS, type HeroSlide } from "@/data/hero-slides";

type HeroCarouselProps = {
  slides: HeroSlide[];
  lcpBackground: React.ReactNode;
};

export function HeroCarousel({ slides, lcpBackground }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [extraSlidesReady, setExtraSlidesReady] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, [slides.length]);

  const stop = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  const start = useCallback(() => {
    stop();
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      HERO_AUTOPLAY_MS,
    );
  }, [slides.length, stop]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  useEffect(() => {
    const enableExtraSlides = () => setExtraSlidesReady(true);

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(enableExtraSlides, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = setTimeout(enableExtraSlides, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label="ภาพบรรยากาศการให้บริการ"
      className="relative h-[88svh] min-h-[34rem] w-full overflow-hidden"
      onMouseEnter={stop}
      onMouseLeave={start}
      onFocusCapture={stop}
      onBlurCapture={start}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          index === 0 ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={index !== 0}
      >
        {lcpBackground}
      </div>

      {extraSlidesReady
        ? slides.slice(1).map((slide, slideIndex) => {
            const i = slideIndex + 1;
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== index}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1280px"
                  quality={65}
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/45 to-brand-dark/30" />
              </div>
            );
          })
        : null}

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-sm font-semibold uppercase text-gold">
            เรือนรื่นรมย์ · นวดแผนโบราณ
          </p>
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={i === index ? "block" : "hidden"}
              aria-hidden={i !== index}
            >
              <h1 className="font-display text-4xl font-bold leading-tight text-cream drop-shadow-sm sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-cream/90 sm:text-xl">
                {slide.subtitle}
              </p>
            </div>
          ))}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-base font-semibold text-brand-dark shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-gold-dark hover:text-cream"
            >
              ดูบริการทั้งหมด
              <ArrowRightIcon className="size-5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/60 bg-cream/10 px-6 py-3.5 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-brand-dark"
            >
              จองคิว / ติดต่อเรา
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="ภาพก่อนหน้า"
          className="inline-flex size-10 items-center justify-center rounded-full bg-cream/20 text-cream backdrop-blur transition-colors hover:bg-cream hover:text-brand-dark"
        >
          <ChevronLeftIcon className="size-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="เลือกภาพ">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`ภาพที่ ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-gold" : "w-2 bg-cream/60 hover:bg-cream"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="ภาพถัดไป"
          className="inline-flex size-10 items-center justify-center rounded-full bg-cream/20 text-cream backdrop-blur transition-colors hover:bg-cream hover:text-brand-dark"
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>
    </section>
  );
}
