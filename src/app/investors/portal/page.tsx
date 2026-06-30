import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PortalLogin } from "@/components/investors/PortalLogin";
import { PORTAL_ASSURANCES, PORTAL_FEATURES } from "@/lib/investor-center";

export const metadata: Metadata = {
  title: "Investor Portal",
  description:
    "Sign in to the secure ALRION Pillar Capital investor portal for 24/7 access to your capital accounts, statements, performance reporting and document vault.",
};

export default function PortalPage() {
  return (
    <>
      {/* Bespoke split hero: branded welcome + login form */}
      <section className="relative overflow-hidden bg-navy-950 pt-36 text-paper md:pt-44">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-gold-500/12 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-navy-600/30 blur-[120px]" />

        <div className="shell relative pb-20 md:pb-28">
          <nav className="mb-10 flex items-center gap-2 text-xs text-paper/45">
            <Link href="/" className="transition-colors hover:text-gold-300">
              Home
            </Link>
            <span className="text-paper/25">/</span>
            <Link
              href="/investors"
              className="transition-colors hover:text-gold-300"
            >
              Investor Center
            </Link>
            <span className="text-paper/25">/</span>
            <span className="text-paper/70">Investor Portal</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Welcome panel */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold-500" />
                <span className="eyebrow text-gold-400">Investor Portal</span>
              </div>
              <h1 className="mt-6 max-w-xl font-serif text-5xl font-light leading-[1.04] md:text-6xl">
                Your capital,
                <span className="text-gilt"> in full view.</span>
              </h1>
              <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-paper/70">
                A secure, single sign-on gateway to your capital accounts,
                statements, performance and every document we share with you —
                held to the institutional standard your capital expects.
              </p>

              <ul className="mt-12 space-y-px overflow-hidden rounded-sm border border-white/10 bg-white/5">
                {PORTAL_ASSURANCES.map((a) => (
                  <li
                    key={a.title}
                    className="flex items-start gap-4 bg-white/[0.02] p-5"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    <div>
                      <h3 className="text-sm font-semibold text-paper">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-paper/60">
                        {a.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Login */}
            <Reveal delay={0.1}>
              <PortalLogin />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's inside the portal */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="What's inside the portal"
            title={<>Everything your relationship requires.</>}
            intro="Once signed in, partners reach a complete, controlled view of their position with ALRION Pillar Capital."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {PORTAL_FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 4) * 0.07}
              className="flex flex-col bg-paper p-7"
            >
              <span className="font-serif text-2xl text-gold-500">
                0{i + 1}
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy-950">
                {f.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-strong/80">
                {f.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-sm text-slate-strong/65">
            Trouble signing in? Contact your relationship manager or the
            investor relations desk. Not yet a partner?{" "}
            <Link
              href="/investors/capital-requests"
              className="font-semibold text-gold-600 underline-offset-4 hover:underline"
            >
              Register your interest
            </Link>
            .
          </p>
        </Reveal>
      </Section>
    </>
  );
}
