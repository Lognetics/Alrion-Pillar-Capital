import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { DocsLibrary } from "@/components/investors/DocsLibrary";

export const metadata: Metadata = {
  title: "Document Center",
  description:
    "A controlled library of fund reports, legal agreements, tax records and presentations for the partners of ALRION Pillar Capital. Access requires secure sign-in.",
};

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Document Center"
        title={
          <>
            Every document,
            <span className="text-gilt"> versioned and secure.</span>
          </>
        }
        intro="A controlled repository for subscription agreements, audited reports, tax documents and governance policies — time-stamped, permissioned and available on demand."
        crumbs={[
          { label: "Investor Center", href: "/investors" },
          { label: "Document Center" },
        ]}
      />

      {/* Access notice */}
      <Section tone="cloud">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-sm border border-line bg-paper p-7 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                ⚿
              </span>
              <div>
                <h2 className="text-base font-semibold text-navy-950">
                  Sign in to download
                </h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-strong/75">
                  The library below previews the documents available to partners.
                  Downloading any document requires authentication through the
                  secure investor portal.
                </p>
              </div>
            </div>
            <Link
              href="/investors/portal"
              className="inline-flex shrink-0 items-center gap-2 bg-navy-900 px-6 py-3 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-navy-800"
            >
              Go to portal
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Library */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Document library"
            title={<>Browse by category.</>}
            intro="Filter the library by document type. Each entry shows its format, publication date and size."
          />
        </Reveal>
        <div className="mt-12">
          <DocsLibrary />
        </div>
      </Section>

      <CtaBand
        title={<>Access the full document vault.</>}
        body="Partners reach the complete, downloadable repository through the secure investor portal — available 24/7 from any device."
        primary={{ href: "/investors/portal", label: "Sign in to the portal" }}
        secondary={{ href: "/investors/faqs", label: "Investor FAQs" }}
      />
    </>
  );
}
