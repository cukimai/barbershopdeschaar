import { SectionHeading } from "@/components/SectionHeading";

type Item = { question: string; answer: string };

type Props = {
  items: readonly Item[];
  eyebrow?: string;
  title?: string;
  text?: string;
  id?: string;
  compact?: boolean;
};

/**
 * Veelgestelde vragen als native <details>: toegankelijk, zonder JavaScript,
 * en de antwoorden staan volledig in de HTML voor Google.
 */
export function Faq({
  items,
  eyebrow = "Veelgestelde vragen",
  title = "Alles wat je wilt weten.",
  text,
  id = "veelgestelde-vragen",
  compact = false,
}: Props) {
  return (
    <section id={id} className={`scroll-mt-20 bg-white ${compact ? "" : ""}`}>
      <div
        className={`mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20 ${
          compact ? "py-16 sm:py-20" : "py-24 sm:py-32"
        }`}
      >
        <SectionHeading eyebrow={eyebrow} title={title} text={text} />

        <div className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.question} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-[background-color,transform] duration-200 group-open:rotate-45 group-open:bg-paper-soft"
                  aria-hidden="true"
                >
                  <span className="absolute h-3.5 w-0.5 rounded bg-current" />
                  <span className="absolute h-0.5 w-3.5 rounded bg-current" />
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-muted sm:pr-14">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
