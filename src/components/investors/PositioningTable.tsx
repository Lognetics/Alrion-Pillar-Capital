import { Reveal } from "@/components/ui/Reveal";

type Row = { band: string; platform: string; risk: string; role: string };

/** Risk/return positioning rows for the pension-fund page. */
export function PositioningTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-hidden rounded-sm border border-line">
      <div className="hidden bg-cloud px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-mist-500 md:grid md:grid-cols-12 md:gap-6">
        <span className="md:col-span-4">Role in the liability-aware portfolio</span>
        <span className="md:col-span-3">Platform</span>
        <span className="md:col-span-2">Risk profile</span>
        <span className="md:col-span-3">Function</span>
      </div>
      <div className="divide-y divide-line">
        {rows.map((r, i) => (
          <Reveal
            key={r.band}
            delay={i * 0.07}
            className="grid gap-3 bg-paper px-8 py-7 md:grid-cols-12 md:items-center md:gap-6"
          >
            <div className="md:col-span-4">
              <span className="font-serif text-lg font-light text-navy-950">{r.band}</span>
            </div>
            <div className="md:col-span-3">
              <span className="text-sm font-semibold text-gold-600">{r.platform}</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-sm text-slate-strong/85">{r.risk}</span>
            </div>
            <div className="md:col-span-3">
              <span className="text-sm leading-relaxed text-slate-strong/75">{r.role}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
