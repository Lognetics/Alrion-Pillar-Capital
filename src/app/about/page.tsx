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
import { FIRM, DIFFERENTIATORS, GOVERNANCE_STANDARDS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "ALRION Pillar Capital is an institutional alternative investment platform established in 2024 in New York, comprising four independent Delaware Limited Partnerships unified by one rigorous framework of fiduciary care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title={
          <>
            A platform, not a product.
            <span className="text-gilt"> Independence by Design.</span>
          </>
        }
        intro="ALRION Pillar Capital is an institutional alternative investment platform: four autonomous strategies, one rigorous framework, and a singular standard of fiduciary care for the allocators who ask the harder questions."
        crumbs={[{ label: "About" }]}
      />

      {/* — Firm overview ————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Platform"
              title={<>Four autonomous strategies. One rigorous framework.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                {FIRM.name} is an institutional alternative investment platform,
                a platform, not a product. Established in {FIRM.established} in
                New York, it comprises four independent Delaware Limited
                Partnerships, each with its own investment committee and risk
                framework.
              </p>
              <p>
                The four strategies pursue very different mandates: global macro,
                infrastructure growth, frontier technology and community equity.
                They are bound together by one rigorous framework of research,
                risk monitoring and independent oversight, so that a single
                standard of discipline applies across the whole platform.
              </p>
              <p>
                Our partners are institutions, family offices and mission-aligned
                allocators who expect more than performance. They expect
                transparency, independent governance and structural alignment.
                That expectation defines who we are: Independence by Design,
                Conviction by Discipline.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Governance standards ——————————————————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper md:py-24">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="shell relative">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Our Standards"
              title={<>Governance you can hold us to.</>}
              intro="Four commitments define how the platform operates, structural rather than stated."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {GOVERNANCE_STANDARDS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="bg-navy-950 p-8 md:p-10">
                <span className="font-serif text-2xl text-gold-400">0{i + 1}</span>
                <p className="mt-5 text-lg font-semibold text-paper">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* — Our Story / origins ——————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Story"
              title={<>Conceived and launched in 2024.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                {FIRM.name} was conceived and launched in {FIRM.established} in
                New York around a single conviction: that serious allocators
                deserve a platform where independence is engineered into the
                structure and conviction is earned through discipline.
              </p>
              <p>
                Rather than a single product, the platform was designed from the
                outset as four autonomous strategies, each a separate Delaware
                Limited Partnership with its own investment committee and risk
                framework. One rigorous framework of governance and oversight
                binds them together.
              </p>
              <p>
                That founding logic defines everything we do: a platform, not a
                product, Independence by Design and Conviction by Discipline.
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
            title={<>Why we exist, and how we operate.</>}
            intro="Our purpose is durable, even as the strategies we run evolve."
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
          <Reveal className="bg-paper p-10 md:p-12">
            <p className="eyebrow text-gold-600">Our Mission</p>
            <h3 className="mt-5 font-serif text-2xl font-light text-navy-950 md:text-3xl">
              A singular standard of fiduciary care for the allocators who ask the
              harder questions.
            </h3>
            <p className="mt-6 leading-relaxed text-slate-strong/80">
              We exist to run four autonomous strategies under one rigorous
              framework, with the transparency, independent governance and
              structural alignment that institutional capital deserves.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="bg-paper p-10 md:p-12">
            <p className="eyebrow text-gold-600">Our Vision</p>
            <h3 className="mt-5 font-serif text-2xl font-light text-navy-950 md:text-3xl">
              Independence by Design. Conviction by Discipline.
            </h3>
            <p className="mt-6 leading-relaxed text-slate-strong/80">
              We aim to prove that autonomy and discipline are not in tension. Each
              strategy stands on its own conviction, and every strategy is held to
              the same institutional standard of care.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* — Founding principles ————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Founding Principles"
            title={<>The logic that governs every decision.</>}
            intro="These principles are not aspirations on a wall. They are the operating logic of the platform, embedded in how we structure, research, govern and report."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={3}
            items={[
              {
                title: "A platform, not a product",
                body: "Four autonomous strategies, each a separate Delaware Limited Partnership with its own investment committee and risk framework.",
              },
              {
                title: "Independence by design",
                body: "Independence is engineered into the structure. Research, risk and governance functions operate with genuine autonomy.",
              },
              {
                title: "Conviction by discipline",
                body: "We size conviction to the strength of the evidence, integrating quantitative modelling with fundamental analysis.",
              },
              {
                title: "Aligned interests",
                body: "Significant GP commitments across every fund. We invest where we ask our partners to invest, and at the same terms.",
              },
              {
                title: "Rigorous oversight",
                body: "Annual Big Four audits, third-party administration and independent valuation committees on illiquid positions.",
              },
              {
                title: "Absolute transparency",
                body: "Monthly reporting for liquid strategies, quarterly deep-dive reviews for private markets and real-time access for partners.",
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
            title={<>Four commitments that define the platform.</>}
            intro="Together, these define how ALRION Pillar Capital operates for institutional partners."
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
          title={<>A team organized to challenge itself.</>}
          bullets={[
            "Managing partners accountable for each of the four strategies",
            "Independent risk and compliance functions across every LP",
            "An advisory board spanning the domains we invest in",
            "A Venture Capital Technical Advisory Board of former government and military leaders",
          ]}
        >
          <p>
            What distinguishes {FIRM.short} is not a single discipline but the
            deliberate collision of many, held to one rigorous framework. Each
            strategy is led by partners who own their conviction, and each is
            checked by independent risk and governance functions.
          </p>
          <p>
            Our teams are organized to challenge one another. Investing, risk and
            governance functions operate with genuine independence, so that every
            commitment survives rigorous, adversarial scrutiny before it earns a
            strategy's capital.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/governance" variant="outline">
              Our governance
            </Button>
            <Button href="/about/leadership" variant="outline">
              Meet the team
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
              title: "Governance",
              body: "Independent governance, Big Four audits and third-party administration that give our partners institutional assurance.",
              href: "/governance",
              label: "Explore governance",
            },
            {
              title: "Impact Through Investment",
              body: "The Community Equity Fund LP proves that underserved markets hold compelling risk-adjusted opportunities in New York.",
              href: "/impact",
              label: "Explore impact",
            },
            {
              title: "Careers at Alrion",
              body: "Join a team building the standard for how autonomous strategies are run under one rigorous framework.",
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
        title={<>Partner with a platform built for serious allocators.</>}
        body="Speak with our team to explore how ALRION Pillar Capital aligns with your mandate and your standards."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/strategies", label: "Our strategies" }}
      />
    </>
  );
}
