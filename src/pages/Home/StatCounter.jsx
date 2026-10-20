import useInView from "@/hooks/useInView";
import useCountUp from "@/hooks/useCountUp";
import Eyebrow from "@/ui/Eyebrow";

export default function StatCounter({ value, decimals = 0, suffix = "", label }) {
  const [ref, inView] = useInView();
  const current = useCountUp(value, inView);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 lg:items-start">
      <div className="font-heading text-[35px] font-semibold tracking-[-1.5px] text-heading lg:text-[48px] lg:leading-[52px]">
        {current.toFixed(decimals)}
        {suffix}
      </div>
      <Eyebrow>{label}</Eyebrow>
    </div>
  );
}
