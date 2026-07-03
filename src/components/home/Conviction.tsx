import { Reveal } from "@/components/ui/Reveal";

export function Conviction() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-paper md:py-40">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="shell relative text-center">
        <Reveal>
          <span className="font-serif text-6xl leading-none text-gold-500/60">&ldquo;</span>
        </Reveal>
        <Reveal delay={0.05}>
          <blockquote className="mx-auto mt-4 max-w-4xl text-balance font-serif text-3xl font-light leading-[1.2] md:text-[2.75rem]">
            We built a platform, not a product, four independent strategies unified
            by institutional standards rather than stretched across misaligned markets.
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 text-sm tracking-[0.2em] text-paper/55">
            ALRION PILLAR CAPITAL · THE PLATFORM PHILOSOPHY
          </p>
        </Reveal>
      </div>
    </section>
  );
}
