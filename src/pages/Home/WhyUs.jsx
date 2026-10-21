import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import StatCounter from "./StatCounter";
import HelpBox from "./HelpBox";
import { whyUs } from "./content";

export default function WhyUs({className}) {
  const { video, decorations } = whyUs;

  return (
    <section className={`${className} pt-20 pb-[90px]`}>
      <Container>
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={whyUs.title}
          align="center"
          className="mx-auto  mb-12 text-heading font-semibold max-w-[600px]"
        />

        <div className="flex flex-col items-stretch gap-[50px] lg:flex-row lg:items-center lg:justify-between">
          {/* Left: video + image with decorative circles */}
          <div
            className="flex flex-1 items-end gap-5 bg-no-repeat pb-5 [background-position:0%_100%,100%_0%] [background-size:40%,50%]"
            style={{
              backgroundImage: `url(${decorations.yellowCircle}), url(${decorations.outlineCircle})`,
            }}
          >
            <div className="relative z-[3] mb-0 max-w-none flex-1 overflow-hidden rounded lg:mb-[50px] lg:max-w-[243px]">
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
            <div className="max-w-none flex-1 lg:max-w-[366px]">
              <img src={whyUs.image} alt="Student" className="w-full rounded" />
            </div>
          </div>

          {/* Right: copy, counters, help box */}
          <div className="flex-1">
            <p className="mb-[30px] text-center lg:text-left">{whyUs.text}</p>
            <div className="mb-10 flex flex-col justify-between gap-[30px] sm:flex-row">
              {whyUs.stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-1 items-stretch gap-[30px]">
                  <StatCounter {...stat} />
                  {i < whyUs.stats.length - 1 && <span className="hidden w-px bg-heading sm:block" />}
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
