import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import Philosophy from "./Philosophy";
import QuoteText from "./QuoteText";
import Vision from "./Vision";
import InstructorCta from "./InstructorCta";
import DiscoverShowcase from "./DiscoverShowcase";
import Clients from "./Clients";
import Blog from "./Blog";
import { aboutClients } from "./about";

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Philosophy />
      <QuoteText />
      <section className="px-[15px]">
        <DiscoverShowcase className="rounded" />
      </section>
      <Clients variant="band" text={aboutClients.text} logos={aboutClients.logos} />
      <Vision />
      <InstructorCta />
      <Blog className="bg-white" />
    </>
  );
}
