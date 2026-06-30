import { Hero } from "@/components/home/Hero";
import { StatBand } from "@/components/home/StatBand";
import { Marquee } from "@/components/home/Marquee";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { Ecosystem } from "@/components/home/Ecosystem";
import { WhyAlrion } from "@/components/home/WhyAlrion";
import { Industries } from "@/components/home/Industries";
import { Conviction } from "@/components/home/Conviction";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Impact } from "@/components/home/Impact";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { ImageBand } from "@/components/ui/media";
import { Button } from "@/components/ui/primitives";
import { IMG } from "@/lib/imagery";

export default function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <Marquee />
      <WhoWeAre />
      <Ecosystem />
      <WhyAlrion />
      <Industries />
      <ImageBand src={IMG.cityDusk} alt="Global capital markets at dusk" minH="min-h-[34rem]">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-400">Built for institutions</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] md:text-5xl">
            From the world&rsquo;s capital centers to the frontier of innovation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-paper/70">
            Alrion connects long-term institutional capital with the companies,
            assets and ideas reshaping the global economy — with the discipline,
            governance and transparency our partners expect.
          </p>
          <div className="mt-8">
            <Button href="/investors" variant="gold">
              Partner with Alrion
            </Button>
          </div>
        </div>
      </ImageBand>
      <Conviction />
      <ProcessTimeline />
      <Impact />
      <InsightsPreview />
      <GlobalPresence />
    </>
  );
}
