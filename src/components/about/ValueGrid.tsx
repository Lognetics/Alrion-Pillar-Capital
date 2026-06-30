import { Reveal } from "@/components/ui/Reveal";
import type { Value } from "@/lib/about";

/** Grid of glyph tiles, one per core value. */
export function ValueGrid({ items }: { items: Value[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((v, i) => (
        <Reveal key={v.title} delay={(i % 3) * 0.07} className="group bg-paper p-8 md:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-navy-950 transition-transform duration-500 group-hover:-translate-y-1">
            <span className="font-serif text-2xl font-light text-gilt">{v.glyph}</span>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-navy-950">{v.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{v.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
