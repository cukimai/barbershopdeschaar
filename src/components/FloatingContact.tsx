"use client";

import { useSyncExternalStore } from "react";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/data/site";

const SHOW_AFTER_PX = 480;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getSnapshot() {
  return window.scrollY > SHOW_AFTER_PX;
}

function getServerSnapshot() {
  return false;
}

/**
 * Zwevende bel- en WhatsApp-knop rechtsonder. Verschijnt zodra de hero (met dezelfde
 * knoppen) uit beeld is, zodat snel contact altijd binnen handbereik is.
 */
export function FloatingContact() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div
      className={`fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] sm:right-6 sm:bottom-6 print:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={`tel:${site.phone}`}
        tabIndex={visible ? 0 : -1}
        className="group flex h-13 items-center gap-0 rounded-full bg-ink text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-[background-color,transform] duration-200 hover:bg-ink-soft active:scale-[0.97]"
        aria-label={`Bel ${site.phoneDisplay}`}
      >
        <span className="max-w-0 overflow-hidden pl-0 text-sm font-semibold whitespace-nowrap opacity-0 transition-[max-width,opacity,padding] duration-300 group-hover:max-w-40 group-hover:pl-5 group-hover:opacity-100 group-focus-visible:max-w-40 group-focus-visible:pl-5 group-focus-visible:opacity-100">
          Bel {site.phoneDisplay}
        </span>
        <span className="flex size-13 items-center justify-center">
          <PhoneIcon className="size-5" />
        </span>
      </a>

      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="group flex h-14 items-center rounded-full bg-brand text-white shadow-[0_10px_30px_rgba(0,168,80,0.35)] transition-[background-color,transform] duration-200 hover:bg-brand-dark active:scale-[0.97]"
        aria-label="Stuur een WhatsApp-bericht"
      >
        <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap opacity-0 transition-[max-width,opacity,padding] duration-300 group-hover:max-w-40 group-hover:pl-5 group-hover:opacity-100 group-focus-visible:max-w-40 group-focus-visible:pl-5 group-focus-visible:opacity-100">
          WhatsApp ons
        </span>
        <span className="flex size-14 items-center justify-center">
          <WhatsAppIcon className="size-6" />
        </span>
      </a>
    </div>
  );
}
