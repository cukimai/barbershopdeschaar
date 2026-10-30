"use client";

import { useSyncExternalStore } from "react";
import { getOpenStatus, type OpenStatus } from "@/lib/hours";

type Props = {
  /** "dark" voor op donkere achtergrond (hero), "light" voor op wit */
  tone?: "dark" | "light";
};

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(timer);
}

function getSnapshot(): string {
  return JSON.stringify(getOpenStatus());
}

function getServerSnapshot(): null {
  return null;
}

/**
 * Toont live of de zaak nu open is. Op de server onbekend (geen "nu"), in de
 * browser direct na hydratatie berekend — zonder hydratiefouten.
 */
export function OpenBadge({ tone = "dark" }: Props) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const status: OpenStatus | null = snapshot ? (JSON.parse(snapshot) as OpenStatus) : null;

  const shell =
    tone === "dark"
      ? "border-white/15 bg-white/10 text-white backdrop-blur-sm"
      : "border-line bg-paper-soft text-ink";

  return (
    <span
      className={`inline-flex min-h-9 items-center gap-2.5 rounded-full border px-4 py-1.5 text-sm font-medium ${shell}`}
      aria-live="polite"
    >
      <span className="relative flex size-2.5" aria-hidden="true">
        {status?.open && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-light opacity-60" />
        )}
        <span
          className={`relative inline-flex size-2.5 rounded-full ${
            status === null ? "bg-current opacity-30" : status.open ? "bg-brand-light" : "bg-muted-light"
          }`}
        />
      </span>
      {status === null && <span className="opacity-70">Openingstijden</span>}
      {status?.open && <span>Nu geopend · sluit om {status.closesAt}</span>}
      {status && !status.open && (
        <span>
          Nu gesloten · opent {status.opensDayLabel} om {status.opensAt}
        </span>
      )}
    </span>
  );
}
