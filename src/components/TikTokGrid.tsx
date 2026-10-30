"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon, TikTokIcon } from "@/components/icons";
import type { TikTokVideo } from "@/lib/tiktok";

type Props = {
  videos: TikTokVideo[];
};

/**
 * Horizontale rij met TikTok-video's. De echte TikTok-speler wordt pas geladen
 * nadat de bezoeker op een video klikt (snel én privacyvriendelijk).
 */
export function TikTokGrid({ videos }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div
      className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
      role="list"
      aria-label="TikTok-video's van Barbershop De Schaar"
    >
      {videos.map((video) => {
        const active = activeId === video.id;
        return (
          <div
            key={video.id}
            role="listitem"
            className="relative aspect-[4/5] w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl bg-ink sm:w-[270px]"
          >
            {active ? (
              <iframe
                src={`https://www.tiktok.com/player/v1/${video.id}?autoplay=1&description=0&music_info=0&rel=0`}
                title={video.caption || "TikTok-video van Barbershop De Schaar"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setActiveId(video.id)}
                className="group absolute inset-0 block text-left"
                aria-label={`Speel TikTok-video af: ${video.caption || "video"}`}
              >
                <Image
                  src={video.image}
                  alt=""
                  fill
                  sizes="270px"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/20"
                  aria-hidden="true"
                />
                <span
                  className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm"
                  aria-hidden="true"
                >
                  <TikTokIcon className="size-4" />
                </span>
                <span
                  className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <PlayIcon className="ml-0.5 size-6" />
                </span>
                {video.caption && (
                  <span className="absolute inset-x-0 bottom-0 line-clamp-2 p-4 text-sm font-medium text-white/90">
                    {video.caption}
                  </span>
                )}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
