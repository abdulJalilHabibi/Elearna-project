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
    <div className="w-full overflow-hidden">
      <main className="w-full">
        <AboutHero className="p-10"/>
        <OurStory className="p-10"/>
        <Philosophy className="p-10"/>
        <QuoteText className="p-10"/>
        <section className="">
          <DiscoverShowcase className="rounded " />
        </section>
        <Clients className="p-10" variant="band" text={aboutClients.text} logos={aboutClients.logos} />
        <Vision className="p-10" />
        <InstructorCta className="p-10"/>
        <Blog className="bg-white p-10" />
      </main>
    </div>
  );
}
