"use client";

import { useLocalDay } from "@/hooks/useLocalDay";

export type HoursRow = { day: number; label: string; times: string };

type Props = {
  rows: HoursRow[];
  caption: string;
};

/** Openingstijden als tabel; de huidige dag wordt in de browser gemarkeerd. */
export function HoursTable({ rows, caption }: Props) {
  const today = useLocalDay();

  return (
    <table className="w-full self-start border-collapse overflow-hidden rounded-3xl border border-line bg-white text-left">
      <caption className="sr-only">{caption}</caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Dag</th>
          <th scope="col">Tijden</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const isToday = today === row.day;
          return (
            <tr
              key={row.day}
              className={`border-b border-line last:border-b-0 ${isToday ? "bg-brand/[0.06]" : ""}`}
              aria-current={isToday ? "date" : undefined}
            >
              <th
                scope="row"
                className={`px-6 py-4 text-[15px] font-medium sm:px-8 ${isToday ? "text-brand" : "text-ink"}`}
              >
                {row.label}
                {isToday && (
                  <span className="ml-2 rounded-full bg-brand px-2 py-0.5 text-[11px] font-semibold text-white">
                    vandaag
                  </span>
                )}
              </th>
              <td
                className={`px-6 py-4 text-right text-[15px] tabular-nums sm:px-8 ${
                  isToday ? "font-semibold text-brand" : "text-muted"
                }`}
              >
                {row.times}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
