import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OpenBadge } from "@/components/OpenBadge";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import type { LandingPageContent } from "@/data/pages";
import { serviceArea, site } from "@/data/site";

type Props = {
  page: LandingPageContent;
};

export function LandingPage({ page }: Props) {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: page.navLabel, item: `${site.url}/${page.slug}/` },
    ],
  };

  const faqSchema = page.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Direct naar inhoud
      </a>
      <Header />

      <main id="inhoud" className="flex-1">
        <section className="bg-paper-soft">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div>
              <nav aria-label="Kruimelpad" className="text-sm text-muted">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="transition-colors hover:text-ink">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-ink">
                    {page.navLabel}
                  </li>
                </ol>
              </nav>

              <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-brand uppercase">{page.eyebrow}</p>
              <h1 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-balance text-ink sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{page.intro}</p>

              <div className="mt-8">
                <OpenBadge tone="light" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/15 bg-white px-7 py-4 text-base font-semibold text-ink transition-[border-color,background-color] duration-150 hover:border-ink/30"
                >
                  <WhatsAppIcon className="size-5" />
                  Stuur een WhatsApp
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink lg:aspect-[4/5]">
              <Image
                src={page.image}
                alt={page.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto grid max-w-3xl gap-14">
              {page.sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 rounded-2xl border border-line bg-paper-soft px-5 py-4 text-[15px] font-medium text-ink"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}

              {page.showServiceArea && (
                <section aria-labelledby="werkgebied">
                  <h2 id="werkgebied" className="text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">
                    Ons werkgebied
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    Klanten komen uit heel Montferland en net over de grens naar de Molenpoortstraat. Vanuit deze plaatsen sta je snel bij ons
                    in de stoel:
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceArea.map((place) => (
                      <li
                        key={place.name}
                        className="rounded-2xl border border-line bg-paper-soft px-5 py-4"
                      >
                        <p className="font-semibold text-ink">{place.name}</p>
                        <p className="text-sm text-muted">{place.note}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="flex flex-col gap-5 rounded-3xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-brand-light uppercase">
                    {site.address.street}, {site.address.city}
                  </p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">Kom langs of maak een afspraak.</p>
                  <p className="mt-1 text-white/70">Zeven dagen per week open. Met én zonder afspraak.</p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:items-end">
                  <a
                    href={`tel:${site.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                  >
                    <PhoneIcon className="size-4" />
                    {site.phoneDisplay}
                  </a>
                  <Link
                    href="/#diensten"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    Bekijk alle diensten en prijzen
                    <ArrowRightIcon className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {page.faq && page.faq.length > 0 && (
          <Faq items={page.faq} title="Veelgestelde vragen." compact id="faq" />
        )}
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
