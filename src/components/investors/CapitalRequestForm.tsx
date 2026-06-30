"use client";

import { useState } from "react";
import {
  INVESTOR_TYPES,
  STRATEGY_OPTIONS,
  TICKET_RANGES,
  TIMEFRAMES,
} from "@/lib/investor-center";

const FIELD =
  "w-full rounded-sm border border-line bg-cloud px-4 py-3 text-sm text-navy-950 outline-none transition-colors placeholder:text-slate-strong/40 focus:border-gold-500 focus:bg-paper";
const LABEL =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-strong/70";

export function CapitalRequestForm() {
  const [form, setForm] = useState({
    organization: "",
    investorType: "",
    strategy: "",
    ticket: "",
    timeframe: "",
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-gold-500/40 bg-paper p-8 text-center shadow-[0_30px_80px_-40px_rgba(10,20,40,0.4)] md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 text-2xl text-gold-600">
          ✓
        </div>
        <h2 className="mt-6 font-serif text-3xl font-light text-navy-950">
          Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-strong/80">
          Your interest has been logged confidentially. Our investor relations
          desk reviews each request against mandate and capacity and typically
          responds within two business days. This is a demo — no information was
          transmitted.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({
              organization: "",
              investorType: "",
              strategy: "",
              ticket: "",
              timeframe: "",
              name: "",
              email: "",
              message: "",
            });
          }}
          className="mt-8 inline-flex items-center gap-2 border border-navy-900/20 px-7 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-line bg-paper p-8 shadow-[0_30px_80px_-40px_rgba(10,20,40,0.4)] md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="cr-org" className={LABEL}>
            Organization
          </label>
          <input
            id="cr-org"
            required
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
            placeholder="Legal entity name"
            className={FIELD}
          />
        </div>

        <div>
          <label htmlFor="cr-type" className={LABEL}>
            Investor type
          </label>
          <select
            id="cr-type"
            required
            value={form.investorType}
            onChange={(e) => update("investorType", e.target.value)}
            className={FIELD}
          >
            <option value="" disabled>
              Select type
            </option>
            {INVESTOR_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cr-strategy" className={LABEL}>
            Strategy of interest
          </label>
          <select
            id="cr-strategy"
            required
            value={form.strategy}
            onChange={(e) => update("strategy", e.target.value)}
            className={FIELD}
          >
            <option value="" disabled>
              Select strategy
            </option>
            {STRATEGY_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cr-ticket" className={LABEL}>
            Ticket size
          </label>
          <select
            id="cr-ticket"
            required
            value={form.ticket}
            onChange={(e) => update("ticket", e.target.value)}
            className={FIELD}
          >
            <option value="" disabled>
              Select range
            </option>
            {TICKET_RANGES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cr-timeframe" className={LABEL}>
            Timeframe
          </label>
          <select
            id="cr-timeframe"
            required
            value={form.timeframe}
            onChange={(e) => update("timeframe", e.target.value)}
            className={FIELD}
          >
            <option value="" disabled>
              Select timeframe
            </option>
            {TIMEFRAMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cr-name" className={LABEL}>
            Contact name
          </label>
          <input
            id="cr-name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Full name"
            className={FIELD}
          />
        </div>

        <div>
          <label htmlFor="cr-email" className={LABEL}>
            Contact email
          </label>
          <input
            id="cr-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@institution.com"
            className={FIELD}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="cr-message" className={LABEL}>
            Message <span className="text-slate-strong/40">(optional)</span>
          </label>
          <textarea
            id="cr-message"
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us about your mandate and objectives."
            className={`${FIELD} resize-none`}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-slate-strong/60">
          Submissions are confidential. By submitting you confirm you are a
          qualified institutional or professional investor.
        </p>
        <button
          type="submit"
          className="shrink-0 bg-gold-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gold-400 hover:shadow-[0_18px_40px_-18px] hover:shadow-gold-500/60"
        >
          Submit request
        </button>
      </div>
    </form>
  );
}
