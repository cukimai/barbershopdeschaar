import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { PhoneIcon } from "@/components/icons";
import { site } from "@/data/site";

export function Services() {
  return (
    <section id="diensten" className="scroll-mt-20 bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Diensten & prijzen"
          title="Vakwerk voor haar en baard."
          text="Geen poespas. Gewoon een strakke knipbeurt of verzorgde baard door barbiers die hun vak verstaan. Eerlijke prijzen, zonder verrassingen."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((service, index) => (
            <li
              key={service.slug}
              className="group relative overflow-hidden rounded-3xl bg-ink text-white"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={service.image}
                  alt={`${service.title} bij ${site.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  loading={index < 2 ? "eager" : "lazy"}
                  className="object-cover opacity-80 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04] group-hover:opacity-90"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                  {service.price && (
                    <span className="shrink-0 text-lg font-semibold text-brand-light tabular-nums">
                      {service.price}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-white/75">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div id="prijzen" className="mt-16 grid scroll-mt-24 gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-line bg-white">
            <div className="flex items-center justify-between border-b border-line px-6 py-5 sm:px-8">
              <h3 className="text-lg font-semibold text-ink">Prijslijst</h3>
              <span className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                Incl. btw
              </span>
            </div>
            <dl>
              {site.priceList.map((item) => (
                <div
                  key={item.title}
                  className="flex items-baseline justify-between gap-6 border-b border-line px-6 py-4 last:border-b-0 sm:px-8"
                >
                  <div>
                    <dt className="text-[15px] font-medium text-ink">{item.title}</dt>
                    {item.detail && <dd className="mt-0.5 text-sm text-muted">{item.detail}</dd>}
                  </div>
                  <dd className="shrink-0 text-[15px] font-semibold text-ink tabular-nums">
                    {item.price}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-3xl bg-ink p-7 text-white sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-brand-light uppercase">
                Goed om te weten
              </p>
              <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/80">
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-light" aria-hidden="true" />
                  {site.priceNotes.surcharge}
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-light" aria-hidden="true" />
                  {site.priceNotes.products}
                </li>
              </ul>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-5 rounded-3xl border border-line bg-white p-7 sm:p-8">
              <div>
                <p className="text-lg font-semibold text-ink">Afspraak maken?</p>
                <p className="mt-1 text-[15px] text-muted">
                  Bel of app ons, of loop gewoon binnen. We helpen je graag verder.
                </p>
              </div>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-brand-dark active:scale-[0.98]"
              >
                <PhoneIcon className="size-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
