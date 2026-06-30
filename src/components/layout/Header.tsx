"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, type NavSection } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = NAV.find((s) => s.label === open);

  // At the very top of every page the header floats over a dark navy hero.
  // In that state the bar is transparent and must use light text; once the
  // background turns to paper (scrolled or a mega-menu is open) text goes dark.
  const onDark = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled || open
          ? "border-b border-line/80 bg-paper/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      {/* Slim top utility bar */}
      <div className={cn("hidden border-b lg:block", onDark ? "border-white/10" : "border-navy-950/5")}>
        <div
          className={cn(
            "shell flex h-9 items-center justify-end gap-6 text-[0.72rem] tracking-wide",
            onDark ? "text-paper/60" : "text-mist-500",
          )}
        >
          <Link href="/global" className={cn("link-quiet", onDark ? "hover:text-paper" : "hover:text-navy-900")}>Global Presence</Link>
          <Link href="/insights/newsletter" className={cn("link-quiet", onDark ? "hover:text-paper" : "hover:text-navy-900")}>Newsletter</Link>
          <Link href="/investors/portal" className={cn("link-quiet font-medium", onDark ? "text-paper" : "text-navy-900")}>
            Investor Portal ↗
          </Link>
        </div>
      </div>

      <div className="shell flex h-[4.5rem] items-center justify-between">
        <Logo light={onDark} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors",
              onDark ? "text-paper/90 hover:text-gold-300" : "text-navy-900 hover:text-gold-600",
            )}
          >
            Home
          </Link>
          {NAV.map((section) => (
            <button
              key={section.label}
              onMouseEnter={() => setOpen(section.label)}
              onFocus={() => setOpen(section.label)}
              className={cn(
                "relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors",
                open === section.label
                  ? "text-gold-600"
                  : onDark
                    ? "text-paper/90 hover:text-gold-300"
                    : "text-navy-900 hover:text-gold-600",
              )}
            >
              {section.label}
              {/* "+" signals that this item reveals a sub-menu */}
              <span
                aria-hidden
                className={cn(
                  "text-[0.7em] leading-none text-gold-500 transition-transform duration-300",
                  open === section.label && "rotate-45",
                )}
              >
                +
              </span>
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-px h-px origin-left bg-gold-500 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open === section.label ? "scale-x-100" : "scale-x-0",
                )}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              "hidden px-5 py-2.5 text-sm font-semibold transition-colors lg:inline-flex",
              onDark
                ? "border border-white/25 text-paper hover:border-gold-400 hover:text-gold-300"
                : "bg-navy-900 text-paper hover:bg-gold-500 hover:text-navy-950",
            )}
          >
            Connect
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "flex h-10 w-10 items-center justify-center lg:hidden",
              onDark ? "text-paper" : "text-navy-900",
            )}
            aria-label="Open menu"
          >
            <span className="space-y-1.5">
              <span className={cn("block h-px w-6", onDark ? "bg-paper" : "bg-navy-900")} />
              <span className={cn("block h-px w-6", onDark ? "bg-paper" : "bg-navy-900")} />
              <span className={cn("block h-px w-4", onDark ? "bg-paper" : "bg-navy-900")} />
            </span>
          </button>
        </div>
      </div>

      {/* Desktop mega panel */}
      <AnimatePresence>
        {active && <MegaPanel key={active.label} section={active} />}
      </AnimatePresence>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MegaPanel({ section }: { section: NavSection }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-full hidden border-b border-line bg-paper/97 backdrop-blur-xl lg:block"
    >
      <div className="shell grid grid-cols-12 gap-10 py-10">
        <div className="col-span-8 grid grid-cols-3 gap-8">
          {section.columns.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow mb-4 text-mist-500">{col.heading}</p>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group block rounded-sm py-1.5 transition-colors"
                    >
                      <span className="text-[0.95rem] font-medium text-navy-900 transition-colors group-hover:text-gold-600">
                        {link.label}
                      </span>
                      {link.desc && (
                        <span className="block text-xs leading-snug text-mist-500">
                          {link.desc}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {section.feature && (
          <Link
            href={section.feature.href}
            className="group relative col-span-4 flex flex-col justify-end overflow-hidden bg-navy-950 p-8 text-paper"
          >
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
            <div className="relative">
              <p className="eyebrow text-gold-400">{section.feature.eyebrow}</p>
              <h3 className="mt-4 font-serif text-2xl font-light leading-tight">
                {section.feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">
                {section.feature.blurb}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
                {section.feature.cta}
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
