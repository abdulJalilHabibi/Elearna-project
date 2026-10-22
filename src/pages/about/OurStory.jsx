import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/ui/Reveal";
import ExperienceBadge from "./ExperienceBadge";
import { story } from "./about";

export default function OurStory({ className = "" }) {
  return (
    <section className={`py-12 sm:py-16 md:py-[110px] lg:pt-[90px] lg:pb-20 ${className}`}>
      <Container>
        <div className="flex flex-col-reverse items-stretch gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[50px]">
          {/* Images */}
          <Reveal delay={150} className="relative flex flex-1 flex-col items-end lg:max-w-[622px]">
            <div className="w-full flex justify-start">
              <img
                src={story.officeImage}
                alt="Office"
                className="w-full min-w-0 rounded shadow-[0_40px_60px_rgba(11,14,17,0.35)] transition-transform duration-500 hover:scale-[1.02] lg:max-w-[calc(100%-140px)]"
              />
            </div>

            {/* Experience badge with 4-sided padding, centered between the two cards */}
            <div className="absolute -top-6  ">
              <ExperienceBadge years={story.experience.years} label={story.experience.label} />
            </div>

            <div className="relative z-[3] mt-2 w-full pl-[10%] sm:mt-4 sm:pl-[20%] md:mt-6 lg:-mt-[112px] lg:pl-10">
              <img
                src={story.personImage}
                alt="Student"
                className="w-full rounded shadow-[0_40px_60px_rgba(11,14,17,0.35)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </Reveal>

          {/* Text */}
          <div className="flex-1 text-center lg:max-w-[550px] lg:text-left">
            <SectionHeading
              eyebrow={story.eyebrow}
              title={story.title}
              className="items-center lg:items-start"
            />
            {story.paragraphs.map((p, i) => (
              <Reveal key={i} delay={150 + i * 80}>
                <p className={`text-[15px] leading-relaxed text-paragraph sm:text-[16px] ${i < story.paragraphs.length - 1 ? "mb-5" : ""}`}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
