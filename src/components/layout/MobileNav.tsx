"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock the background from scrolling while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  /* The drawer is always mounted and toggled with CSS transforms.
     This avoids any mount-timing race so the very first tap works. */
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-navy-950/50 backdrop-blur-sm transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Drawer */}
      <div
        className={cn(
          "absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-paper shadow-2xl transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-line px-5">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center text-2xl text-navy-900"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-2">
          {/* Direct Home link */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between border-b border-line/70 py-4 text-base font-medium text-navy-900"
          >
            Home
          </Link>

          {NAV.map((section) => {
            const isOpen = expanded === section.label;
            return (
              <div key={section.label} className="border-b border-line/70">
                <button
                  onClick={() => setExpanded(isOpen ? null : section.label)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-navy-900"
                >
                  {section.label}
                  <span
                    className={cn(
                      "text-xl leading-none text-gold-500 transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-4">
                      {/* Section landing page */}
                      <Link
                        href={section.href}
                        onClick={onClose}
                        className="block text-sm font-semibold text-gold-600"
                      >
                        {section.label} overview →
                      </Link>
                      {section.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="eyebrow mb-2 text-mist-400">{col.heading}</p>
                          <ul className="space-y-2 border-l border-line pl-4">
                            {col.links.map((link) => (
                              <li key={`${col.heading}-${link.href}-${link.label}`}>
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
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="shrink-0 border-t border-line p-5">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center bg-navy-900 py-3.5 text-sm font-semibold text-paper"
          >
            Connect with Alrion
          </Link>
        </div>
      </div>
    </div>
  );
}
