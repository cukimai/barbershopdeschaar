"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";
import { PhoneIcon } from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";

export function Header() {
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
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label={`${site.name} – home`}>
          <Image
            src="/images/logo-black.png"
            alt={site.name}
            width={166}
            height={70}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink-soft/80 transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SocialLinks size="sm" className="hidden md:flex" />
          <a
            href={`tel:${site.phone}`}
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-brand-dark active:scale-[0.98] sm:inline-flex"
          >
            <PhoneIcon className="size-4" />
            Bel of app
          </a>

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
      </div>

      <div
        id="mobiel-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-line bg-white`}
      >
        <nav aria-label="Mobiele navigatie" className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-lg font-medium text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3 pb-2">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-base font-semibold text-white"
            >
              <PhoneIcon className="size-4" />
              Bel {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3.5 text-base font-semibold text-ink"
            >
              Stuur een WhatsApp
            </a>
            <div className="mt-2 flex items-center justify-between border-t border-line pt-5">
              <span className="text-sm text-muted">Volg ons</span>
              <SocialLinks />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
