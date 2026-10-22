const variants = {
  dark: "bg-heading text-white border border-white/20 hover:bg-deep-green",
  yellow: "bg-brand text-heading hover:bg-[#f0a800]",
  outline:
    "border border-white/30 text-white hover:bg-white hover:text-heading",
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
      className={`inline-flex min-h-[46px] sm:min-h-[50px] items-center justify-center gap-2 rounded px-6 sm:px-[38px] lg:px-[45px] py-2.5 text-[13px] font-medium tracking-[-0.3px] capitalize transition-all duration-300 hover:scale-[0.96] active:scale-[0.93] md:text-[14px] ${
        variants[variant] || ""
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}