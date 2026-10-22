import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import StatCounter from "./StatCounter";
import HelpBox from "./HelpBox";
import { whyUs } from "./content";

export default function WhyUs({ className = "" }) {
  const { video, decorations } = whyUs;

  return (
    <section className={`pt-14 pb-16 sm:pt-20 sm:pb-[90px] ${className}`}>
      <Container>
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={whyUs.title}
          align="center"
          className="mx-auto mb-10 max-w-[600px] font-semibold text-heading sm:mb-12"
        />

        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[50px]">
          {/* Left: video + image with decorative circles */}
          <div
            className="mx-auto flex w-full max-w-[620px] flex-1 items-end gap-3.5 bg-no-repeat pb-5 sm:gap-5 lg:mx-0 [background-position:0%_100%,100%_0%] [background-size:40%,50%]"
            style={{
              backgroundImage: `url(${decorations.yellowCircle}), url(${decorations.outlineCircle})`,
            }}
          >
            <div className="relative z-[3] mb-0 flex-1 overflow-hidden rounded sm:mb-8 lg:mb-[50px] lg:max-w-[243px]">
              <video
                className="h-full w-full object-cover"
                poster={video.poster}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video.mp4} type="video/mp4" />
                <source src={video.webm} type="video/webm" />
              </video>
            </div>
            <div className="flex-[1.3] lg:max-w-[366px]">
              <img src={whyUs.image} alt="Student" className="w-full rounded object-cover" />
            </div>
          </div>

          {/* Right: copy, counters, help box */}
          <div className="flex-1">
            <p className="mb-6 text-center leading-relaxed text-paragraph sm:mb-[30px] lg:text-left">
              {whyUs.text}
            </p>
            <div className="mb-8 grid grid-cols-3 gap-4 sm:mb-10 sm:flex sm:flex-row sm:justify-between sm:gap-[30px]">
              {whyUs.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-1 items-center justify-center sm:justify-between lg:justify-start gap-4 sm:gap-[30px]"
                >
                  <StatCounter {...stat} />
                  {i < whyUs.stats.length - 1 && (
                    <span className="hidden h-12 w-px bg-heading/20 sm:block" />
                  )}
                </div>
              ))}
            </div>
            <HelpBox />
          </div>
        </div>
      </Container>
    </section>
  );
}