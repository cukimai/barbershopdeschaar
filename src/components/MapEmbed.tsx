"use client";

import { useState } from "react";
import { ArrowRightIcon, MapPinIcon } from "@/components/icons";

/**
 * Google Maps wordt pas geladen nadat de bezoeker erom vraagt. Dat scheelt ruim een
 * megabyte aan scripts bij het openen van de pagina en voorkomt cookies van Google
 * zonder dat de bezoeker daarvoor koos.
 */
type Props = {
  name: string;
  street: string;
  postalCode: string;
  city: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
};

export function MapEmbed({ name, street, postalCode, city, mapsUrl, mapsEmbedUrl }: Props) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={`Locatie van ${name} op Google Maps`}
        src={mapsEmbedUrl}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0 grayscale-[0.2] contrast-[1.02]"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[radial-gradient(circle,rgba(0,0,0,0.09)_1px,transparent_1px)] bg-[size:22px_22px] p-6 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-white text-brand shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <MapPinIcon className="size-6" />
      </span>
      <div>
        <p className="text-lg font-semibold text-ink">{street}</p>
        <p className="text-[15px] text-muted">
          {postalCode} {city} · naast station Doetinchem
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-ink-soft active:scale-[0.98]"
        >
          Kaart tonen
        </button>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-[border-color] duration-150 hover:border-ink/30"
        >
          Routebeschrijving
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
      <p className="max-w-xs text-xs leading-relaxed text-muted">
        De kaart komt van Google Maps en laadt pas na je klik.
      </p>
    </div>
  );
}
