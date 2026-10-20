import StatCounter from "./StatCounter";

// Yellow (default) or dark rounded box holding an animated stat
export default function VisionStatBox({ dark = false, ...stat }) {
  return (
    <div className={`flex items-center justify-center rounded px-10 py-5 text-center md:py-[30px] ${dark ? "bg-heading" : "bg-brand"}`}>
      <StatCounter
        {...stat}
        className="items-center"
        valueClassName={dark ? "text-brand" : "text-heading"}
        labelClassName={dark ? "text-brand" : "text-heading"}
      />
    </div>
  );
}
