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
      <Conviction />
      <ProcessTimeline />
      <Impact />
      <InsightsPreview />
      <GlobalPresence />
    </>
  );
}
