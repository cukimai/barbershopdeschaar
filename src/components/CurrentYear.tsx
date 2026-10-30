"use client";

import { useSyncExternalStore } from "react";

/** Jaartal dat bij de build is vastgelegd; dient als server-waarde en fallback zonder JavaScript. */
const BUILD_YEAR = new Date().getFullYear();

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return new Date().getFullYear();
}

function getServerSnapshot() {
  return BUILD_YEAR;
}

/**
 * Toont altijd het huidige jaar in de browser, ook als de site lang niet opnieuw is gebouwd.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <>{year}</>;
}
