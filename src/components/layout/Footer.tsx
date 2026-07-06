import Link from "next/link";
import { NAV } from "@/lib/nav";
import { FIRM } from "@/lib/site";
import { INVESTOR_PORTAL_URL } from "@/lib/legal";
import { ComplianceDisclosures } from "./ComplianceDisclosures";
import { Logo } from "./Logo";

const LEGAL = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Use" },
  { href: "/legal/disclosures", label: "Full Disclosures" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-paper">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="shell grid gap-8 py-16 md:grid-cols-2 md:items-center">
          <h2 className="font-serif text-3xl font-light leading-tight md:text-4xl">
            Partner with a firm built for the frontier.
          </h2>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link
              href="/investors"
              className="bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
            >
              Investor Relations →
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Sitemap */}
      <div className="shell grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-3">
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/55">
            {FIRM.description}
          </p>
          <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-wide text-gold-400">
            Headquarters
          </p>
          <p className="mt-2 text-sm text-paper/70">{FIRM.address}</p>
          <p className="mt-2 text-sm text-paper/70">{FIRM.phone}</p>
          <p className="text-sm text-paper/70">{FIRM.email}</p>

          <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-wide text-gold-400">
            Investors
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-paper/60">
            <li>
              <a
                href={INVESTOR_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-paper"
              >
                Investor Portal ↗
              </a>
            </li>
            <li>
              <Link href="/investors/capital-requests" className="transition-colors hover:text-paper">
                Request Access
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-paper">
                Contact Investor Relations
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-8 md:col-span-9 md:grid-cols-5">
          {NAV.map((section) => (
            <div key={section.label}>
              <p className="eyebrow mb-4 text-gold-400">{section.label}</p>
              <ul className="space-y-2.5">
                {section.columns[0].links.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/60 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Important disclosures (Rule 506(b) / 3(c)(7) compliance) */}
      <ComplianceDisclosures />

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-4 py-8 text-xs text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="text-paper/30">Form CRS (when applicable)</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
