import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import PhilosophyCard from "./PhilosophyCard";
import { philosophy } from "./about";

export default function Philosophy({ className = "" }) {
  return (
    <section className={`py-12 sm:py-16 md:py-20 ${className}`}>
      <Container>
        <div className="flex flex-col">
          <Reveal delay={50}>
            <Eyebrow>{philosophy.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mt-3 text-[22px] font-semibold tracking-[-1px] text-heading sm:text-[28px] md:text-[30px] lg:text-[35px] lg:leading-[42px]">
              {philosophy.title}
            </h3>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-6 pt-8 sm:grid-cols-2 sm:gap-x-[30px] sm:gap-y-10 sm:pt-10 lg:grid-cols-4 lg:pt-[50px]">
            {philosophy.categories.map((c, i) => (
              <Reveal key={c.label} delay={150 + i * 80}>
                <PhilosophyCard {...c} arrowIcon={philosophy.arrowIcon} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
