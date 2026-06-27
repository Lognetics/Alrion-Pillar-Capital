import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* — Section eyebrow with animated gold rule ———————————————— */
export function Eyebrow({
  children,
  className,
  light,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-gold-500" />
      <span className={cn("eyebrow", light ? "text-gold-400" : "text-gold-600")}>
        {children}
      </span>
    </div>
  );
}

/* — Buttons —————————————————————————————————————————————————— */
type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "gold" | "navy" | "ghost" | "outline";
};

export function Button({ variant = "gold", className, children, ...props }: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";
  const variants = {
    gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 hover:shadow-[0_18px_40px_-18px] hover:shadow-gold-500/60",
    navy: "bg-navy-900 text-paper hover:bg-navy-800",
    outline:
      "border border-navy-900/20 text-navy-900 hover:border-gold-500 hover:text-gold-600",
    ghost:
      "border border-white/15 text-paper hover:border-gold-400 hover:text-gold-300",
  };
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

/* — Section heading block ——————————————————————————————————— */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow
          light={light}
          className={align === "center" ? "justify-center" : ""}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "mt-6 text-balance font-serif text-4xl font-light leading-[1.05] md:text-5xl",
          light ? "text-paper" : "text-navy-950",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 text-pretty text-lg leading-relaxed",
            light ? "text-paper/70" : "text-slate-strong/80",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
