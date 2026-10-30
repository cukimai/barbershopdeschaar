type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, tone = "light", align = "left" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-[-0.025em] text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
          {text}
        </p>
      )}
    </div>
  );
}
