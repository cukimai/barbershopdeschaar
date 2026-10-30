import { AwardIcon, CalendarCheckIcon, ClockIcon } from "@/components/icons";
import { site } from "@/data/site";

const icons = [CalendarCheckIcon, ClockIcon, AwardIcon];

export function Usps() {
  return (
    <section aria-label="Waarom Barbershop De Schaar" className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 md:gap-8 md:py-16">
        {site.usps.map((usp, index) => {
          const Icon = icons[index] ?? CalendarCheckIcon;
          return (
            <div key={usp.title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="size-5" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-ink">{usp.title}</h2>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{usp.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
