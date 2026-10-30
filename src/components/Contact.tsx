import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Contact"
          title="Kom langs aan de Molenpoortstraat."
          text="Midden in het centrum van ’s-Heerenberg. Bel of app voor een afspraak, of loop gewoon binnen."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.4fr] lg:items-stretch">
          <div className="flex flex-col gap-5">
            <a
              href={`tel:${site.phone}`}
              className="group flex items-center justify-between rounded-3xl bg-brand p-7 text-white transition-[background-color] duration-150 hover:bg-brand-dark"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-white/15">
                  <PhoneIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-white/80">Bel ons</span>
                  <span className="block text-xl font-semibold tabular-nums">{site.phoneDisplay}</span>
                </span>
              </span>
              <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-line bg-paper-soft p-7 text-ink transition-[border-color,background-color] duration-150 hover:border-ink/20 hover:bg-white"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <WhatsAppIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted">WhatsApp</span>
                  <span className="block text-xl font-semibold">Stuur een berichtje</span>
                </span>
              </span>
              <ArrowRightIcon className="size-5 text-muted transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-line bg-paper-soft p-7 text-ink transition-[border-color,background-color] duration-150 hover:border-ink/20 hover:bg-white"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPinIcon className="size-5" />
                </span>
                <address className="not-italic">
                  <span className="block text-sm text-muted">Adres</span>
                  <span className="block text-xl font-semibold">{site.address.street}</span>
                  <span className="block text-[15px] text-muted">
                    {site.address.postalCode} {site.address.city}
                  </span>
                </address>
              </span>
              <ArrowRightIcon className="size-5 text-muted transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-paper-soft">
              <Image
                src="/images/gevel-breed.jpg"
                alt="De gevel van Barbershop De Schaar aan de Molenpoortstraat in 's-Heerenberg"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <p className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                Zo herken je ons
              </p>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-line bg-paper-soft lg:min-h-0">
            <iframe
              title={`Locatie van ${site.name} op Google Maps`}
              src={site.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.2] contrast-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
