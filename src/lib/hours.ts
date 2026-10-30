import { dayNamesShort, site, type OpeningHour } from "@/data/site";

const TIME_ZONE = "Europe/Amsterdam";

type LocalNow = { day: number; minutes: number };

function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

/** Huidige dag en tijd in de tijdzone van de zaak, onafhankelijk van de bezoeker. */
export function getLocalNow(date: Date = new Date()): LocalNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekdayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));

  return {
    day: weekdayIndex === -1 ? date.getDay() : weekdayIndex,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

export function hoursForDay(day: number): OpeningHour | undefined {
  return site.hours.find((h) => h.day === day);
}

export type OpenStatus =
  | { open: true; closesAt: string }
  | { open: false; opensAt: string; opensDayLabel: string };

/** Bepaalt of de zaak nu open is en wanneer het volgende moment van openen/sluiten is. */
export function getOpenStatus(date: Date = new Date()): OpenStatus {
  const now = getLocalNow(date);
  const today = hoursForDay(now.day);

  if (today && now.minutes >= toMinutes(today.opens) && now.minutes < toMinutes(today.closes)) {
    return { open: true, closesAt: today.closes };
  }

  if (today && now.minutes < toMinutes(today.opens)) {
    return { open: false, opensAt: today.opens, opensDayLabel: "vandaag" };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const day = (now.day + offset) % 7;
    const hours = hoursForDay(day);
    if (hours) {
      return {
        open: false,
        opensAt: hours.opens,
        opensDayLabel: offset === 1 ? "morgen" : dayNamesShort[day],
      };
    }
  }

  return { open: false, opensAt: "", opensDayLabel: "" };
}

/** Openingstijden in schema.org-formaat voor de gestructureerde data. */
export function openingHoursSpecification() {
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return site.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: dayOfWeek[h.day],
    opens: h.opens,
    closes: h.closes,
  }));
}
