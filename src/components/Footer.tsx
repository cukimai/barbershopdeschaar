import Image from "next/image";
import Link from "next/link";
import { CurrentYear } from "@/components/CurrentYear";
import { SocialLinks } from "@/components/SocialLinks";
import { landingPages } from "@/data/pages";
import { navigation, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
          <div className="max-w-sm">
            <Link href="/" aria-label={`${site.name} – home`}>
              <Image
                src="/images/logo-white.png"
                alt={site.name}
                width={166}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-5 text-[15px] leading-relaxed text-white/60">
              Barbershop en herenkapper in ’s-Heerenberg. Knippen, baard bijwerken en scheren, met én
              zonder afspraak.
            </p>
            <p className="mt-3 text-[15px] text-white/45 italic">{site.slogan}</p>
            <SocialLinks tone="dark" className="mt-6 gap-3" />
          </div>

          <nav aria-label="Voettekst navigatie">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Menu</p>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/80 transition-colors duration-150 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Meer informatie">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Meer</p>
            <ul className="mt-4 space-y-3">
              {landingPages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}/`}
                    className="text-[15px] text-white/80 transition-colors duration-150 hover:text-white"
                  >
                    {page.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy/"
                  className="text-[15px] text-white/80 transition-colors duration-150 hover:text-white"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Bezoek ons</p>
            <address className="mt-4 space-y-3 text-[15px] not-italic text-white/80">
              <p>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </p>
              <p>
                <a href={`tel:${site.phone}`} className="transition-colors hover:text-white">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Routebeschrijving
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. Alle rechten voorbehouden.{" "}
            <a href="/sitemap.xml" className="transition-colors hover:text-white/80">
              Sitemap
            </a>
          </p>
          <p>
            Merkpositionering door{" "}
            <a
              href="https://fusey.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 transition-colors hover:text-white"
            >
              fusey.nl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
