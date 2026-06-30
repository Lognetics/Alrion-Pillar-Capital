import { Reveal } from "@/components/ui/Reveal";

type Card = { title: string; body: string };

/** Tailored-access cards for the family-office page. */
export function AccessCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map((c, i) => (
        <Reveal
          key={c.title}
          delay={(i % 2) * 0.08}
          className="group relative overflow-hidden rounded-sm border border-line bg-paper p-9 transition-colors hover:border-gold-500/50"
        >
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-500/0 blur-2xl transition-colors duration-500 group-hover:bg-gold-500/10" />
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40 font-serif text-lg text-gold-600">
              0{i + 1}
            </div>
            <h3 className="mt-6 font-serif text-2xl font-light text-navy-950">{c.title}</h3>
            <p className="mt-3 text-[0.97rem] leading-relaxed text-slate-strong/80">{c.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
