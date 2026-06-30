import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/blocks";
import { FIRM } from "@/lib/site";

export type LegalSection = {
  id: string;
  heading: string;
  body: ReactNode;
};

/**
 * Reusable document layout for legal pages. Renders a lighter hero with an
 * "Last updated" line and breadcrumbs, a sticky table-of-contents sidebar
 * (plain anchor links — no client JS required), and a readable, numbered body.
 */
export function LegalPage({
  eyebrow = "Legal",
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        crumbs={[{ label: "Legal" }, { label: title }]}
      >
        <p className="text-sm uppercase tracking-[0.18em] text-paper/45">
          Last updated &middot;{" "}
          <span className="text-gold-300">{updated}</span>
        </p>
      </PageHero>

      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            {/* — Table of contents ———————————————————————————— */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <p className="eyebrow text-gold-600">On this page</p>
              <nav className="mt-5 border-l border-line">
                <ol className="space-y-1 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="link-quiet group -ml-px flex items-start gap-3 border-l border-transparent py-1.5 pl-4 text-slate-strong/70 transition-colors hover:border-gold-500 hover:text-navy-950"
                      >
                        <span className="font-serif text-xs text-gold-500 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{s.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* — Document body ————————————————————————————————— */}
            <div className="min-w-0">
              <div className="mb-12 rounded-sm border border-line bg-cloud px-6 py-5">
                <p className="text-sm leading-relaxed text-slate-strong/80">
                  <span className="font-semibold text-navy-950">
                    Illustrative copy.
                  </span>{" "}
                  This page is sample website content prepared for demonstration
                  purposes only. It is not legal advice and does not create any
                  binding terms, obligations or relationship. Consult qualified
                  counsel before relying on any of the statements below.
                </p>
              </div>

              <div className="max-w-prose space-y-14">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="flex items-baseline gap-4 font-serif text-2xl font-light leading-tight text-navy-950 md:text-3xl">
                      <span className="text-base text-gold-500 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s.heading}</span>
                    </h2>
                    <div className="legal-prose mt-5 space-y-4 text-pretty leading-relaxed text-slate-strong/85">
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>

              <p className="mt-16 border-t border-line pt-8 text-sm text-slate-strong/60">
                Questions about this document? Contact us at{" "}
                <a
                  href={`mailto:${FIRM.email}`}
                  className="text-gold-600 underline-offset-4 hover:underline"
                >
                  {FIRM.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Capital for the frontier."
        body="Explore how ALRION Pillar Capital invests across public markets and private innovation."
        primary={{ href: "/contact", label: "Contact us" }}
        secondary={{ href: "/strategies", label: "Our strategies" }}
      />
    </>
  );
}
