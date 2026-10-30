"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useSyncExternalStore } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from "@/components/icons";
import type { InstagramPost } from "@/data/instagram-fallback";

type Props = {
  posts: InstagramPost[];
};

const AUTOPLAY_DELAY_MS = 4000;

/** Leest de carrouselstatus (actieve dia, kan vooruit/achteruit) als één stabiele string. */
function useCarouselState(emblaApi: EmblaCarouselType | undefined) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", onChange).on("reInit", onChange);
      return () => {
        emblaApi.off("select", onChange).off("reInit", onChange);
      };
    },
    [emblaApi],
  );

  const getSnapshot = useCallback(() => {
    if (!emblaApi) return "0|0|0";
    return [
      emblaApi.selectedScrollSnap(),
      emblaApi.canScrollPrev() ? 1 : 0,
      emblaApi.canScrollNext() ? 1 : 0,
    ].join("|");
  }, [emblaApi]);

  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => "0|0|0");
  const [selected, prev, next] = snapshot.split("|").map(Number);

  return { selected, canPrev: prev === 1, canNext: next === 1 };
}

export function InstagramCarousel({ posts }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, dragFree: false },
    [Autoplay({ delay: AUTOPLAY_DELAY_MS, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const { selected, canPrev, canNext } = useCarouselState(emblaApi);

  useEffect(() => {
    // Respecteer "minder beweging": geen automatisch doorschuiven.
    if (!emblaApi) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      emblaApi.plugins().autoplay?.stop();
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (posts.length === 0) return null;

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Recente Instagram-berichten"
    >
      <div
        ref={emblaRef}
        className="embla mx-auto max-w-6xl px-5 sm:px-8"
        style={
          {
            "--slide-gap": "1rem",
            "--slide-size": "72%",
          } as React.CSSProperties
        }
      >
        <div className="embla__container sm:[--slide-size:42%] lg:[--slide-size:26%]">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="embla__slide"
              role="group"
              aria-roledescription="dia"
              aria-label={`${index + 1} van ${posts.length}`}
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-ink-soft"
              >
                <Image
                  src={post.image}
                  alt={post.caption || "Instagram-bericht van Barbershop De Schaar"}
                  fill
                  sizes="(min-width: 1024px) 26vw, (min-width: 640px) 42vw, 72vw"
                  loading="lazy"
                  draggable={false}
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                {post.type === "VIDEO" && (
                  <span
                    className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm"
                    aria-hidden="true"
                  >
                    <PlayIcon className="size-4" />
                  </span>
                )}
                {post.caption && (
                  <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-4 text-sm font-medium text-white/90">
                    {post.caption}
                  </p>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <div className="flex gap-1.5" aria-hidden="true">
          {posts.map((post, index) => (
            <span
              key={post.id}
              className={`h-1 rounded-full transition-[width,background-color] duration-300 ${
                index === selected ? "w-6 bg-brand-light" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Vorige berichten"
            className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-[background-color,border-color] duration-150 hover:border-white/40 hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Volgende berichten"
            className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-[background-color,border-color] duration-150 hover:border-white/40 hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
