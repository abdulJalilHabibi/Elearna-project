// Vertical "25 / Year of experience" label shown beside the office photo
export default function ExperienceBadge({ years, label }) {
  return (
    <div className="mt-1 hidden shrink-0 items-center lg:flex">
      <span className="text-[12px] font-bold uppercase leading-[22px] text-heading [writing-mode:vertical-lr]">
        {label}
      </span>
      <span className="font-heading text-[70px] font-medium leading-[80px] text-heading [writing-mode:vertical-lr] lg:text-[100px] lg:leading-[104px]">
        {years}
      </span>
    </div>
  );
}
