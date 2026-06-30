"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_CATEGORIES } from "@/lib/investor-center";

export function FaqAccordion() {
  // Open the first item of the first category by default.
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <div className="space-y-14">
      {FAQ_CATEGORIES.map((group, gi) => (
        <div key={group.category}>
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl text-gold-500">
              {String(gi + 1).padStart(2, "0")}
            </span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-700">
              {group.category}
            </h3>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="mt-5 divide-y divide-line border-y border-line">
            {group.items.map((item, ii) => {
              const id = `${gi}-${ii}`;
              const isOpen = open === id;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-medium text-navy-950">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-gold-500 text-gold-600"
                          : "border-line text-slate-strong/60"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 leading-relaxed text-slate-strong/80">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
