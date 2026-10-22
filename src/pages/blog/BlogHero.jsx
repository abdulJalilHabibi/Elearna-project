import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import { blogHero } from "./blogData";

export default function BlogHero({ className = "" }) {
  return (
    <section
      className={`bg-cover bg-center bg-no-repeat !pt-[140px] pb-[80px] sm:!pt-[180px] sm:pb-[110px] md:!pt-[210px] md:pb-[160px] lg:!pt-[240px] lg:pb-[210px] ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${blogHero.background})`,
      }}
    >
      <Container>
        <div className="max-w-[630px] text-white">
          <Reveal delay={50}>
            <Eyebrow light className="mb-3 sm:mb-4 !text-white">
              {blogHero.eyebrow}
            </Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-[28px] sm:text-[36px] font-bold leading-[1.18] tracking-[-1px] text-white md:text-[45px] lg:text-[60px] lg:leading-[68px] lg:tracking-[-1.5px]">
              {blogHero.title}
            </h1>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}