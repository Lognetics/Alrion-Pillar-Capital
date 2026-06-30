import { Reveal } from "@/components/ui/Reveal";

type Region = { region: string; hub: string; focus: string };

/** Map-style global reach list for the sovereign-wealth page. */
export function RegionList({ regions }: { regions: Region[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
      {regions.map((r, i) => (
        <Reveal
          key={r.region}
          delay={(i % 2) * 0.08}
          className="group relative bg-navy-950 p-9"
        >
          <div className="absolute right-8 top-8 font-mono text-xs tracking-[0.2em] text-gold-400/60">
            0{i + 1}
          </div>
          <div className="eyebrow text-gold-400">{r.region}</div>
          <h3 className="mt-4 font-serif text-2xl font-light text-paper">{r.hub}</h3>
          <p className="mt-3 text-sm leading-relaxed text-paper/65">{r.focus}</p>
          <div className="mt-6 h-px w-full bg-white/10">
            <div className="h-px w-0 bg-gold-500 transition-all duration-700 ease-out group-hover:w-full" />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
