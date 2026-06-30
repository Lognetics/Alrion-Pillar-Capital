import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { OBJECTIVES } from "@/lib/about";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "ALRION Pillar Capital exists to direct capital toward the frontier with rigor, conviction and conscience — building an institution where prosperity and progress compound together.",
};

export default function MissionPage() {
  return (
    <>
      {/* — Manifesto hero ——————————————————————————————————— */}
      <section className="relative overflow-hidden bg-paper pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-gold-500/8 blur-[120px]" />
        <div className="shell relative">
          <nav className="mb-10 flex items-center gap-2 text-xs text-slate-strong/50">
            <Link href="/" className="transition-colors hover:text-gold-600">Home</Link>
            <span className="text-slate-strong/30">/</span>
            <Link href="/about" className="transition-colors hover:text-gold-600">About</Link>
            <span className="text-slate-strong/30">/</span>
            <span className="text-slate-strong/80">Mission &amp; Vision</span>
          </nav>
          <Reveal>
            <Eyebrow>Our Mission</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-5xl text-balance font-serif text-4xl font-light leading-[1.08] text-navy-950 md:text-6xl lg:text-7xl">
              To direct capital toward the frontier with{" "}
              <span className="text-gilt">rigor, conviction and conscience</span> —
              funding the science, infrastructure and enterprises that advance human
              progress.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-slate-strong/80 md:text-xl">
              We measure our success in two currencies at once: returns realized for
              our partners, and lives, communities and ecosystems measurably improved.
              We reject the idea that the two must trade against one another.
            </p>
          </Reveal>
        </div>
      </section>

      {/* — Vision ————————————————————————————————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-paper md:py-32">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-navy-600/30 blur-[120px]" />
        <div className="shell relative">
          <Reveal>
            <Eyebrow light>Our Vision</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-4xl font-serif text-3xl font-light leading-snug text-paper md:text-5xl">
              An investment institution where{" "}
              <span className="text-gilt">prosperity and progress compound together</span>
              {" "}— and where the choice between performance and responsibility is
              proven, portfolio by portfolio, to be a false one.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-paper/70">
              Our ambition is to set the standard for how frontier technology is
              financed, and to remain the partner of choice for those building, and
              backing, the world that comes next.
            </p>
          </Reveal>
        </div>
      </section>

      {/* — Strategic objectives ———————————————————————————————— */}
      <section className="bg-cloud py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <Eyebrow>Strategic Objectives</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-tight text-navy-950 md:text-5xl">
              How our purpose becomes practice.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {OBJECTIVES.map((o, i) => (
              <Reveal
                key={o.no}
                delay={(i % 2) * 0.08}
                className="border-t border-line pt-6"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-3xl font-light text-gold-500">{o.no}</span>
                  <h3 className="font-serif text-2xl font-light text-navy-950">{o.title}</h3>
                </div>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-slate-strong/80">
                  {o.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-16 flex flex-wrap gap-4">
            <Button href="/about/principles" variant="outline">
              Our founding principles
            </Button>
            <Button href="/strategies" variant="outline">
              How we invest
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
