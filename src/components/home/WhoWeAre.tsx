import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Button } from "@/components/ui/primitives";

const PILLARS = [
  { k: "01", t: "Public Markets", d: "Liquid, AI-driven strategies positioned at the leading edge of innovation." },
  { k: "02", t: "Private Innovation", d: "Venture and growth capital backing the founders building what comes next." },
  { k: "03", t: "Real Assets", d: "Control investments in the infrastructure and energy that power the economy." },
  { k: "04", t: "Inclusive Impact", d: "Community capital that aligns financial prosperity with social progress." },
];

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-paper py-24 md:py-32">
      <div className="shell grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] text-navy-950 md:text-5xl">
              A research-led firm investing where the world is being rebuilt.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-slate-strong/85">
              We believe strategic, impact-driven investment can reshape entire
              industries. Across four complementary platforms, ALRION Pillar Capital
              unites the analytical rigor of a quantitative manager with the
              conviction of a long-term owner — empowering founders, strengthening
              communities, and redefining what institutional capital can achieve.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg leading-relaxed text-slate-strong/85">
              Our work is guided by a single conviction: that financial prosperity
              should reinforce environmental stewardship, social progress and ethical
              governance — not stand apart from them.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href="/about" variant="outline">
                Read our full story
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-px self-start overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.k}
              delay={i * 0.08}
              className="group bg-paper p-8 transition-colors duration-500 hover:bg-navy-950"
            >
              <span className="font-serif text-2xl text-gold-500">{p.k}</span>
              <h3 className="mt-6 text-lg font-semibold text-navy-950 transition-colors duration-500 group-hover:text-paper">
                {p.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/75 transition-colors duration-500 group-hover:text-paper/65">
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
