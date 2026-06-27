"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/primitives";

const WORDS = ["the frontier.", "innovation.", "impact.", "the future."];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 text-paper">
      {/* Background system */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/0 via-navy-950/40 to-navy-950" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -left-40 top-10 h-[36rem] w-[36rem] rounded-full bg-navy-600/30 blur-[120px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-gold-500/15 blur-[120px]"
      />

      <div className="shell relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold-500" />
            <span className="eyebrow text-gold-400">
              Global Investment Management · Est. 2019
            </span>
          </motion.div>

          <h1 className="mt-8 font-serif text-5xl font-light leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            <Line delay={0.15}>Capital engineered</Line>
            <Line delay={0.3}>
              for{" "}
              <span className="relative inline-block text-gilt">
                <RotatingWord />
              </span>
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-paper/70 md:text-xl"
          >
            ALRION Pillar Capital allocates across public markets and private
            innovation — uniting research-led conviction, AI-driven quantitative
            models and institutional governance to compound returns and measurable
            impact at the frontier of technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/strategies" variant="gold">
              Explore our strategies
            </Button>
            <Button href="/about" variant="ghost">
              Who we are
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[0.65rem] tracking-[0.3em] text-paper/40">SCROLL</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold-500 to-transparent" />
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function RotatingWord() {
  return (
    <span className="inline-grid">
      {WORDS.map((word, i) => (
        <motion.span
          key={word}
          className="col-start-1 row-start-1"
          animate={{
            opacity: [0, 1, 1, 0],
            y: ["40%", "0%", "0%", "-40%"],
          }}
          transition={{
            duration: WORDS.length * 2.4,
            times: [
              i / WORDS.length,
              (i + 0.12) / WORDS.length,
              (i + 0.88) / WORDS.length,
              (i + 1) / WORDS.length,
            ],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.span>
      ))}
      {/* Reserve width with the longest word, invisibly */}
      <span className="invisible col-start-1 row-start-1">the frontier.</span>
    </span>
  );
}
