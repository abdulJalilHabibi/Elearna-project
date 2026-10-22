export default function DiscoverCard({ number, title, text, active, onActivate, className = "" }) {
  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className={`flex cursor-pointer flex-col justify-end border-white/20 p-5 outline-none transition-colors sm:px-5 sm:pt-[50px] sm:pb-10 ${className}`}
    >
      <div className="flex flex-col gap-2 sm:gap-4">
        <h3 className="text-[22px] leading-none tracking-[-1px] text-white sm:text-[25px] md:text-[35px]">{number}</h3>
        <h4 className="text-[17px] font-semibold tracking-[-0.5px] text-white sm:text-[20px] md:text-[24px]">{title}</h4>
        <div
          className={`grid transition-all duration-500 ease-out ${
            active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-[14px] text-white/70 sm:text-[15px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
