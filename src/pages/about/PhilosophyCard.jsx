// Image "door" that swings open on hover, revealing a vertical label and an arrow link.
export default function PhilosophyCard({ label, image, href = "#", arrowIcon }) {
  return (
    <div className="group relative flex items-center justify-center">
      {/* Revealed panel behind the image */}
      <div className="flex min-h-[368px] w-full items-center justify-end rounded bg-[#b6b7ba] py-[70px] pr-2.5 opacity-0 shadow-[0_40px_60px_rgba(27,39,41,0.3)] transition-opacity duration-500 group-hover:opacity-100">
        <h5 className="text-[17px] text-white [writing-mode:vertical-rl] md:text-[20px]">{label}</h5>
      </div>

      {/* Image swings open like a door */}
      <div className="absolute inset-0 z-[5] [perspective:1000px]">
        <img
          src={image}
          alt={label}
          className="h-full w-full origin-left rounded object-cover transition-transform duration-700 ease-out group-hover:[transform:rotateY(-35deg)]"
        />
      </div>

      <a
        href={href}
        aria-label={`Browse ${label}`}
        className="absolute right-[50px] z-[7] flex h-[47px] w-[47px] items-center justify-center rounded-full bg-light-blue opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <img src={arrowIcon} alt="" />
      </a>
    </div>
  );
}
