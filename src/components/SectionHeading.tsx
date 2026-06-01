export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <p className="eyebrow text-sm font-semibold uppercase text-gold-dark">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-brand-dark sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      ) : null}
      <span
        className={`mt-5 block h-1 w-16 rounded-full bg-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden
      />
    </div>
  );
}
