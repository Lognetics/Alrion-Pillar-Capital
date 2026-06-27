import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { HERO_STATS } from "@/lib/site";

export function StatBand() {
  return (
    <section className="relative z-20 -mt-px border-y border-white/10 bg-navy-950 text-paper">
      <div className="shell grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
        {HERO_STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.1}
            className="px-6 py-10 first:pl-0 last:pr-0"
          >
            <div className="font-serif text-4xl font-light text-gilt md:text-5xl">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </div>
            <p className="mt-3 text-sm font-medium text-paper">{stat.label}</p>
            <p className="mt-1 text-xs text-paper/45">{stat.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
