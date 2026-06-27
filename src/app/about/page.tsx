import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  Section,
  SplitContent,
  FeatureGrid,
  CtaBand,
} from "@/components/sections/blocks";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { FIRM, HERO_STATS, DIFFERENTIATORS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "ALRION Pillar Capital is a global, research-led investment firm pursuing durable returns and measurable impact at the frontier of technology — guided by AI-driven quantitative models and institutional governance.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title={
          <>
            A research-led firm building
            <span className="text-gilt"> capital for the frontier.</span>
          </>
        }
        intro="ALRION Pillar Capital allocates across public markets and private innovation in pursuit of enduring returns and measurable impact — uniting scientific rigor, quantitative intelligence and institutional discipline."
        crumbs={[{ label: "About" }]}
      />

      {/* — Firm overview ————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Firm"
              title={<>Where rigorous science meets patient capital.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                {FIRM.name} is a global, research-led investment firm founded on
                a single conviction: the technologies redefining the world&apos;s
                economy demand capital that is equally rigorous, adaptive and
                principled. Since {FIRM.established}, we have allocated across the
                full technology cycle — from liquid public markets to early-stage
                private innovation — in pursuit of durable returns and measurable
                progress.
              </p>
              <p>
                We are, above all, an institution built around research. A
                dedicated desk of engineers, scientists and analysts translates
                frontier breakthroughs into investable theses long before they
                reach the mainstream, while proprietary AI-driven quantitative
                models inform how we size conviction, manage risk and time our
                commitments. The result is a discipline that follows insight
                rather than sentiment.
              </p>
              <p>
                Our partners are long-term institutions, family offices and
                mission-aligned allocators who expect more than performance. They
                expect transparency, independent governance and a portfolio in
                which financial prosperity reinforces — never compromises —
                social and environmental outcomes. That expectation defines who
                we are.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Stats row ————————————————————————————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper md:py-24">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="shell relative">
          <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-navy-950 p-8 md:p-10">
                <p className="font-serif text-4xl font-light text-gilt md:text-5xl">
                  <Counter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </p>
                <p className="mt-5 text-sm font-semibold text-paper">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-paper/50">{s.sub}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-paper/40">
            Illustrative figures presented for context. Past performance is not
            indicative of future results.
          </p>
        </div>
      </section>

      {/* — Our Story / origins ——————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Story"
              title={<>Founded at the intersection of science and markets.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                {FIRM.name} was established in {FIRM.established} by a group of
                investors, engineers and scientists who shared a frustration with
                the way capital was being allocated to the most consequential
                technologies of the era. Too much money was chasing narrative;
                too little was grounded in genuine technical understanding.
              </p>
              <p>
                We set out to build a different kind of institution — one in which
                the people evaluating a breakthrough could read the research
                paper, interrogate the architecture and model the economics with
                equal fluency. From a single research desk, the firm grew into a
                multi-platform manager spanning public markets, private equity,
                venture and inclusive impact capital, unified by a common
                methodology and an uncompromising standard of governance.
              </p>
              <p>
                That founding ethos endures. Every mandate we manage, every
                position we hold and every report we publish reflects the same
                discipline that defined our first day: science before capital,
                conviction earned through evidence, and impact measured alongside
                return.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Mission & Vision ——————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Mission & Vision"
            title={<>Why we exist, and where we are headed.</>}
            intro="Our purpose is durable, even as the technologies we back evolve."
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
          <Reveal className="bg-paper p-10 md:p-12">
            <p className="eyebrow text-gold-600">Our Mission</p>
            <h3 className="mt-5 font-serif text-2xl font-light text-navy-950 md:text-3xl">
              To direct capital toward the frontier with rigor, conviction and
              conscience.
            </h3>
            <p className="mt-6 leading-relaxed text-slate-strong/80">
              We exist to fund the science, infrastructure and enterprises that
              advance human progress — and to do so with the discipline,
              transparency and independence that long-term institutional capital
              deserves. We measure our success in returns realized and in lives,
              communities and ecosystems improved.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="bg-paper p-10 md:p-12">
            <p className="eyebrow text-gold-600">Our Vision</p>
            <h3 className="mt-5 font-serif text-2xl font-light text-navy-950 md:text-3xl">
              An investment institution where prosperity and progress compound
              together.
            </h3>
            <p className="mt-6 leading-relaxed text-slate-strong/80">
              We envision a firm that sets the standard for how frontier
              technology is financed — proving, portfolio by portfolio, that the
              choice between performance and responsibility is a false one. Our
              ambition is to remain the partner of choice for those building, and
              backing, the world that comes next.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* — Core Values / Founding Principles ——————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Founding Principles"
            title={<>The values that govern every decision.</>}
            intro="These principles are not aspirations on a wall — they are the operating logic of the firm, embedded in how we research, allocate, govern and report."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={3}
            items={[
              {
                title: "Evidence over sentiment",
                body: "We size conviction to the strength of the evidence. Every thesis is stress-tested by specialists before a dollar follows it.",
              },
              {
                title: "Independence of mind",
                body: "Our research and risk functions challenge consensus and one another, ensuring no allocation rests on an unexamined assumption.",
              },
              {
                title: "Responsibility by design",
                body: "Social and environmental outcomes are engineered into our process, not bolted on as an afterthought or marketing claim.",
              },
              {
                title: "Long-term partnership",
                body: "We align with patient capital and patient founders, compounding value over horizons measured in cycles, not quarters.",
              },
              {
                title: "Uncompromising governance",
                body: "Independent oversight, robust compliance and transparent reporting are non-negotiable foundations of how we operate.",
              },
              {
                title: "Intellectual humility",
                body: "We treat being wrong as information. Adversarial review and continuous learning keep our convictions honest.",
              },
            ]}
          />
        </div>
      </Section>

      {/* — The Alrion Difference (DIFFERENTIATORS) —————————————— */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="The Alrion Difference"
            title={<>What sets our approach apart.</>}
            intro="Four sources of edge that, together, define how ALRION Pillar Capital invests at the frontier."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title} delay={(i % 4) * 0.07} className="bg-navy-950 p-8">
              <span className="font-serif text-2xl text-gold-400">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Leadership teaser ——————————————————————————————————— */}
      <Section tone="paper">
        <SplitContent
          eyebrow="Our People"
          title={<>Led by a multidisciplinary team of investors, engineers and scientists.</>}
          bullets={[
            "Investment professionals across public and private markets",
            "Engineers and scientists embedded in technical diligence",
            "Quantitative researchers building proprietary models",
            "Independent risk, compliance and governance specialists",
          ]}
        >
          <p>
            What distinguishes {FIRM.short} is not a single discipline but the
            deliberate collision of many. Portfolio managers sit beside the
            engineers who can read a technology&apos;s architecture; data
            scientists work alongside the analysts who model its economics. This
            cross-disciplinary fluency is the engine of our conviction.
          </p>
          <p>
            Our teams are organized to challenge one another. Investing,
            research, risk and governance functions operate with genuine
            independence, ensuring that every commitment survives rigorous,
            adversarial scrutiny before it earns the firm&apos;s capital.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/governance" variant="outline">
              Our governance
            </Button>
            <Button href="/careers" variant="outline">
              Join the team
            </Button>
          </div>
        </SplitContent>
      </Section>

      {/* — Commitments / links ————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Our Commitments"
            title={<>Built on accountability, not assertion.</>}
            intro="Explore how our principles translate into structure, oversight and measurable responsibility."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {[
            {
              title: "Corporate Governance",
              body: "Independent oversight, robust compliance and transparent reporting that give our partners assurance.",
              href: "/governance",
              label: "Explore governance",
            },
            {
              title: "ESG & Responsible Capital",
              body: "An integrated approach where measurable impact and durable returns reinforce one another.",
              href: "/esg",
              label: "Explore ESG",
            },
            {
              title: "Careers at Alrion",
              body: "Join a multidisciplinary team building the standard for how the frontier is financed.",
              href: "/careers",
              label: "View opportunities",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="group bg-paper p-10">
              <h3 className="font-serif text-2xl font-light text-navy-950">
                {c.title}
              </h3>
              <p className="mt-4 leading-relaxed text-slate-strong/80">{c.body}</p>
              <Button href={c.href} variant="outline" className="mt-8">
                {c.label}
              </Button>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>Partner with a firm built for the frontier.</>}
        body="Speak with our investor relations team to explore how ALRION Pillar Capital aligns with your mandate and your values."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/strategies", label: "Our strategies" }}
      />
    </>
  );
}
