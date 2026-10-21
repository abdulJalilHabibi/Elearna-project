import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import VisionStatBox from "./VisionStatBox";
import { vision } from "./about";

function CheckIcon() {
  return (
    <svg className="mt-1.5 h-4 w-4 shrink-0 text-brand" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path d="M4.5 8.2 7 10.5l4.5-5" stroke="#0f252a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Vision({ className = "" }) {
  const [jobStat, seasonStat] = vision.stats;

  return (
    <section className={`py-[50px] md:py-[90px] ${className}`}>
      <Container>
        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Image + stat collage */}
          <div className="flex flex-1 items-center gap-5 md:gap-[30px] lg:max-w-[660px]">
            <div className="flex flex-1 flex-col items-end gap-5 md:gap-[30px]">
              <img src={vision.imageOne} alt="Team member" className="w-full rounded" />
              <div className="w-full"><VisionStatBox {...jobStat} /></div>
            </div>
            <div className="flex flex-1 flex-col gap-5 md:gap-[30px]">
              <VisionStatBox {...seasonStat} />
              <img src={vision.imageTwo} alt="Team member" className="w-full rounded" />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-1 flex-col items-center text-center lg:max-w-[521px] lg:items-start lg:text-left">
            <SectionHeading eyebrow={vision.eyebrow} title={vision.title} className="items-center lg:items-start" />
            <p className="mb-5 md:mb-[30px]">{vision.text}</p>
            <ul className="flex flex-col gap-2.5 text-left">
              {vision.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
