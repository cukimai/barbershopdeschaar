"use client";

import { useEffect, useState, type ReactNode } from "react";

type Props = {
  /** Inhoud van de balk (logo, navigatie, knoppen); op de server gerenderd. */
  children: ReactNode;
  /** Inhoud van het uitklapmenu op mobiel; op de server gerenderd. */
  menu: ReactNode;
};

/**
 * Het interactieve deel van de header: schaduw bij scrollen en het mobiele menu.
 * De inhoud zelf komt als server-gerenderde children binnen, zodat er zo min
 * mogelijk JavaScript naar de bezoeker gaat.
 */
export function HeaderShell({ children, menu }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-line bg-white/85 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        {children}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobiel-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-soft md:hidden"
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1.5 left-0 h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobiel-menu"
        onClick={(event) => {
          // Menu sluiten zodra een link is gekozen.
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-line bg-white`}
      >
        {menu}
      </div>
    </header>
  );
}
