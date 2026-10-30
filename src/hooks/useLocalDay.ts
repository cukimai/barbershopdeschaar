"use client";

import { useSyncExternalStore } from "react";
import { getLocalNow } from "@/lib/hours";

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(timer);
}

function getSnapshot(): number {
  return getLocalNow().day;
}

function getServerSnapshot(): null {
  return null;
}

/**
 * Huidige weekdag (0 = zondag) in de tijdzone van de zaak.
 * Op de server (en tijdens hydratatie) `null`, daarna de echte dag — zonder hydratiefouten.
 */
export function useLocalDay(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
