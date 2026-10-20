export default function DiscoverCard({ number, title, text, active, onActivate, className = "" }) {
  return (
    <div
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className={`flex cursor-pointer flex-col justify-end border-white/20 px-5 pt-[50px] pb-10 outline-none ${className}`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-[25px] leading-none tracking-[-1px] text-white md:text-[35px]">{number}</h3>
        <h4 className="text-[20px] tracking-[-0.5px] text-white md:text-[24px]">{title}</h4>
        <div
          className={`grid transition-all duration-500 ease-out ${
            active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-white/70">{text}</p>
        </div>
      </div>
    </div>
  );
}
