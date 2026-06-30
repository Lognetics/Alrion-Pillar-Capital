import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { RISK_TYPES, DEFENSE_LINES, RISK_METRICS } from "@/lib/governance";

/* — Risk-type architecture grid ————————————————————————————— */
export function RiskTypeGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
      {RISK_TYPES.map((risk, i) => (
        <Reveal key={risk.name} delay={(i % 3) * 0.07} className="flex flex-col bg-paper p-8">
          <span className="eyebrow text-gold-600">{risk.scope}</span>
          <h3 className="mt-4 text-xl font-semibold text-navy-950">{risk.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{risk.body}</p>
          <ul className="mt-6 space-y-2 border-t border-line pt-5">
            {risk.controls.map((c) => (
              <li key={c} className="flex items-start gap-3 text-[0.8rem] text-slate-strong">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

/* — Three lines of defense ——————————————————————————————————— */
export function DefenseLines() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {DEFENSE_LINES.map((line, i) => (
        <Reveal
          key={line.no}
          delay={i * 0.1}
          className="relative flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-5xl font-light text-gold-400">{line.no}</span>
            <span className="eyebrow text-gold-400">{line.line}</span>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-paper">{line.owner}</h3>
          <p className="mt-3 text-sm leading-relaxed text-paper/65">{line.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* — Monitoring metrics band —————————————————————————————————— */
export function RiskMetrics() {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {RISK_METRICS.map((m, i) => (
        <Reveal key={m.label} delay={(i % 4) * 0.07} className="bg-paper p-8">
          <div className="font-serif text-4xl font-light text-navy-950">
            <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
          </div>
          <p className="mt-4 text-sm font-semibold text-navy-900">{m.label}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-strong/70">{m.sub}</p>
        </Reveal>
      ))}
    </div>
  );
}
