import type { Metadata } from "next";
import Link from "next/link";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="inhoud" className="flex flex-1 items-center bg-paper-soft">
        <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">Foutmelding 404</p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-ink sm:text-5xl">
            Deze pagina is net zo weg als een slechte coupe.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            De pagina bestaat niet (meer) of het adres klopt niet. Geen zorgen: alles wat je zoekt staat op de
            homepage, en voor een afspraak bel of app je ons gewoon.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              Naar de homepage
              <ArrowRightIcon className="size-5" />
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <PhoneIcon className="size-5" />
              Bel {site.phoneDisplay}
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
