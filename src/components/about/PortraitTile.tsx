import { cn } from "@/lib/cn";

/** Elegant gradient + initials tile used in place of portrait photos. */
export function PortraitTile({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-500/20 blur-2xl" />
      <span className="absolute bottom-3 right-4 h-px w-10 bg-gold-500/60" />
      <span className="relative font-serif text-5xl font-light text-gilt">
        {initials}
      </span>
    </div>
  );
}
