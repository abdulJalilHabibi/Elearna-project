// Vertical "25 / Year of experience" label with 4-sided padding
export default function ExperienceBadge({ years, label, className = "" }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center p-4 sm:p-6 lg:pb-40 ${className}`}
    >
      <span className="text-[10px] font-bold uppercase leading-[22px] text-heading [writing-mode:vertical-lr] ">
        {label}
      </span>
      <span className="font-heading text-[70px] font-medium leading-[80px] text-heading [writing-mode:vertical-lr] lg:text-[90px] lg:leading-[80px] pb-4">
        {years}
      </span>
    </div>
  );
}
