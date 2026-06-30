"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";

const INTERESTS = [
  "Market Intelligence",
  "Economic Outlook",
  "Investment Themes",
  "White Papers",
  "Impact & ESG",
];

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  function toggle(topic: string) {
    setSelected((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus("error");
      return;
    }
    // Demo submit — no network call.
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-sm border border-gold-500/40 bg-gold-500/10 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 font-serif text-2xl text-navy-950">
          ✓
        </div>
        <h3 className="mt-6 font-serif text-2xl font-light text-navy-950">
          You&rsquo;re subscribed.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">
          A confirmation is on its way to{" "}
          <span className="font-semibold text-navy-950">{email}</span>. You&rsquo;ll receive
          our next edition{selected.length > 0 ? ", focused on " + selected.join(", ") : ""}.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setEmail("");
            setSelected([]);
          }}
          className="mt-6 text-sm font-semibold text-gold-600 underline-offset-4 hover:underline"
        >
          Subscribe another address
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-sm border border-line bg-paper p-8 text-left">
      <label htmlFor="newsletter-email" className="text-sm font-semibold text-navy-950">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="you@institution.com"
        className={cn(
          "mt-2 w-full rounded-sm border bg-cloud px-4 py-3 text-navy-950 outline-none transition-colors placeholder:text-slate-strong/40 focus:border-gold-500 focus:bg-paper",
          status === "error" ? "border-rose-400" : "border-line",
        )}
      />
      {status === "error" && (
        <p className="mt-2 text-xs font-semibold text-rose-500">
          Please enter a valid email address.
        </p>
      )}

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy-950">
          What would you like to receive? <span className="font-normal text-slate-strong/55">(optional)</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {INTERESTS.map((topic) => {
            const active = selected.includes(topic);
            return (
              <button
                type="button"
                key={topic}
                onClick={() => toggle(topic)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors",
                  active
                    ? "border-gold-500 bg-gold-500/15 text-gold-600"
                    : "border-line text-slate-strong/70 hover:border-gold-500 hover:text-gold-600",
                )}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-gold-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_18px_40px_-18px] hover:shadow-gold-500/60"
      >
        Subscribe
        <span aria-hidden>→</span>
      </button>

      <p className="mt-4 text-xs leading-relaxed text-slate-strong/50">
        Demo form — no email is sent and no data is stored. We never share your address.
      </p>
    </form>
  );
}
