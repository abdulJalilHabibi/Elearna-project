export default function DiscoverCard({
  number,
  title,
  text,
  active,
  onActivate,
  className = "",
}) {
  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className={`flex cursor-pointer flex-col justify-end border-white/20 p-6 outline-none transition-colors sm:p-7 lg:px-7 lg:pt-[50px] lg:pb-10 ${
        active ? "bg-black/25 lg:bg-transparent" : ""
      } ${className}`}
    >
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="text-[24px] leading-none tracking-[-1px] text-white sm:text-[28px] md:text-[35px]">
          {number}
        </h3>
        <h4 className="text-[18px] font-semibold tracking-[-0.5px] text-white sm:text-[20px] xl:text-[24px]">
          {title}
        </h4>
        <div
          className={`grid transition-all duration-500 ease-out ${
            active
              ? "grid-rows-[1fr] opacity-100 pt-1"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-[14px] leading-relaxed text-white/75 sm:text-[15px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}