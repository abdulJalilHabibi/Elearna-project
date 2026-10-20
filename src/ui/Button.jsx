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
  bgColor,
  ...props
  
}) {
  return (
    <a
      href={href}
      className={`inline-flex  min-h-[50px] items-center justify-center gap-2 rounded px-[45px] py-2.5 text-[14px] tracking-[-0.5px] capitalize transition-all  md:text-[17px]  ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
