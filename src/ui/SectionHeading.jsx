import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
  delay = 50,
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal delay={delay} className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 sm:mt-4 mb-4 sm:mb-5 max-w-[850px] text-[26px] sm:text-[32px] font-semibold leading-[1.2] tracking-[-1px] md:text-[38px] lg:text-[48px] lg:leading-[52px] lg:tracking-[-1.5px] ${
          light ? "text-white" : "text-heading"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-[640px] text-[15px] leading-relaxed md:text-[17px] ${
            light ? "text-white/80" : "text-paragraph"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}