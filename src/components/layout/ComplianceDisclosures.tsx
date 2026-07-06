"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { DISCLOSURES } from "@/lib/legal";

/* IMPORTANT DISCLOSURES block. Always expanded on desktop; collapsible
   on mobile to keep the footer manageable on small screens. */
export function ComplianceDisclosures() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-white/10">
      <div className="shell py-10">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow text-gold-400">Important Disclosures</p>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="text-xs font-semibold uppercase tracking-wide text-paper/60 transition-colors hover:text-paper lg:hidden"
          >
            {open ? "Hide" : "Show"}
          </button>
        </div>

        <div
          className={cn(
            "mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3",
            open ? "grid" : "hidden",
            "lg:grid",
          )}
        >
          {DISCLOSURES.map((d) => (
            <div key={d.title}>
              <p className="text-[0.72rem] font-semibold text-paper/80">{d.title}</p>
              <p className="mt-1 text-[0.72rem] leading-[1.55] text-paper/45">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
