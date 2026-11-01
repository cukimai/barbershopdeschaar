"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

type Props = {
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
};

/**
 * Horizontale rij op basis van native scroll-snap met vorige/volgende-knoppen.
 * De items zelf worden op de server gerenderd en als children meegegeven.
 */
export function ScrollRow({ label, children, tone = "dark" }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const max = list.scrollWidth - list.clientWidth;
    setEdges({ start: list.scrollLeft <= 4, end: list.scrollLeft >= max - 4 });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges, { passive: true });
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollBy = (direction: -1 | 1) => {
    const list = listRef.current;
    if (!list) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollBy({ left: direction * list.clientWidth * 0.8, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const button =
    tone === "dark"
      ? "border-white/20 text-white hover:border-white/40 hover:bg-white/10"
      : "border-line text-ink hover:border-ink/25 hover:bg-paper-soft";

  return (
    <div className="relative">
      <ul
        ref={listRef}
        onScroll={updateEdges}
        aria-label={label}
        className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
      >
        {children}
      </ul>

      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-end gap-2 px-5 sm:px-8">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={edges.start}
          aria-label="Vorige"
          className={`flex size-11 items-center justify-center rounded-full border transition-[background-color,border-color] duration-150 disabled:opacity-30 ${button}`}
        >
          <ChevronLeftIcon className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={edges.end}
          aria-label="Volgende"
          className={`flex size-11 items-center justify-center rounded-full border transition-[background-color,border-color] duration-150 disabled:opacity-30 ${button}`}
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
