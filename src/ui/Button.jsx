const variants = {
  dark: "bg-heading text-white border border-white/20 hover:bg-deep-green",
  yellow: "bg-brand text-heading hover:bg-[#f0a800]",
  outline: "border border-white/30 text-white hover:bg-white hover:text-heading",
};

export default function Button({
  href = "#",
  variant = "dark",
  className = "",
  children,
  ...props
}) {
  return (
    <a
      href={href}
      className={`inline-flex  max-h-[50px] items-center justify-center gap-2 rounded px-[45px] py-2.5 text-[13px] tracking-[-0.5px] capitalize transition-all duration-300 hover:scale-[0.96] active:scale-[0.93] md:text-[14px] ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
