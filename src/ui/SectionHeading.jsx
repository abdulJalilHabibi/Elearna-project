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
        className={`mt-4 mb-5 max-w-[850px] text-[30px] font-semibold leading-[1.15] tracking-[-1.5px] md:text-[35px] lg:text-[48px] lg:leading-[52px]`}
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-[640px] text-[15px] leading-relaxed text-paragraph md:text-[17px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
