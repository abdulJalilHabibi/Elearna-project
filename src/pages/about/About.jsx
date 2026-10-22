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
  const p = "p-4 sm:p-6 md:p-8 lg:p-10";
  return (
    <div className="w-full">
      <main className="w-full">
        <AboutHero className={p} />
        <OurStory className={p} />
        <Philosophy className={p} />
        <QuoteText className={p} />
        <section className={`px-4 sm:px-[15px] ${p}`}>
          <DiscoverShowcase className="rounded" />
        </section>
        <Clients className={p} variant="band" text={aboutClients.text} logos={aboutClients.logos} />
        <Vision className={p} />
        <InstructorCta className={p} />
        <Blog className={`bg-white ${p}`} />
      </main>
    </div>
  );
}
