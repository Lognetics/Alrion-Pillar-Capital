import { Reveal } from "@/components/ui/Reveal";
import type { Award } from "@/lib/about";

/** Awards grouped by year, rendered as a recognition ledger. */
export function AwardsList({ items }: { items: Award[] }) {
  const years = Array.from(new Set(items.map((a) => a.year)));
  return (
    <div className="space-y-12">
      {years.map((year) => (
        <Reveal key={year} className="grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <span className="font-serif text-5xl font-light text-gilt md:text-6xl">{year}</span>
          </div>
          <ul className="divide-y divide-line border-t border-line md:col-span-9">
            {items
              .filter((a) => a.year === year)
              .map((a) => (
                <li
                  key={a.title}
                  className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-navy-950">{a.title}</h3>
                    <p className="mt-1 text-sm text-slate-strong/70">{a.body}</p>
                  </div>
                  <span className="eyebrow shrink-0 rounded-full border border-line bg-cloud px-3 py-1 text-[0.65rem] text-gold-600">
                    {a.category}
                  </span>
                </li>
              ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
