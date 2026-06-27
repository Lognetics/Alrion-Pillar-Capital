import Link from "next/link";
import { NAV } from "@/lib/nav";
import { FIRM } from "@/lib/site";
import { Logo } from "./Logo";

const LEGAL = [
  { href: "/legal/terms", label: "Terms of Use" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/disclosures", label: "Disclosures" },
  { href: "/governance/transparency", label: "Transparency" },
  { href: "/legal/cookies", label: "Cookie Preferences" },
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
          <p className="mt-6 text-sm text-paper/70">{FIRM.email}</p>
          <p className="text-sm text-paper/70">{FIRM.phone}</p>
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

      {/* Disclosure */}
      <div className="border-t border-white/10">
        <div className="shell py-8">
          <p className="text-xs leading-relaxed text-paper/40">
            This website is for informational purposes only and does not constitute an
            offer to sell or a solicitation of an offer to buy any security or investment
            product. Investing involves risk, including the possible loss of principal.
            Past performance is not indicative of future results. Figures shown are
            illustrative. ALRION Pillar Capital provides services to qualified and
            institutional investors in accordance with applicable law.
          </p>
          <div className="mt-6 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-paper/45 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
