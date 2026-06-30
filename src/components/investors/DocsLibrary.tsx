"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DOCUMENTS, DOC_CATEGORIES, type DocCategory } from "@/lib/investor-center";

type Tab = "All" | DocCategory;

const TABS: Tab[] = ["All", ...DOC_CATEGORIES];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function DocsLibrary() {
  const [active, setActive] = useState<Tab>("All");

  const docs =
    active === "All"
      ? DOCUMENTS
      : DOCUMENTS.filter((d) => d.category === active);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-line pb-5">
        {TABS.map((tab) => {
          const isActive = tab === active;
          const count =
            tab === "All"
              ? DOCUMENTS.length
              : DOCUMENTS.filter((d) => d.category === tab).length;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-navy-900 text-paper"
                  : "border border-line text-slate-strong/80 hover:border-gold-500 hover:text-gold-600"
              }`}
            >
              {tab}
              <span
                className={`text-xs ${
                  isActive ? "text-gold-300" : "text-slate-strong/45"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Rows */}
      <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-line bg-line">
        <AnimatePresence mode="popLayout" initial={false}>
          {docs.map((doc) => (
            <motion.div
              key={doc.title}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 bg-paper p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line bg-cloud text-[0.65rem] font-bold tracking-wide text-navy-700">
                  {doc.type}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[0.95rem] font-semibold text-navy-950">
                    {doc.title}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-strong/65">
                    <span className="inline-flex items-center rounded-full bg-navy-900/5 px-2.5 py-0.5 font-medium text-navy-700">
                      {doc.category}
                    </span>
                    <span>{formatDate(doc.date)}</span>
                    <span className="text-slate-strong/40">·</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                disabled
                title="Sign in to download"
                className="inline-flex shrink-0 cursor-not-allowed items-center gap-2 self-start rounded-sm border border-line px-4 py-2 text-xs font-semibold text-slate-strong/40 sm:self-auto"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-strong/30" />
                Download
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {docs.length === 0 && (
        <p className="mt-8 text-center text-sm text-slate-strong/60">
          No documents in this category.
        </p>
      )}
    </div>
  );
}
