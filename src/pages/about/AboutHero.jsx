import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import { aboutHero } from "./about";

export default function AboutHero({ className = "" }) {
  return (
    <section
      className={`bg-cover bg-center pt-[180px] pb-[100px] lg:pt-[210px] lg:pb-[210px] ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(8,16,18,0.7), rgba(8,16,18,0.7)), url(${aboutHero.background})`,
      }}
    >
      <Container>
        <div className="max-w-[570px] text-white">
          <Reveal delay={50}>
            <Eyebrow light className="!text-white">{aboutHero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 text-[35px] font-bold leading-[1.15] tracking-[-1.5px] text-white md:text-[45px] lg:text-[60px] lg:leading-[68px]">
              {aboutHero.title}
            </h1>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
