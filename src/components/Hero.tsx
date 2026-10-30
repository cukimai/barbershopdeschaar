import { OpenBadge } from "@/components/OpenBadge";
import { PhoneIcon, StarIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden bg-ink text-white">
      <picture className="absolute inset-0 -z-20">
        <source media="(max-width: 767px)" srcSet="/images/hero-mobile.jpg" />
        <img
          src="/images/hero.jpg"
          alt="De gevel van Barbershop De Schaar aan de Molenpoortstraat in 's-Heerenberg, met barber pole"
          width={1080}
          height={607}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/25"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pb-24">
        <div className="max-w-2xl">
          <div className="reveal">
            <OpenBadge />
          </div>

          <h1 className="reveal reveal-delay-1 mt-6 text-5xl font-bold tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
            Dé herenkapper van <span className="text-brand-light">’s-Heerenberg</span>.
          </h1>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Barbershop in het centrum van ’s-Heerenberg voor strak knippen, baard bijwerken en scheren.
            Met én zonder afspraak, zeven dagen per week aan de Molenpoortstraat.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-brand-dark active:scale-[0.98]"
            >
              <PhoneIcon className="size-5" />
              Bel {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-[background-color,border-color] duration-150 hover:border-white/40 hover:bg-white/10"
            >
              <WhatsAppIcon className="size-5" />
              Stuur een WhatsApp
            </a>
          </div>

          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            <a
              href={site.googleRating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <span className="flex text-brand-light" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-white">{site.googleRating.value}</strong> op
                Google · {site.googleRating.count}+ reviews
              </span>
            </a>
            <span className="hidden h-3 w-px bg-white/25 sm:block" aria-hidden="true" />
            <span>
              {site.address.street}, {site.address.city}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
