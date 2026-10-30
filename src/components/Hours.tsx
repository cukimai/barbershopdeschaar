"use client";

import { OpenBadge } from "@/components/OpenBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { dayNames, site } from "@/data/site";
import { useLocalDay } from "@/hooks/useLocalDay";

/** Weekvolgorde: maandag t/m zondag */
const weekOrder = [1, 2, 3, 4, 5, 6, 0];

export function Hours() {
  const today = useLocalDay();

  return (
    <section id="openingstijden" className="scroll-mt-20 bg-paper-soft">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Openingstijden"
            title="Zeven dagen per week voor je klaar."
            text="Ook 's avonds en op zondag. Kom langs wanneer het jou uitkomt."
          />
          <div className="mt-8">
            <OpenBadge tone="light" />
          </div>
        </div>

        <table className="w-full self-start border-collapse overflow-hidden rounded-3xl border border-line bg-white text-left">
          <caption className="sr-only">Openingstijden van {site.name}</caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">Dag</th>
              <th scope="col">Tijden</th>
            </tr>
          </thead>
          <tbody>
            {weekOrder.map((day) => {
              const hours = site.hours.find((h) => h.day === day);
              const isToday = today === day;
              return (
                <tr
                  key={day}
                  className={`border-b border-line last:border-b-0 ${isToday ? "bg-brand/[0.06]" : ""}`}
                  aria-current={isToday ? "date" : undefined}
                >
                  <th
                    scope="row"
                    className={`px-6 py-4 text-[15px] font-medium sm:px-8 ${
                      isToday ? "text-brand-dark" : "text-ink"
                    }`}
                  >
                    {dayNames[day]}
                    {isToday && (
                      <span className="ml-2 rounded-full bg-brand px-2 py-0.5 text-[11px] font-semibold text-white">
                        vandaag
                      </span>
                    )}
                  </th>
                  <td
                    className={`px-6 py-4 text-right text-[15px] tabular-nums sm:px-8 ${
                      isToday ? "font-semibold text-brand-dark" : "text-muted"
                    }`}
                  >
                    {hours ? `${hours.opens} – ${hours.closes}` : "Gesloten"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
