"use client";

import { useState } from "react";
import Link from "next/link";

export function PortalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative rounded-sm border border-line bg-paper p-8 shadow-[0_30px_80px_-40px_rgba(10,20,40,0.4)] md:p-10">
      <div className="mb-8">
        <span className="eyebrow text-gold-600">Secure sign-in</span>
        <h2 className="mt-4 font-serif text-3xl font-light text-navy-950">
          Access your portal
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-strong/75">
          Sign in with the credentials issued during onboarding. Sessions are
          protected with multi-factor authentication.
        </p>
      </div>

      {submitted ? (
        <div
          role="status"
          className="rounded-sm border border-gold-500/40 bg-gold-500/10 p-6 text-sm leading-relaxed text-navy-900"
        >
          <p className="font-semibold text-navy-950">This is a demo portal.</p>
          <p className="mt-2 text-slate-strong/80">
            Authentication is not connected in this preview. In production you
            would now be securely signed in to your capital accounts, statements
            and document vault.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 text-sm font-semibold text-gold-600 underline-offset-4 hover:underline"
          >
            Back to sign-in
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="portal-email"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-strong/70"
            >
              Email address
            </label>
            <input
              id="portal-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@institution.com"
              className="w-full rounded-sm border border-line bg-cloud px-4 py-3 text-sm text-navy-950 outline-none transition-colors placeholder:text-slate-strong/40 focus:border-gold-500 focus:bg-paper"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="portal-password"
                className="text-xs font-semibold uppercase tracking-wider text-slate-strong/70"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="text-xs font-medium text-gold-600 underline-offset-4 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <input
              id="portal-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full rounded-sm border border-line bg-cloud px-4 py-3 text-sm text-navy-950 outline-none transition-colors placeholder:text-slate-strong/40 focus:border-gold-500 focus:bg-paper"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-navy-900 px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-navy-800"
          >
            Sign in
          </button>

          <div className="relative py-1 text-center">
            <span className="relative z-10 bg-paper px-3 text-xs uppercase tracking-wider text-slate-strong/50">
              or
            </span>
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line" />
          </div>

          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-navy-900/20 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
          >
            Continue with institutional SSO
          </button>

          <p className="pt-2 text-center text-xs leading-relaxed text-slate-strong/60">
            Not yet a partner?{" "}
            <Link
              href="/investors/capital-requests"
              className="font-semibold text-gold-600 underline-offset-4 hover:underline"
            >
              Register your interest
            </Link>
          </p>
        </form>
      )}
    </div>
  );
}
