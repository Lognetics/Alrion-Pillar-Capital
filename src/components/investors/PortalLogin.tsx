import Link from "next/link";
import { JUNIPER_SQUARE_URL } from "@/lib/legal";

export function PortalLogin() {
  return (
    <div className="relative rounded-sm border border-line bg-paper p-8 shadow-[0_30px_80px_-40px_rgba(10,20,40,0.4)] md:p-10">
      <div className="mb-8">
        <span className="eyebrow text-gold-600">Secure sign-in</span>
        <h2 className="mt-4 font-serif text-3xl font-light text-navy-950">
          Access your portal
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-strong/75">
          The Alrion investor portal is hosted by Juniper Square. Sign in with the
          credentials issued during onboarding to reach your capital accounts,
          statements, performance reporting and document vault.
        </p>
      </div>

      <a
        href={JUNIPER_SQUARE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 bg-navy-900 px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-navy-800"
      >
        Sign in on Juniper Square
        <span aria-hidden>↗</span>
      </a>

      <p className="mt-4 text-center text-xs text-slate-strong/50">
        Sessions are protected by Juniper Square with multi-factor authentication.
      </p>

      <div className="relative my-6 text-center">
        <span className="relative z-10 bg-paper px-3 text-xs uppercase tracking-wider text-slate-strong/50">
          or
        </span>
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line" />
      </div>

      <p className="text-center text-sm leading-relaxed text-slate-strong/70">
        Not yet a partner?{" "}
        <Link
          href="/investors/capital-requests"
          className="font-semibold text-gold-600 underline-offset-4 hover:underline"
        >
          Request access
        </Link>
      </p>
    </div>
  );
}
