import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

const mosaic = [
  {
    src: "/images/interieur.jpg",
    alt: "Het interieur van Barbershop De Schaar met ronde spiegels en barbierstoelen",
    className: "col-span-2 aspect-[4/3]",
    sizes: "(min-width: 1024px) 55vw, 100vw",
  },
  {
    src: "/images/werk-fade.jpg",
    alt: "Strakke fade, geknipt bij Barbershop De Schaar",
    className: "aspect-[4/5]",
    sizes: "(min-width: 1024px) 27vw, 50vw",
  },
  {
    src: "/images/werk-baard.jpg",
    alt: "Verzorgde baard en strakke contouren bij Barbershop De Schaar",
    className: "aspect-[4/5]",
    sizes: "(min-width: 1024px) 27vw, 50vw",
  },
];

export function About() {
  const facts = [
    { value: site.googleRating.value, label: "sterren op Google", suffix: "★" },
    { value: `${site.googleRating.count}+`, label: "Google-reviews" },
    { value: "7", label: "dagen per week open" },
  ];

  return (
    <section id="over-ons" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="grid grid-cols-2 gap-4">
          {mosaic.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-3xl bg-paper-soft ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.sizes}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div>
          <SectionHeading eyebrow="Over ons" title="Een barbershop zoals het hoort." />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Barbershop De Schaar zit aan de Molenpoortstraat, midden in het centrum van ’s-Heerenberg.
              Een plek waar je even gaat zitten, een goed gesprek hebt en opstaat met een kapsel dat klopt.
            </p>
            <p>
              Onze barbiers werken met oog voor detail: van de eerste schaarknip tot de laatste lijn met het
              mes. Klassieke technieken, moderne stijlen en producten waar we zelf achter staan.
            </p>
            <p>
              Honderden klanten uit ’s-Heerenberg, Montferland en net over de grens gingen je voor en
              beoordelen ons met bijna vijf sterren. {site.slogan}
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {fact.value}
                  {fact.suffix && (
                    <span className="ml-1 text-2xl text-brand" aria-hidden="true">
                      {fact.suffix}
                    </span>
                  )}
                </dd>
                <dd className="mt-1 text-sm text-muted" aria-hidden="true">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
