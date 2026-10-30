/**
 * Inhoud van de SEO-landingspagina's. Eén bron, één component (`LandingPage`).
 * Nieuwe pagina toevoegen = nieuw object hier; de sitemap en footer volgen automatisch.
 */

export type LandingSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LandingPageContent = {
  slug: string;
  /** Korte naam voor footer en kruimelpad */
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: LandingSection[];
  faq?: { question: string; answer: string }[];
  /** Toon de lijst met plaatsen uit het werkgebied */
  showServiceArea?: boolean;
};

export const landingPages: LandingPageContent[] = [
  {
    slug: "herenkapper-s-heerenberg",
    navLabel: "Herenkapper 's-Heerenberg",
    metaTitle: "Herenkapper 's-Heerenberg | Knippen vanaf € 23",
    metaDescription:
      "Op zoek naar een herenkapper in 's-Heerenberg? Barbershop De Schaar knipt heren en jongens met oog voor detail: van klassiek tot skin fade. Zonder afspraak welkom, 7 dagen per week.",
    eyebrow: "Herenkapper in 's-Heerenberg",
    h1: "Herenkapper in ’s-Heerenberg die je kapsel echt begrijpt.",
    intro:
      "Een goede herenkapper luistert eerst en knipt daarna. Bij Barbershop De Schaar aan de Molenpoortstraat nemen we de tijd voor je haar, je gezichtsvorm en je stijl. Het resultaat: een kapsel dat klopt, ook drie weken later nog.",
    image: "/images/service-knippen.jpg",
    imageAlt: "Strakke fade met ring light, geknipt door een herenkapper in 's-Heerenberg",
    sections: [
      {
        heading: "Wat je van ons mag verwachten",
        paragraphs: [
          "Knippen bij ons is altijd inclusief föhnen en stylen. We werken met schaar, tondeuse en mes, afhankelijk van wat jouw kapsel nodig heeft. Of je nu komt voor een klassieke scheiding, een moderne textured crop of een strakke skin fade: we bespreken vooraf kort wat je wilt en geven eerlijk advies over wat bij je past.",
          "Onze barbiers werken dagelijks aan tientallen verschillende haartypes. Dik, dun, krullend of steil, we weten hoe we het beste uit jouw haar halen en hoe je het thuis makkelijk in model houdt.",
        ],
      },
      {
        heading: "Herenkapper voor heel Montferland",
        paragraphs: [
          "We zitten midden in het centrum van 's-Heerenberg, aan de Molenpoortstraat 15. Gratis parkeren in de buurt, de fiets voor de deur. We zijn zeven dagen per week open, op vrijdag zelfs tot 20:00 uur.",
        ],
        bullets: [
          "Knippen, föhnen & stylen: € 23",
          "Kinderen tot 10 jaar: € 20",
          "Contouren bijwerken tussendoor: € 9",
          "Met én zonder afspraak welkom",
        ],
      },
      {
        heading: "Jongens en kinderen",
        paragraphs: [
          "Ook de jongste klanten zijn welkom. We knippen kinderen tot 10 jaar rustig en met geduld, zodat een bezoek aan de kapper leuk blijft. Ouders kunnen gewoon naast de stoel blijven.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe lang duurt een knipbeurt?",
        answer:
          "Reken op ongeveer 30 tot 45 minuten voor knippen, föhnen en stylen. Een combinatie met baard duurt wat langer.",
      },
      {
        question: "Moet ik een afspraak maken bij de herenkapper?",
        answer:
          "Nee, dat hoeft niet. Binnenlopen mag altijd. Wil je zeker zijn van een plek op een druk moment, bel of app dan even vooraf.",
      },
    ],
  },
  {
    slug: "barbier-baard-s-heerenberg",
    navLabel: "Barbier & baard",
    metaTitle: "Barbier 's-Heerenberg | Baard bijwerken & scheren",
    metaDescription:
      "Barbier in 's-Heerenberg voor baard bijwerken en scheren (€ 16), contouren en gezichtsbehandeling met stoom. Strakke lijnen en eerlijk advies bij Barbershop De Schaar.",
    eyebrow: "Barbier in 's-Heerenberg",
    h1: "Baard bijwerken en scheren zoals een barbier dat hoort te doen.",
    intro:
      "Een baard is pas af als de lijnen kloppen. Als barbier in 's-Heerenberg werken we je baard bij met tondeuse, schaar en mes, en sluiten we af met verzorgende producten. Van onderhoudsbeurt tot gladde scheerbeurt.",
    image: "/images/service-baard.jpg",
    imageAlt: "Verzorgde baard en strakke contouren bij een barbier in 's-Heerenberg",
    sections: [
      {
        heading: "Baard bijwerken",
        paragraphs: [
          "We brengen je baard op de juiste lengte, maken de contouren strak langs wangen en hals en werken de overgang naar je haar netjes af. Je krijgt advies over hoe je de vorm thuis bijhoudt en welke olie of balsem bij jouw baard past.",
        ],
        bullets: ["Baard bijwerken: € 16", "Baard scheren: € 16", "Contouren: € 9", "Harsen neus & oren: € 6"],
      },
      {
        heading: "Gezichtsbehandeling met stoom",
        paragraphs: [
          "Een dubbele gezichtsreiniging met maskers en stoom: poriën open, huid schoon, baard zacht. Ideaal als afsluiter van een knipbeurt of als moment voor jezelf. Dertig minuten rust, een frisse huid als resultaat.",
        ],
        bullets: ["Gezichtsbehandeling met stoom: € 25", "VIP-behandeling (alles in één): € 65"],
      },
      {
        heading: "Haar én baard in één bezoek",
        paragraphs: [
          "Combineer je knipbeurt met een baardbehandeling, dan zorgen we dat beide in balans zijn. Kies voor de VIP-behandeling (€ 65) en je krijgt knippen, föhnen, stylen, neus en oren harsen én een gezichtsbehandeling in één keer.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe vaak moet ik mijn baard laten bijwerken?",
        answer:
          "Voor een strakke lijn elke 2 tot 3 weken. Een volle baard kan vaak 4 weken mee, afhankelijk van hoe snel je haar groeit.",
      },
    ],
  },
  {
    slug: "kapper-zonder-afspraak-s-heerenberg",
    navLabel: "Zonder afspraak",
    metaTitle: "Kapper zonder afspraak in 's-Heerenberg | 7 dagen open",
    metaDescription:
      "Kapper zonder afspraak in 's-Heerenberg: loop binnen bij Barbershop De Schaar, Molenpoortstraat 15. 7 dagen per week open, vrijdag tot 20:00 uur.",
    eyebrow: "Zonder afspraak",
    h1: "Kapper zonder afspraak in ’s-Heerenberg. Loop gewoon binnen.",
    intro:
      "Geen zin om een week vooruit te plannen? Hoeft niet. Bij Barbershop De Schaar kun je zonder afspraak binnenlopen, zeven dagen per week. Is het druk, dan zie je direct hoe lang het ongeveer duurt. En wil je toch zekerheid, dan is een belletje of appje genoeg.",
    image: "/images/interieur.jpg",
    imageAlt: "Interieur van Barbershop De Schaar met ronde spiegels en wachtplek",
    sections: [
      {
        heading: "Zo werkt het",
        paragraphs: [
          "Kom binnen, meld je bij de balie en neem plaats. We werken op volgorde van binnenkomst, afgewisseld met gemaakte afspraken. Aan de grote tafel kun je rustig wachten; meestal ben je binnen een kwartier aan de beurt.",
        ],
        bullets: [
          "Maandag en zondag 13:00 – 18:00",
          "Dinsdag t/m donderdag 09:00 – 18:00",
          "Vrijdag 09:00 – 20:00",
          "Zaterdag 09:00 – 18:00",
        ],
      },
      {
        heading: "Rustige momenten",
        paragraphs: [
          "Wil je snel geholpen worden? Doordeweeks in de ochtend en vroege middag is het meestal het rustigst. Vrijdagmiddag en zaterdag zijn onze drukste momenten; bel dan even vooraf via 06 19 31 31 67 of stuur een WhatsApp.",
        ],
      },
      {
        heading: "Ook goed om te weten",
        paragraphs: [
          "We knippen het liefst haar zonder gel of wax; zit er product in, dan wassen we het eerst (€ 5). Pinnen en contant betalen kan allebei.",
        ],
      },
    ],
  },
  {
    slug: "barbershop-montferland-omgeving",
    navLabel: "Omgeving",
    metaTitle: "Barbershop in Montferland | 's-Heerenberg en omgeving",
    metaDescription:
      "Barbershop voor 's-Heerenberg en omgeving: Zeddam, Didam, Beek, Braamt, Kilder, Gendringen, Ulft en Emmerich. Midden in het centrum aan de Molenpoortstraat 15.",
    eyebrow: "'s-Heerenberg en omgeving",
    h1: "Dé barbershop voor ’s-Heerenberg en heel Montferland.",
    intro:
      "Veel van onze klanten komen van buiten 's-Heerenberg: uit de dorpen van Montferland, uit de Liemers en uit Emmerich net over de grens. Logisch: we zitten centraal, vlak bij de A3/A12, en je parkeert gratis in de buurt. Binnen een kwartier rijden sta je bij ons in de stoel.",
    image: "/images/gevel-breed.jpg",
    imageAlt: "De gevel van Barbershop De Schaar aan de Molenpoortstraat in 's-Heerenberg",
    showServiceArea: true,
    sections: [
      {
        heading: "Goed bereikbaar vanuit de regio",
        paragraphs: [
          "Met de auto rijd je via de N316 of vanaf de A3 (Emmerich) zo het centrum van 's-Heerenberg in; parkeren is gratis in de omgeving van de Molenpoortstraat. Kom je op de fiets, dan zet je die voor de deur. Ook vanuit Duitsland ben je van harte welkom: wir sprechen auch Deutsch.",
        ],
      },
      {
        heading: "Waarom klanten uit de regio voor ons kiezen",
        paragraphs: [
          "Zeven dagen per week open, ook op zondag en vrijdagavond. Met én zonder afspraak. Eerlijke, vaste prijzen. En een team barbiers dat zijn vak verstaat, van klassieke knipbeurt tot gezichtsbehandeling met stoom. Op Google beoordelen honderden klanten ons met 4,9 van de 5 sterren.",
        ],
      },
    ],
  },
];

export function getLandingPage(slug: string): LandingPageContent | undefined {
  return landingPages.find((page) => page.slug === slug);
}
