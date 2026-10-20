import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 mb-5 text-[30px] leading-[1.15] tracking-[-1.5px] md:text-[35px] lg:text-[48px] lg:leading-[52px] ${
          light ? "text-white" : "text-heading"
        }`}
      >
        {title}   
      </h2>
      {description && <p className="max-w-[640px]">{description}</p>}
    </div>
  );
}
