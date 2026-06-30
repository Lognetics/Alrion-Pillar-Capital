import { Reveal } from "@/components/ui/Reveal";
import { PortraitTile } from "./PortraitTile";
import type { Person } from "@/lib/about";

/** Grid of people cards with gradient/initial portrait tiles. */
export function BioGrid({
  items,
  columns = 4,
}: {
  items: Person[];
  columns?: 3 | 4;
}) {
  const cols = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`grid gap-8 ${cols}`}>
      {items.map((p, i) => (
        <Reveal key={p.name} delay={(i % columns) * 0.06} className="group">
          <PortraitTile initials={p.initials} className="transition-transform duration-500 group-hover:-translate-y-1" />
          <div className="mt-5">
            <p className="eyebrow text-gold-600">{p.focus}</p>
            <h3 className="mt-2 text-lg font-semibold text-navy-950">{p.name}</h3>
            <p className="mt-1 text-sm font-medium text-slate-strong">{p.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-strong/75">{p.bio}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
