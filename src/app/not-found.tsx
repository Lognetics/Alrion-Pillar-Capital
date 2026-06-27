import type { Metadata } from "next";
import { Button, Eyebrow } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for could not be located.",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 text-paper">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-gold-500/12 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-navy-600/30 blur-[120px]" />

      <div className="shell relative py-32 text-center">
        <div className="flex justify-center">
          <Eyebrow light>Error 404</Eyebrow>
        </div>

        <p className="mt-8 font-serif text-[8rem] font-light leading-none text-gilt md:text-[12rem]">
          404
        </p>

        <h1 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-3xl font-light leading-tight md:text-4xl">
          This page has drifted beyond the frontier.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-paper/65">
          The page you are looking for may have moved, been retired or never
          existed. Let us guide you back to firmer ground — our homepage and
          investment platforms are a good place to begin.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="gold">
            Return home
          </Button>
          <Button href="/strategies" variant="ghost">
            Explore strategies
          </Button>
        </div>
      </div>
    </section>
  );
}
