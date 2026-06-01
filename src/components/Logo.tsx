import { site } from "@/lib/site";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const wordColor = variant === "light" ? "text-cream" : "text-brand-dark";
  const subColor = variant === "light" ? "text-cream/70" : "text-ink-soft";

  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <circle cx="24" cy="24" r="23" className="fill-brand" />
        <path
          d="M24 12c-3.6 4.2-3.6 9 0 13.2 3.6-4.2 3.6-9 0-13.2z"
          className="fill-gold"
        />
        <path
          d="M16.5 18.5c-1 5.4 1.6 9.4 6.6 11.4-.3-5.6-2.7-9.3-6.6-11.4z"
          className="fill-cream"
        />
        <path
          d="M31.5 18.5c1 5.4-1.6 9.4-6.6 11.4.3-5.6 2.7-9.3 6.6-11.4z"
          className="fill-cream"
        />
        <path
          d="M16 33c2.4-2 5-3 8-3s5.6 1 8 3"
          stroke="currentColor"
          className="text-gold"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-tight ${wordColor}`}>
          {site.name}
        </span>
        <span className={`text-[0.62rem] font-medium tracking-[0.12em] ${subColor}`}>
          THAI MASSAGE & SPA
        </span>
      </span>
    </span>
  );
}
