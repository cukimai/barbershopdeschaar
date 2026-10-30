import { faq, serviceArea, site } from "@/data/site";
import { openingHoursSpecification } from "@/lib/hours";

/**
 * Gestructureerde data (schema.org) zodat Google de zaak toont als lokaal bedrijf
 * met openingstijden, adres, telefoonnummer en diensten.
 */
export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": ["BarberShop", "HairSalon"],
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    description: site.description,
    image: [
      `${site.url}/images/og.jpg`,
      `${site.url}/images/gevel.jpg`,
      `${site.url}/images/interieur.jpg`,
    ],
    logo: `${site.url}/icon-512.png`,
    telephone: site.phone,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Debit card",
    foundingDate: String(site.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsUrl,
    openingHoursSpecification: openingHoursSpecification(),
    sameAs: [site.instagram.url, site.facebookUrl],
    slogan: site.slogan,
    areaServed: [
      ...serviceArea.map((place) => ({ "@type": "City", name: place.name })),
      { "@type": "AdministrativeArea", name: "Montferland" },
      { "@type": "AdministrativeArea", name: "Achterhoek" },
    ],
    knowsLanguage: ["nl"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Diensten",
      itemListElement: site.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": `${site.url}/#business` },
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "nl-NL",
    publisher: { "@id": `${site.url}/#business` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
