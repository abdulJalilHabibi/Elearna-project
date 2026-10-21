import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import { blogHero } from "./blogData";

export default function BlogHero({ className = "" }) {
  return (
    <section
      className={`bg-cover bg-center bg-no-repeat pt-[180px] pb-[120px] md:pt-[220px] md:pb-[180px] lg:pt-[240px] lg:pb-[210px] ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${blogHero.background})`,
      }}
    >
      <Container>
        <div className="max-w-[630px] text-white">
          <Reveal delay={50}>
            <Eyebrow light className="mb-4 !text-white">
              {blogHero.eyebrow}
            </Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-[35px] font-bold leading-[1.15] tracking-[-1.5px] text-white md:text-[45px] lg:text-[60px] lg:leading-[68px]">
              {blogHero.title}
            </h1>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
