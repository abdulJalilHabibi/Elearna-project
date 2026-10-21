// Small uppercase label shown above section headings
export default function Eyebrow({ light = false, className = "", children }) {
  return (
    <div
      className={`text-[12px] font-medium uppercase tracking-[0.5px] md:text-[15px] ${
        light ? "text-light-blue" : "text-heading"
      } ${className}`}
    >
      {children}
    </div>
  );
}
