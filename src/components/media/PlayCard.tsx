import type { Interview } from "@/lib/media";

/* — Styled play affordance ——————————————————————————————————— */
export function PlayGlyph({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 14"
      fill="currentColor"
      aria-hidden="true"
      className="translate-x-px"
    >
      <path d="M0 0.6c0-.5.55-.8.97-.53l10.2 6.4c.4.25.4.83 0 1.08l-10.2 6.4A.62.62 0 0 1 0 13.4V.6Z" />
    </svg>
  );
}

/* — Interview list card ——————————————————————————————————————— */
export function InterviewCard({ item }: { item: Interview }) {
  return (
    <article className="group flex h-full cursor-pointer flex-col rounded-sm border border-line bg-paper p-7 transition-colors hover:border-gold-500/60">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-gold-600">{item.topic}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy-900 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950">
          <PlayGlyph />
        </span>
      </div>
      <h3 className="mt-6 text-lg font-semibold leading-snug text-navy-950 transition-colors group-hover:text-gold-600">
        {item.title}
      </h3>
      <div className="mt-auto border-t border-line pt-5">
        <p className="text-sm font-semibold text-navy-900">{item.speaker}</p>
        <p className="text-sm text-slate-strong/70">{item.role}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-slate-strong/55">
          <span>{item.outlet}</span>
          <span className="h-1 w-1 rounded-full bg-gold-500" />
          <span>{item.duration}</span>
          <span className="h-1 w-1 rounded-full bg-gold-500" />
          <span>{item.date}</span>
        </div>
      </div>
    </article>
  );
}
