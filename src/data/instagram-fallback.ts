export type InstagramPost = {
  id: string;
  /** Pad binnen /public of absolute URL */
  image: string;
  permalink: string;
  caption: string;
  type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
};

/**
 * Fallback-posts van @barbershopdeschaar. Worden getoond zolang er geen
 * live feed is opgehaald met `npm run instagram` (zie README).
 */
export const fallbackPosts: InstagramPost[] = [
  {
    id: "DZDs6i6COSE",
    image: "/instagram/DZDs6i6COSE.jpg",
    permalink: "https://www.instagram.com/reel/DZDs6i6COSE/",
    caption: "POV: barbershops voor geen reden",
    type: "VIDEO",
  },
  {
    id: "DSpcbVZghBY",
    image: "/instagram/DSpcbVZghBY.jpg",
    permalink: "https://www.instagram.com/reel/DSpcbVZghBY/",
    caption: "Vier handen, één strakke fade",
    type: "VIDEO",
  },
  {
    id: "DShsWbTAiPZ",
    image: "/instagram/DShsWbTAiPZ.jpg",
    permalink: "https://www.instagram.com/reel/DShsWbTAiPZ/",
    caption: "Schaar over kam, krullen in model",
    type: "VIDEO",
  },
  {
    id: "DZC_BLSC4OK",
    image: "/instagram/DZC_BLSC4OK.jpg",
    permalink: "https://www.instagram.com/reel/DZC_BLSC4OK/",
    caption: "POV: die ene klant",
    type: "VIDEO",
  },
  {
    id: "DWRUNjGgumY",
    image: "/instagram/DWRUNjGgumY.jpg",
    permalink: "https://www.instagram.com/reel/DWRUNjGgumY/",
    caption: "Strakke lijnen, blije klant",
    type: "VIDEO",
  },
  {
    id: "DSclf0igoMV",
    image: "/instagram/DSclf0igoMV.jpg",
    permalink: "https://www.instagram.com/reel/DSclf0igoMV/",
    caption: "Barbers 0,001 seconden nadat ze open zijn",
    type: "VIDEO",
  },
  {
    id: "DYcS68FiyGZ",
    image: "/instagram/DYcS68FiyGZ.jpg",
    permalink: "https://www.instagram.com/reel/DYcS68FiyGZ/",
    caption: "Kom langs aan de Molenpoortstraat",
    type: "VIDEO",
  },
  {
    id: "DVdoqP_guz6",
    image: "/instagram/DVdoqP_guz6.jpg",
    permalink: "https://www.instagram.com/reel/DVdoqP_guz6/",
    caption: "POV: die ene klant die het al weet",
    type: "VIDEO",
  },
  {
    id: "DYW04BMC-MD",
    image: "/instagram/DYW04BMC-MD.jpg",
    permalink: "https://www.instagram.com/reel/DYW04BMC-MD/",
    caption: "Hoe snel kun jij een fade?",
    type: "VIDEO",
  },
  {
    id: "DSUwiNZAv99",
    image: "/instagram/DSUwiNZAv99.jpg",
    permalink: "https://www.instagram.com/reel/DSUwiNZAv99/",
    caption: "Welkom bij Barbershop De Schaar",
    type: "VIDEO",
  },
];
