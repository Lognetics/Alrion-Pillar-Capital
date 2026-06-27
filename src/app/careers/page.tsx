import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  Section,
  SplitContent,
  FeatureGrid,
  CtaBand,
} from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career at ALRION Pillar Capital — a research-led investment firm where engineers, scientists and investors translate frontier science into durable returns and measurable impact.",
};

const DEPARTMENTS = [
  {
    title: "Investment Teams",
    body: "Portfolio managers, analysts and associates across our hedge fund, private equity, venture and community equity platforms.",
  },
  {
    title: "Quantitative Research",
    body: "Data scientists and engineers building the AI-driven models that power allocation, risk and signal generation.",
  },
  {
    title: "Technical Diligence",
    body: "Engineers and scientists who evaluate frontier technology, defensibility and the path to industrial scale.",
  },
  {
    title: "Risk & Oversight",
    body: "Independent risk professionals who safeguard capital through attribution, limits and model validation.",
  },
  {
    title: "Investor Relations",
    body: "Relationship managers and reporting specialists who serve our institutional partners with clarity and care.",
  },
  {
    title: "Operations & Technology",
    body: "The engineers, administrators and operators who keep a global, multi-platform firm running seamlessly.",
  },
];

const OPEN_ROLES = [
  {
    title: "Quantitative Researcher, Frontier Markets",
    team: "Quantitative Research",
    location: "New York · Hybrid",
    type: "Full-time",
    blurb:
      "Design and deploy machine-learning models that identify dislocations across frontier-technology equities for our hedge fund platform.",
  },
  {
    title: "Investment Associate, Venture Capital",
    team: "Investment Teams",
    location: "San Francisco · On-site",
    type: "Full-time",
    blurb:
      "Source, diligence and support category-defining founders across AI, robotics, biotech and deep tech from first check through growth.",
  },
  {
    title: "Technical Diligence Lead, Climate & Energy",
    team: "Technical Diligence",
    location: "London · Hybrid",
    type: "Full-time",
    blurb:
      "Lead primary technical evaluation of climate and energy-transition investments, from underlying science to industrial scalability.",
  },
  {
    title: "Risk Analyst, Independent Oversight",
    team: "Risk & Oversight",
    location: "New York · On-site",
    type: "Full-time",
    blurb:
      "Monitor exposure, correlation and volatility across platforms, enforcing limits and validating models within our oversight function.",
  },
  {
    title: "Investor Relations Manager, EMEA",
    team: "Investor Relations",
    location: "Zurich · Hybrid",
    type: "Full-time",
    blurb:
      "Serve as a trusted point of contact for our European institutional partners, delivering reporting and stewardship to our standard.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the firm building
            <span className="text-gilt"> the frontier.</span>
          </>
        }
        intro="ALRION Pillar Capital brings together investors, engineers and scientists under one conviction: that rigorous research and principled capital can shape the technologies defining the next era. We are always seeking exceptional people to join that mission."
        crumbs={[{ label: "Careers" }]}
      />

      {/* Life at Alrion */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Life at Alrion"
              title={<>A culture of rigor, ownership and impact.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                We are a research-led firm at our core, and that shapes everything
                about how we work. Ideas are debated on their merits, conviction is
                earned through evidence and every team member is expected to think
                like an owner. The work is demanding because the problems are hard —
                and that is precisely why the people who thrive here choose to stay.
              </p>
              <p>
                Across six offices and twenty-two countries of activity, we operate
                as one firm with a single standard of excellence. We invest in our
                people the way we invest our capital: patiently, with conviction and
                with a long-term view of the value they will compound.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Culture & benefits */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="What we offer"
            title={<>Designed for people who do their best work.</>}
            intro="We support our teams with the resources, environment and incentives that let exceptional people compound their impact over a career."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={3}
            items={[
              {
                title: "Meaningful ownership",
                body: "Competitive compensation with genuine carried interest and equity, aligning every team member to the long-term outcomes we create.",
              },
              {
                title: "Research at the frontier",
                body: "Direct access to the most consequential technologies of our time and the experts building them, across our global portfolio.",
              },
              {
                title: "Continuous development",
                body: "Generous learning budgets, mentorship from senior leaders and clear paths for advancement across disciplines.",
              },
              {
                title: "Comprehensive wellbeing",
                body: "Premium health coverage, parental leave and wellbeing support designed to sustain people through demanding work.",
              },
              {
                title: "Global mobility",
                body: "Opportunities to work across our offices in the Americas, EMEA, APAC and the Middle East as your career grows.",
              },
              {
                title: "Impact that matters",
                body: "The chance to align your work with measurable social and environmental outcomes through our impact-led mandate.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Departments */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Where you fit"
            title={<>One firm, many disciplines.</>}
            intro="From quantitative research to investor relations, our teams are united by a shared standard of rigor and a common mission."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.07} className="bg-navy-950 p-8">
              <span className="font-serif text-2xl text-gold-400">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Graduate programs & internships */}
      <Section tone="paper">
        <SplitContent
          reverse
          eyebrow="Graduate & internship programs"
          title={<>Begin your career at the frontier.</>}
          bullets={[
            "Two-year rotational analyst program across platforms",
            "Summer internships in investment and quantitative research",
            "Dedicated mentorship from senior investors and engineers",
            "A clear pathway from intern to full-time team member",
          ]}
        >
          <p>
            We believe the best investors and researchers are developed, not merely
            recruited. Our graduate program rotates analysts across our investment
            platforms, risk function and research desk, building the breadth that
            defines a complete Alrion professional.
          </p>
          <p>
            Our summer internships give exceptional students real responsibility on
            live work — from technical diligence to model development — alongside the
            mentorship and feedback to grow quickly. Many of our interns return to
            launch their full-time careers with us.
          </p>
        </SplitContent>
      </Section>

      {/* Open roles */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Open roles"
            title={<>Current opportunities.</>}
            intro="A selection of the roles we are actively hiring for across our global offices."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line">
          {OPEN_ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.05} className="group">
              <div className="flex flex-col gap-5 bg-paper p-8 transition-colors duration-500 hover:bg-navy-950 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="md:max-w-2xl">
                  <span className="eyebrow text-gold-600 transition-colors duration-500 group-hover:text-gold-300">
                    {role.team}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-light text-navy-950 transition-colors duration-500 group-hover:text-paper">
                    {role.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-strong/75 transition-colors duration-500 group-hover:text-paper/65">
                    {role.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-strong/55 transition-colors duration-500 group-hover:text-paper/45">
                    <span>{role.location}</span>
                    <span className="h-1 w-1 rounded-full bg-gold-500" />
                    <span>{role.type}</span>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold tracking-wide text-gold-600 transition-colors duration-500 group-hover:text-gold-300">
                  Apply now →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>Join us in building capital for the frontier.</>}
        body="Don't see the right role? We are always glad to hear from exceptional people. Introduce yourself and tell us where you could make an impact."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/about", label: "About the firm" }}
      />
    </>
  );
}
