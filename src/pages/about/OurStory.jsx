import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import ExperienceBadge from "./ExperienceBadge";
import { story } from "./about";

export default function OurStory() {
  return (
    <section className="py-[50px] md:py-[110px] lg:pt-[90px] lg:pb-20">
      <Container>
        <div className="flex flex-col-reverse items-stretch gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[50px]">
          {/* Images */}
          <div className="flex flex-1 flex-col items-end lg:max-w-[622px]">
            <div className="flex w-full items-start justify-between gap-[30px]">
              <img
                src={story.officeImage}
                alt="Office"
                className="w-full min-w-0 flex-1 rounded shadow-[0_40px_60px_rgba(11,14,17,0.35)] lg:max-w-[calc(100%-130px)]"
              />
              <ExperienceBadge {...story.experience} />
            </div>
            <div className="relative z-[3] -mt-[35px] pl-[20%] md:-mt-[112px] lg:pl-10">
              <img
                src={story.personImage}
                alt="Student"
                className="w-full rounded shadow-[0_40px_60px_rgba(11,14,17,0.35)]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:max-w-[550px] lg:text-left">
            <SectionHeading
              eyebrow={story.eyebrow}
              title={story.title}
              className="items-center lg:items-start"
            />
            {story.paragraphs.map((p, i) => (
              <p key={i} className={i < story.paragraphs.length - 1 ? "mb-5" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
