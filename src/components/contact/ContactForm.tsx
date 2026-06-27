"use client";

import { useState } from "react";

const INVESTOR_TYPES = [
  "Institutional Investor",
  "Pension Fund",
  "Sovereign Wealth Fund",
  "Family Office",
  "Foundation or Endowment",
  "Insurance Company",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col justify-center rounded-sm border border-line bg-cloud p-10">
        <span className="font-serif text-3xl text-gold-500">✓</span>
        <h3 className="mt-5 font-serif text-2xl font-light text-navy-950">
          Thank you — your message is received.
        </h3>
        <p className="mt-4 leading-relaxed text-slate-strong/80">
          A member of our investor relations team will respond within two
          business days. For time-sensitive matters, please reach us directly by
          telephone or email using the directory alongside.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 self-start text-sm font-semibold tracking-wide text-navy-900 underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
        >
          Send another message →
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-navy-950 outline-none transition-colors placeholder:text-slate-strong/40 focus:border-gold-500";
  const labelClass =
    "eyebrow text-[0.7rem] tracking-[0.18em] text-slate-strong/70";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-line bg-paper p-8 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Full name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Whitmore"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Organization</span>
          <input
            required
            name="organization"
            type="text"
            autoComplete="organization"
            placeholder="Institution or firm"
            className={fieldClass}
          />
        </label>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Email address</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@institution.com"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Investor type</span>
          <select required name="investorType" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a category
            </option>
            {INVESTOR_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-6 block">
        <span className={labelClass}>How can we help?</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us about your mandate, allocation timeline or area of interest."
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="group mt-8 inline-flex items-center justify-center gap-2 bg-gold-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gold-400 hover:shadow-[0_18px_40px_-18px] hover:shadow-gold-500/60"
      >
        Submit enquiry
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
          →
        </span>
      </button>

      <p className="mt-6 text-xs leading-relaxed text-slate-strong/55">
        By submitting this form you consent to ALRION Pillar Capital contacting
        you regarding your enquiry. We treat all correspondence in strict
        confidence and never share your details with third parties.
      </p>
    </form>
  );
}
