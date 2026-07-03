import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { FIRM, GLOBAL_OFFICES } from "@/lib/site";

const HQ = GLOBAL_OFFICES[0];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with ALRION Pillar Capital, our investor relations, media and general enquiry teams, at our New York headquarters.",
};

const DEPARTMENTS = [
  {
    title: "Investor Relations",
    body: "For prospective and existing partners: mandates, subscriptions, reporting and capital requests.",
    contact: FIRM.email,
    href: `mailto:${FIRM.email}`,
  },
  {
    title: "Media & Press",
    body: "For journalists, interview requests, brand assets and press enquiries.",
    contact: FIRM.press,
    href: `mailto:${FIRM.press}`,
  },
  {
    title: "General Enquiries",
    body: "For all other questions about the firm, our strategies and our approach.",
    contact: FIRM.email,
    href: `mailto:${FIRM.email}`,
  },
  {
    title: "By Telephone",
    body: "Reach our New York headquarters during standard business hours.",
    contact: FIRM.phone,
    href: `tel:${FIRM.phone.replace(/[^+\d]/g, "")}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s start the
            <span className="text-gilt"> conversation.</span>
          </>
        }
        intro="Whether you are an allocator exploring a partnership, a journalist on deadline or simply curious about our approach, the right team is ready to respond."
        crumbs={[{ label: "Contact" }]}
      />

      {/* Form + directory */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left, form */}
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow="Send us a message"
                title={<>Tell us about your mandate.</>}
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <ContactForm />
            </Reveal>
          </div>

          {/* Right, directory */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Departments"
                title={<>Reach the right team.</>}
              />
            </Reveal>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line">
              {DEPARTMENTS.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.06} className="bg-paper p-7">
                  <h3 className="text-lg font-semibold text-navy-950">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-strong/75">
                    {d.body}
                  </p>
                  <a
                    href={d.href}
                    className="mt-4 inline-block text-sm font-semibold tracking-wide text-gold-600 underline-offset-4 transition-colors hover:text-navy-900 hover:underline"
                  >
                    {d.contact}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Headquarters */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Our office"
            title={<>Headquarters in New York.</>}
            intro="ALRION Pillar Capital operates from a single New York headquarters, where every strategy shares one standard of fiduciary care."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 lg:grid-cols-3">
          <Reveal className="bg-navy-950 p-8">
            <span className="eyebrow text-gold-400">{HQ.region}</span>
            <h3 className="mt-4 font-serif text-2xl font-light text-paper">
              {HQ.city}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/60">
              {HQ.role}
            </p>
          </Reveal>
          <Reveal delay={0.07} className="bg-navy-950 p-8">
            <span className="eyebrow text-gold-400">Address</span>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              {FIRM.address}
            </p>
          </Reveal>
          <Reveal delay={0.14} className="bg-navy-950 p-8">
            <span className="eyebrow text-gold-400">Get in touch</span>
            <a
              href={`mailto:${FIRM.email}`}
              className="mt-4 block text-sm text-paper/70 underline-offset-4 transition-colors hover:text-gold-300 hover:underline"
            >
              {FIRM.email}
            </a>
            <a
              href={`tel:${FIRM.phone.replace(/[^+\d]/g, "")}`}
              className="mt-2 block text-sm text-paper/70 underline-offset-4 transition-colors hover:text-gold-300 hover:underline"
            >
              {FIRM.phone}
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
