"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-paper shadow-2xl lg:hidden"
          >
            <div className="flex h-[4.5rem] items-center justify-between border-b border-line px-5">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center text-2xl text-navy-900"
              >
                ×
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-4">
              {NAV.map((section) => {
                const isOpen = expanded === section.label;
                return (
                  <div key={section.label} className="border-b border-line/70">
                    <button
                      onClick={() => setExpanded(isOpen ? null : section.label)}
                      className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-navy-900"
                    >
                      {section.label}
                      <span
                        className={cn(
                          "text-gold-500 transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
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
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pb-5">
                            {section.columns.map((col) => (
                              <div key={col.heading}>
                                <p className="eyebrow mb-2 text-mist-400">{col.heading}</p>
                                <ul className="space-y-2 border-l border-line pl-4">
                                  {col.links.map((link) => (
                                    <li key={link.href}>
                                      <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="block text-sm text-slate-strong"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="border-t border-line p-5">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center bg-navy-900 py-3.5 text-sm font-semibold text-paper"
              >
                Connect with Alrion
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
