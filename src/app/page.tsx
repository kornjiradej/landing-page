import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { News } from "@/components/News";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Faq />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
