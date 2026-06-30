import { Reveal } from "@/components/ui/Reveal";
import type { Milestone } from "@/lib/about";

/** Vertical history timeline with a gold spine and milestone entries. */
export function Timeline({ items }: { items: Milestone[] }) {
  return (
    <ol className="relative ml-2 border-l border-line pl-8 md:ml-6 md:pl-12">
      <span className="absolute left-0 top-0 h-full w-px -translate-x-px bg-gradient-to-b from-gold-500/0 via-gold-500/50 to-gold-500/0" />
      {items.map((m, i) => (
        <Reveal as="li" key={m.year} delay={(i % 3) * 0.06} className="relative pb-14 last:pb-0">
          <span className="absolute -left-[42px] top-1.5 flex h-4 w-4 items-center justify-center md:-left-[58px]">
            <span className="h-3 w-3 rounded-full border border-gold-500 bg-paper" />
            <span className="absolute h-1.5 w-1.5 rounded-full bg-gold-500" />
          </span>
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="font-serif text-3xl font-light text-gilt md:text-4xl">{m.year}</span>
            {m.tag && (
              <span className="eyebrow rounded-full border border-line bg-cloud px-3 py-1 text-[0.65rem] text-gold-600">
                {m.tag}
              </span>
            )}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-navy-950 md:text-2xl">{m.title}</h3>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-slate-strong/80">{m.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
