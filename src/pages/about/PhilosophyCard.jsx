import { useState } from "react";

export default function PhilosophyCard({
  label,
  image,
  href = "#",
  arrowIcon,
}) {
  const [touched, setTouched] = useState(false);

  return (
    <div
      onClick={() => setTouched((prev) => !prev)}
      className="group relative flex cursor-pointer items-center justify-center"
    >
      {/* Revealed panel behind the image */}
      <div
        className={`flex min-h-[340px] sm:min-h-[368px] w-full items-center justify-end rounded bg-[#b6b7ba] py-[70px] pr-2.5 shadow-[0_40px_60px_rgba(27,39,41,0.3)] transition-opacity duration-500 ${
          touched ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h5 className="text-[17px] font-semibold text-heading [writing-mode:vertical-rl] md:text-[20px]">
          {label}
        </h5>
      </div>

      {/* Image swings open like a door */}
      <div className="absolute inset-0 z-[5] [perspective:1000px]">
        <img
          src={image}
          alt={label}
          className={`h-full w-full origin-left rounded object-cover transition-transform duration-700 ease-out ${
            touched
              ? "[transform:rotateY(-35deg)]"
              : "group-hover:[transform:rotateY(-35deg)]"
          }`}
        />
        {/* Mobile label badge so users know what category it is before tapping */}
        <div
          className={`absolute bottom-4 left-4 right-4 flex items-center justify-between rounded bg-heading/85 px-4 py-2.5 text-white backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            touched ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-[15px] font-semibold">{label}</span>
          <span className="text-[12px] text-brand">Tap to view</span>
        </div>
      </div>

      <a
        href={href}
        aria-label={`Browse ${label}`}
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-[45px] z-[7] flex h-[47px] w-[47px] items-center justify-center rounded-full bg-light-blue transition-opacity duration-500 ${
          touched ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <img src={arrowIcon} alt="" />
      </a>
    </div>
  );
}