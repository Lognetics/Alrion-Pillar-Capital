"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import type { Download } from "@/lib/research";

const typeStyle: Record<Download["type"], string> = {
  Report: "bg-gold-500/15 text-gold-600 border-gold-500/30",
  "White Paper": "bg-navy-900/8 text-navy-900 border-navy-900/15",
  Factsheet: "bg-slate-strong/8 text-slate-strong border-line",
  Letter: "bg-sky-500/10 text-sky-700 border-sky-500/25",
  Impact: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25",
};

export function DownloadFilter({ items }: { items: Download[] }) {
  const types = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.type)))],
    [items],
  );
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      const okType = active === "All" || i.type === active;
      const okQuery = q === "" || i.title.toLowerCase().includes(q);
      return okType && okQuery;
    });
  }, [items, active, query]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors",
                active === t
                  ? "border-navy-950 bg-navy-950 text-paper"
                  : "border-line text-slate-strong/70 hover:border-gold-500 hover:text-gold-600",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="relative md:w-72">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-strong/40">
            ⌕
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources…"
            className="w-full rounded-sm border border-line bg-cloud py-2.5 pl-9 pr-4 text-sm text-navy-950 outline-none transition-colors placeholder:text-slate-strong/40 focus:border-gold-500 focus:bg-paper"
          />
        </div>
      </div>

      {/* Rows */}
      <div className="mt-8 overflow-hidden rounded-sm border border-line">
        {filtered.length === 0 ? (
          <p className="bg-paper px-6 py-12 text-center text-sm text-slate-strong/60">
            No resources match your search.
          </p>
        ) : (
          filtered.map((d, i) => (
            <div
              key={d.title}
              className={cn(
                "group grid items-center gap-4 bg-paper px-6 py-5 transition-colors hover:bg-cloud md:grid-cols-12",
                i !== filtered.length - 1 && "border-b border-line",
              )}
            >
              <div className="md:col-span-2">
                <span
                  className={cn(
                    "inline-block rounded-full border px-3 py-1 text-[0.7rem] font-semibold tracking-wide",
                    typeStyle[d.type],
                  )}
                >
                  {d.type}
                </span>
              </div>
              <div className="md:col-span-6">
                <p className="font-serif text-lg font-light text-navy-950">{d.title}</p>
              </div>
              <div className="text-xs text-slate-strong/55 md:col-span-2">
                {d.format} · {d.size} · {d.date}
              </div>
              <div className="md:col-span-2 md:text-right">
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm border border-line px-4 py-2 text-xs font-semibold text-slate-strong/55"
                  title="Download coming soon"
                >
                  <span aria-hidden>↓</span> Download
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <p className="mt-5 text-xs text-slate-strong/50">
        Showing {filtered.length} of {items.length} resources. Downloads are illustrative.
      </p>
    </div>
  );
}
