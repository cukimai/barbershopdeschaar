import { HoursTable, type HoursRow } from "@/components/HoursTable";
import { OpenBadge } from "@/components/OpenBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { dayNames, site } from "@/data/site";

/** Weekvolgorde: maandag t/m zondag */
const weekOrder = [1, 2, 3, 4, 5, 6, 0];

export function Hours() {
  const rows: HoursRow[] = weekOrder.map((day) => {
    const hours = site.hours.find((h) => h.day === day);
    return {
      day,
      label: dayNames[day],
      times: hours ? `${hours.opens} – ${hours.closes}` : "Gesloten",
    };
  });

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
            <OpenBadge hours={site.hours} tone="light" />
          </div>
        </div>

        <HoursTable rows={rows} caption={`Openingstijden van ${site.name}`} />
      </div>
    </section>
  );
}
