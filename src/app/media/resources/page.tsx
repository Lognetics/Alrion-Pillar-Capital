import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { FIRM } from "@/lib/site";
import {
  BRAND_PALETTE,
  LOGO_DOS,
  LOGO_DONTS,
  ASSET_ROWS,
  BRAND_TYPEFACES,
} from "@/lib/media";

export const metadata: Metadata = {
  title: "Brand & Media Kit",
  description:
    "The official ALRION Pillar Capital brand and media kit — logo usage, color palette, typography, downloadable assets and media contact for journalists and partners.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Media · Brand & Media Kit"
        title={
          <>
            The ALRION Pillar Capital
            <span className="text-gilt"> brand kit.</span>
          </>
        }
        intro="Everything journalists, partners and collaborators need to represent the firm accurately — logo usage, color, typography and approved assets."
        crumbs={[{ label: "Media", href: "/media" }, { label: "Brand & Media Kit" }]}
      />

      {/* — Logo usage ————————————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Logo Usage"
            title={<>Represent the mark with care.</>}
            intro="The wordmark is the firm's signature. A few simple rules keep it consistent everywhere it appears."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-sm border border-line bg-paper p-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-gold-600">Do</span>
            <ul className="mt-6 space-y-4">
              {LOGO_DOS.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm leading-relaxed text-slate-strong">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-sm border border-line bg-cloud/50 p-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-slate-strong">Don't</span>
            <ul className="mt-6 space-y-4">
              {LOGO_DONTS.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm leading-relaxed text-slate-strong/80">
                  <span className="mt-1 text-slate-strong/50">×</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* — Color palette —————————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Color Palette"
            title={<>The colors of the firm.</>}
            intro="A restrained, institutional palette: deep navy and ink anchored by considered gold, on warm paper."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-4">
          {BRAND_PALETTE.map((s, i) => (
            <Reveal key={s.token} delay={(i % 4) * 0.05} className="bg-paper">
              <div className="h-28 w-full" style={{ backgroundColor: s.hex }} />
              <div className="p-5">
                <p className="text-sm font-semibold text-navy-950">{s.name}</p>
                <p className="mt-1 font-mono text-xs uppercase text-slate-strong/65">{s.hex}</p>
                <p className="mt-1 font-mono text-[0.7rem] text-slate-strong/45">{s.token}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Typography ————————————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Typography"
            title={<>Two typefaces, one voice.</>}
            intro="Inter Tight brings quiet authority to display moments; Inter keeps everything else clear and modern."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {BRAND_TYPEFACES.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="rounded-sm border border-line bg-paper p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-navy-950">{t.name}</h3>
                <span className="eyebrow text-gold-600">{t.role}</span>
              </div>
              <p
                className={cn(
                  "mt-8 text-3xl leading-tight text-navy-950 md:text-4xl",
                  t.serif ? "font-serif font-light" : "font-sans",
                )}
              >
                {t.sample}
              </p>
              <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-slate-strong/75">
                {t.usage}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Downloadable assets ————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Asset Library"
            title={<>Download approved assets.</>}
            intro="Logos, palettes, guidelines and firm materials, ready for use."
          />
        </Reveal>
        <div className="mt-14 overflow-hidden rounded-sm border border-line bg-paper">
          {ASSET_ROWS.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between gap-4 border-t border-line p-6 first:border-t-0 md:px-8"
            >
              <div>
                <p className="font-semibold text-navy-950">{a.name}</p>
                <p className="mt-1 text-sm text-slate-strong/65">{a.note}</p>
              </div>
              <div className="flex items-center gap-5">
                <span className="hidden font-mono text-xs text-slate-strong/55 sm:inline">{a.formats}</span>
                <span
                  aria-disabled="true"
                  className="cursor-not-allowed select-none rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-slate-strong/40"
                  title="Asset download unavailable in this preview"
                >
                  Download
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* — Media contact —————————————————————————————————————— */}
      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Media Contact"
              title={<>Talk to our media team.</>}
              intro="For press enquiries, interview requests, asset approvals or background, our team responds promptly."
            />
          </Reveal>
          <Reveal delay={0.1} className="self-center">
            <div className="rounded-sm border border-white/12 bg-white/[0.03] p-10">
              <p className="eyebrow text-gold-400">Press & Media</p>
              <a
                href={`mailto:${FIRM.press}`}
                className="mt-5 block font-serif text-2xl font-light text-paper transition-colors hover:text-gold-300"
              >
                {FIRM.press}
              </a>
              <p className="mt-6 border-t border-white/10 pt-6 text-sm text-paper/60">
                {FIRM.name}
              </p>
              <p className="mt-1 text-sm text-paper/60">{FIRM.phone}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title={<>Need something not listed here?</>}
        body="Reach our media team directly and we'll get you what you need to tell the story accurately."
        primary={{ href: "/contact", label: "Contact us" }}
        secondary={{ href: "/media/news", label: "Latest news" }}
      />
    </>
  );
}
