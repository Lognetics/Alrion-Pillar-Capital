import { Reveal } from "@/components/ui/Reveal";
import type { NeedSolution } from "@/lib/investors";

/** Two-column needs→solution treatment for the institutional page. */
export function NeedsSolutions({ items }: { items: NeedSolution[] }) {
  return (
    <div className="overflow-hidden rounded-sm border border-line">
      <div className="hidden grid-cols-2 bg-navy-950 text-paper md:grid">
        <div className="border-r border-white/10 px-8 py-5">
          <span className="eyebrow text-gold-400">What institutions require</span>
        </div>
        <div className="px-8 py-5">
          <span className="eyebrow text-gold-400">How Alrion responds</span>
        </div>
      </div>
      <div className="divide-y divide-line">
        {items.map((it, i) => (
          <Reveal
            key={it.need}
            delay={i * 0.06}
            className="grid gap-px bg-line md:grid-cols-2"
          >
            <div className="flex items-start gap-4 bg-cloud p-8">
              <span className="mt-0.5 font-serif text-xl text-gold-500">0{i + 1}</span>
              <p className="text-[0.97rem] font-medium leading-relaxed text-navy-950">
                {it.need}
              </p>
            </div>
            <div className="bg-paper p-8">
              <p className="text-[0.95rem] leading-relaxed text-slate-strong/85">
                {it.solution}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
