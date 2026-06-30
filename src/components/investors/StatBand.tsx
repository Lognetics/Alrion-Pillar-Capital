import { Reveal } from "@/components/ui/Reveal";

type Stat = { value: string; label: string; sub: string };

/** Credentials / assurance band of static (non-counted) stats. */
export function StatBand({
  stats,
  light = true,
}: {
  stats: Stat[];
  light?: boolean;
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={(i % 4) * 0.06}
          className={light ? "bg-navy-950 p-8" : "bg-paper p-8"}
        >
          <div
            className={`font-serif text-4xl font-light ${
              light ? "text-gilt" : "text-navy-950"
            }`}
          >
            {s.value}
          </div>
          <div
            className={`mt-4 text-sm font-semibold ${
              light ? "text-paper" : "text-navy-950"
            }`}
          >
            {s.label}
          </div>
          <div
            className={`mt-1 text-xs leading-relaxed ${
              light ? "text-paper/55" : "text-slate-strong/70"
            }`}
          >
            {s.sub}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
