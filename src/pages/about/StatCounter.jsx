import useInView from "../../hooks/useInView";
import useCountUp from "../../hooks/useCountUp";

export default function StatCounter({
  value,
  decimals = 0,
  suffix = "",
  label,
  className = "items-center lg:items-start",
  valueClassName = "text-heading",
  labelClassName = "text-heading",
}) {
  const [ref, inView] = useInView();
  const current = useCountUp(value, inView);

  return (
    <div ref={ref} className={`flex flex-col gap-2 ${className}`}>
      <div className={`font-heading text-[35px] font-semibold tracking-[-1.5px] lg:text-[48px] lg:leading-[52px] ${valueClassName}`}>
        {current.toFixed(decimals)}
        {suffix}
      </div>
      <div className={`text-[12px] font-medium uppercase md:text-[15px] ${labelClassName}`}>{label}</div>
    </div>
  );
}
