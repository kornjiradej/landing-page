import Image from "next/image";
import type { HeroSlide } from "@/data/hero-slides";

type HeroLcpBackgroundProps = {
  slide: HeroSlide;
};

export function HeroLcpBackground({ slide }: HeroLcpBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        preload
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        sizes="(max-width: 768px) 100vw, 1280px"
        quality={65}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/45 to-brand-dark/30" />
    </div>
  );
}
