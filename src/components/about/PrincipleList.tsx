import { Reveal } from "@/components/ui/Reveal";
import type { Principle } from "@/lib/about";

/** Manifesto-style numbered principle rows with oversized numerals. */
export function PrincipleList({ items }: { items: Principle[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((p, i) => (
        <Reveal
          key={p.no}
          delay={(i % 2) * 0.08}
          className="group grid items-start gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-12"
        >
          <div className="md:col-span-3">
            <span className="font-serif text-6xl font-light text-line transition-colors duration-500 group-hover:text-gold-500 md:text-7xl">
              {p.no}
            </span>
          </div>
          <h3 className="text-2xl font-light text-navy-950 md:col-span-4 md:text-3xl">
            <span className="font-serif">{p.title}</span>
          </h3>
          <p className="text-pretty leading-relaxed text-slate-strong/80 md:col-span-5">{p.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
