/**
 * Alle bedrijfsgegevens op één plek.
 * Pas hier teksten, tijden en diensten aan — de rest van de site volgt automatisch
 * (inclusief SEO-metadata en de gestructureerde data voor Google).
 */

export type OpeningHour = {
  /** 0 = zondag, 1 = maandag, ... 6 = zaterdag */
  day: number;
  opens: string;
  closes: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Laat leeg (undefined) om geen prijs te tonen. Bijvoorbeeld "€ 25". */
  price?: string;
  duration?: string;
};

const phoneE164 = "+31619313167";

/** Openingstijden volgens Google Bedrijfsprofiel en het bordje in de zaak (oktober 2026). */
const hours: OpeningHour[] = [
  { day: 1, opens: "13:00", closes: "18:00" },
  { day: 2, opens: "09:00", closes: "18:00" },
  { day: 3, opens: "09:00", closes: "18:00" },
  { day: 4, opens: "09:00", closes: "18:00" },
  { day: 5, opens: "09:00", closes: "20:00" },
  { day: 6, opens: "09:00", closes: "18:00" },
  { day: 0, opens: "13:00", closes: "18:00" },
];

const services: Service[] = [
  {
    slug: "knippen",
    title: "Knippen",
    description: "Knippen, föhnen en stylen. Van klassieke scheiding tot strakke skin fade, afgestemd op jouw stijl.",
    image: "/images/service-knippen.jpg",
    price: "€ 26",
  },
  {
    slug: "baard",
    title: "Baard bijwerken",
    description: "Strakke lijnen, de juiste lengte en een verzorgde afwerking. Of laat je baard volledig scheren.",
    image: "/images/service-baard.jpg",
    price: "€ 17",
  },
  {
    slug: "vip",
    title: "VIP-behandeling",
    description: "Knippen, baard, föhnen en stylen, neus en oren harsen én een gezichtsbehandeling. Alles in één keer goed.",
    image: "/images/service-vip.jpg",
    price: "€ 70",
  },
  {
    slug: "kinderen",
    title: "Kinderen tot 10 jaar",
    description: "Knippen, föhnen en stylen voor de jongste klanten. Rustig, geduldig en net zo strak.",
    image: "/images/service-kinderen.jpg",
    price: "€ 23",
  },
];

/** Volledige prijslijst, zoals in de zaak. */
export type PriceItem = { title: string; detail?: string; price: string };

const priceList: PriceItem[] = [
  { title: "Knippen", detail: "Knippen, föhnen & stylen", price: "€ 26" },
  { title: "Kinderen tot 10 jaar", detail: "Knippen, föhnen & stylen", price: "€ 23" },
  {
    title: "VIP-behandeling",
    detail: "Knippen, baard, föhnen, stylen, neus/oren harsen & gezichtsbehandeling",
    price: "€ 70",
  },
  { title: "Baard scheren", price: "€ 17" },
  { title: "Baard bijwerken", price: "€ 17" },
  { title: "Contouren", price: "€ 10" },
  { title: "Wassen", price: "€ 5" },
  { title: "Harsen neus & oren", price: "€ 6" },
  { title: "Haar enhancement", price: "€ 7" },
  { title: "Gezichtsbehandeling met stoom", detail: "Dubbele gezichtsreiniging met masker", price: "€ 25" },
];

const priceNotes = {
  surcharge: "Op zondag geldt een extra tarief van € 3.",
  products:
    "Wij knippen het haar graag zonder gel, wax of andere producten. Zitten er producten in het haar? Dan wassen we het eerst en rekenen we hiervoor extra kosten.",
};

