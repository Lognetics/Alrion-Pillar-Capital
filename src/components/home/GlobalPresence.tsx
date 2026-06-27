"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { GLOBAL_OFFICES } from "@/lib/site";

// Approximate positions on the stylized map (percentages).
const MARKERS = [
  { city: "San Francisco", x: 16, y: 40 },
  { city: "New York", x: 28, y: 38 },
  { city: "London", x: 47, y: 31 },
  { city: "Zurich", x: 51, y: 35 },
  { city: "Abu Dhabi", x: 61, y: 46 },
  { city: "Singapore", x: 77, y: 60 },
];

export function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-paper md:py-32">
      <div className="shell relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <SectionHeading
              light
              eyebrow="Global Presence"
              title={<>An integrated firm across the world&rsquo;s capital centers.</>}
              intro="From New York to Singapore, our teams operate as one — sharing research, networks and conviction across 22 countries of activity."
            />
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
            {GLOBAL_OFFICES.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.06} className="bg-navy-950 p-6">
                <p className="text-base font-semibold text-paper">{o.city}</p>
                <p className="mt-1 text-xs tracking-wide text-gold-400">{o.region}</p>
                <p className="mt-2 text-sm text-paper/55">{o.role}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <Button href="/global" variant="ghost">
                Explore our global network
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Stylized map */}
        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-navy-900/40">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(200,164,92,0.35) 1px, transparent 1.4px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />

            {MARKERS.map((m, i) => (
              <div
                key={m.city}
                className="absolute"
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
              >
                <motion.span
                  className="absolute -inset-2 rounded-full bg-gold-500/40"
                  animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
                />
                <span className="relative block h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_12px] shadow-gold-400/80" />
                <span className="absolute left-3 top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[0.65rem] tracking-wide text-paper/70 md:block">
                  {m.city}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
