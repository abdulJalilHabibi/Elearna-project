import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import { coursesHero } from "./coursesData";

export default function CoursesHero({ className = "" }) {
  return (
    <section
      className={`lg:p-10 relative bg-cover bg-center pt-[150px] pb-[100px] sm:pt-[170px] sm:pb-[130px] lg:pt-[210px] lg:pb-[184px] ${className}`}
      style={{
        backgroundImage: `linear-gradient(96deg, rgba(14, 33, 37, 0.25) 0%, rgba(15, 37, 42, 0.95) 100%), url(${coursesHero.background})`,
      }}
    >
      <Container>
        <div className="flex flex-col items-center text-center lg:items-end lg:text-left">
          <div className="w-full max-w-[517px]">
            <Reveal delay={50}>
              <Eyebrow light className="!text-white mb-2">
                {coursesHero.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white sm:text-[44px] md:text-[52px] lg:text-[60px] lg:leading-[68px] lg:tracking-[-2px]">
                {coursesHero.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
