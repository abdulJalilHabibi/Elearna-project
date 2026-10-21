export default function CategoryCard({ icon, title, count, href = "#" }) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center justify-center rounded border border-[#f5f0f0] bg-white px-5 pt-5 pb-[30px] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(71,107,115,0.15)]"
    >
      <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-light-blue transition-transform duration-300 group-hover:scale-110">
        <img src={icon} alt="" />
      </div>
      <h6 className="mb-1 text-[15px] transition-colors duration-300 text-heading font-bold  md:text-[18px]">{title}</h6>
      <div className="text-[14px] text-paragraph">{count} Courses</div>
    </a>
  );
}
