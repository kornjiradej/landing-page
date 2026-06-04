import { HeroCarousel } from "@/components/HeroCarousel";
import { HeroLcpBackground } from "@/components/HeroLcpBackground";
import { heroSlides } from "@/data/hero-slides";

export function Hero() {
  return (
    <HeroCarousel
      slides={heroSlides}
      lcpBackground={<HeroLcpBackground slide={heroSlides[0]} />}
    />
  );
}
