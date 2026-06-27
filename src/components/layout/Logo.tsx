import Link from "next/link";
import { cn } from "@/lib/cn";

/** Wordmark + pillar glyph. Swap the glyph for the official logo when available. */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ALRION Pillar Capital — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <svg
        width="26"
        height="30"
        viewBox="0 0 26 30"
        fill="none"
        className="shrink-0"
        aria-hidden
      >
        <rect x="0" y="8" width="4" height="22" fill="currentColor" className="text-gold-500" />
        <rect x="7.3" y="3" width="4" height="27" fill="currentColor" className="text-gold-500" />
        <rect x="14.6" y="8" width="4" height="22" fill="currentColor" className="text-gold-500" />
        <rect x="21.9" y="0" width="4" height="30" fill="currentColor" className="text-gold-400" />
      </svg>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[0.95rem] font-semibold tracking-[0.18em]",
            light ? "text-paper" : "text-navy-950",
          )}
        >
          ALRION
        </span>
        <span
          className={cn(
            "block text-[0.6rem] font-medium tracking-[0.34em]",
            light ? "text-paper/55" : "text-mist-500",
          )}
        >
          PILLAR CAPITAL
        </span>
      </span>
    </Link>
  );
}
