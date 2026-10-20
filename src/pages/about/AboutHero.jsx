import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import { aboutHero } from "./about";

export default function AboutHero() {
  return (
    <section
      className="bg-cover bg-center pt-[180px] pb-[100px] lg:pt-[210px] lg:pb-[210px]"
      style={{
        backgroundImage: `linear-gradient(rgba(8,16,18,0.7), rgba(8,16,18,0.7)), url(${aboutHero.background})`,
      }}
    >
      <Container>
        <div className="max-w-[570px]">
          <Eyebrow light>{aboutHero.eyebrow}</Eyebrow>
          <h1 className="mt-4 text-[35px] leading-[1.15] tracking-[-1.5px] text-white md:text-[45px] lg:text-[60px] lg:leading-[68px]">
            {aboutHero.title}
          </h1>
        </div>
      </Container>
    </section>
  );
}
