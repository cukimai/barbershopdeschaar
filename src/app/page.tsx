import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hours } from "@/components/Hours";
import { InstagramSection } from "@/components/InstagramSection";
import { JsonLd } from "@/components/JsonLd";
import { Services } from "@/components/Services";
import { TikTokSection } from "@/components/TikTokSection";
import { Usps } from "@/components/Usps";
import { faq } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Direct naar inhoud
      </a>
      <Header />
      <main id="inhoud" className="flex-1">
        <Hero />
        <Usps />
        <Services />
        <About />
        <InstagramSection />
        <TikTokSection />
        <Hours />
        <Faq
          items={faq}
          text="Snel antwoord op de vragen die we het vaakst krijgen. Staat jouw vraag er niet bij? Bel of app ons gerust."
        />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