export const site = {
  name: "Barbershop De Schaar",
  shortName: "Barbershop De Schaar",
  url: "https://barbershopdeschaar.nl",
  tagline: "Dé herenkapper van 's-Heerenberg",
  description:
    "Barbershop De Schaar is dé barbershop en herenkapper in 's-Heerenberg (Montferland). Knippen vanaf € 26, baard bijwerken en scheren. Met én zonder afspraak, 7 dagen per week open aan de Molenpoortstraat 15.",
  keywords: [
    "barbershop 's-Heerenberg",
    "herenkapper 's-Heerenberg",
    "kapper 's-Heerenberg",
    "barbier 's-Heerenberg",
    "kapper Montferland",
    "barbershop Montferland",
    "baard trimmen 's-Heerenberg",
    "kapper zonder afspraak 's-Heerenberg",
    "kinderkapper 's-Heerenberg",
    "barbershop Zeddam Didam Emmerich",
    "Barbershop De Schaar",
  ],
  locale: "nl_NL",
  foundingYear: 2019,
  slogan: "Knippen met én zonder afspraak.",

  phone: phoneE164,
  phoneDisplay: "06 19 31 31 67",
  whatsappUrl: `https://wa.me/${phoneE164.replace("+", "")}?text=${encodeURIComponent(
    "Hoi! Ik wil graag een afspraak maken bij Barbershop De Schaar.",
  )}`,

  address: {
    street: "Molenpoortstraat 15",
    postalCode: "7041 BE",
    city: "'s-Heerenberg",
    region: "Gelderland",
    country: "NL",
  },
  geo: { lat: 51.875871, lng: 6.245686 },
  mapsUrl: "https://maps.google.com/?cid=10658718290345089994",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Molenpoortstraat+15,+7041+BE+'s-Heerenberg&z=16&output=embed",

  instagram: {
    handle: "barbershopdeschaar",
    url: "https://www.instagram.com/barbershopdeschaar/",
  },
  tiktok: {
    handle: "barbershopdeschaar",
    url: "https://www.tiktok.com/@barbershopdeschaar",
  },
  facebookUrl: "https://www.facebook.com/p/Barbershop-De-Schaar-100060243735326/",

  /** Google-beoordeling (handmatig bijwerken; stand oktober 2026). */
  googleRating: {
    value: "4,9",
    count: 463,
    url: "https://maps.google.com/?cid=10658718290345089994",
  },

  hours,

  usps: [
    {
      title: "Met én zonder afspraak",
      text: "Loop gewoon binnen, of bel of app even vooraf. Zo past een knipbeurt altijd in je dag.",
    },
    {
      title: "7 dagen per week open",
      text: "Ook op zondag en maandagmiddag, op vrijdag tot 20:00 uur. Midden in het centrum van 's-Heerenberg.",
    },
    {
      title: "Honderden tevreden klanten",
      text: "4,9 van de 5 sterren op Google. Vakmanschap en aandacht bij elke knipbeurt, voor jong en oud.",
    },
  ],

  services,
  priceList,
  priceNotes,
};

export const dayNames = [
  "Zondag",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
] as const;

export const dayNamesShort = ["zo", "ma", "di", "wo", "do", "vr", "za"] as const;

export const navigation = [
  { href: "/#diensten", label: "Diensten" },
  { href: "/#over-ons", label: "Over ons" },
  { href: "/#openingstijden", label: "Openingstijden" },
  { href: "/#contact", label: "Contact" },
] as const;

/** Plaatsen in het werkgebied; gebruikt voor de omgevingspagina en de gestructureerde data. */
export const serviceArea = [
  { name: "'s-Heerenberg", note: "Onze thuisbasis, Molenpoortstraat 15" },
  { name: "Zeddam", note: "5 minuten rijden" },
  { name: "Lengel", note: "5 minuten rijden" },
  { name: "Stokkum", note: "5 minuten rijden" },
  { name: "Braamt", note: "10 minuten rijden" },
  { name: "Kilder", note: "10 minuten rijden" },
  { name: "Beek", note: "10 minuten rijden" },
  { name: "Azewijn", note: "10 minuten rijden" },
  { name: "Didam", note: "15 minuten rijden" },
  { name: "Gendringen", note: "15 minuten rijden" },
  { name: "Ulft", note: "15 minuten rijden" },
  { name: "Emmerich am Rhein", note: "15 minuten rijden" },
  { name: "Doetinchem", note: "20 minuten rijden" },
] as const;

export const faq = [
  {
    question: "Kan ik zonder afspraak langskomen?",
    answer:
      "Ja. Bij Barbershop De Schaar ben je met én zonder afspraak welkom. Wil je zeker zijn van je plek, bel of app dan even vooraf via 06 19 31 31 67.",
  },
  {
    question: "Wat kost knippen bij Barbershop De Schaar?",
    answer:
      "Knippen inclusief föhnen en stylen kost € 26. Kinderen tot 10 jaar betalen € 23. Baard bijwerken of scheren is € 17 en de VIP-behandeling € 70. Op zondag geldt een extra tarief van € 3.",
  },
  {
    question: "Waar zit de barbershop en kan ik parkeren?",
    answer:
      "We zitten aan de Molenpoortstraat 15, midden in het centrum van 's-Heerenberg. Parkeren kan gratis in de omgeving van het centrum; fietsen kun je voor de deur kwijt.",
  },
  {
    question: "Zijn jullie ook op zondag open?",
    answer:
      "Ja, we zijn zeven dagen per week open. Op zondag en maandag van 13:00 tot 18:00 uur, op vrijdag tot 20:00 uur.",
  },
  {
    question: "Knippen jullie ook kinderen?",
    answer:
      "Zeker. Kinderen tot 10 jaar knippen we voor € 23, rustig en met geduld. Ook voor een eerste knipbeurt ben je welkom.",
  },
  {
    question: "Moet mijn haar schoon zijn voor het knippen?",
    answer:
      "Het liefst knippen we haar zonder gel, wax of andere producten. Zit er product in je haar, dan wassen we het eerst (€ 5) zodat het resultaat strak wordt.",
  },
] as const;
