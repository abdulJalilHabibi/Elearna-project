export default function CategoryCard({ icon, title, count, href = "#" }) {
  return (
    <a
      href={href}
      className="group flex h-full flex-col items-center justify-center rounded border border-[#f5f0f0] bg-white px-4 pt-6 pb-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(71,107,115,0.15)] sm:px-5"
    >
      <div className="mb-4 flex h-[64px] w-[64px] sm:h-[70px] sm:w-[70px] items-center justify-center rounded-full bg-light-blue transition-transform duration-300 group-hover:scale-110">
        <img src={icon} alt={title} />
      </div>
      <h6 className="mb-1 text-[16px] font-bold text-heading transition-colors duration-300">
        {title}
      </h6>
      <div className="text-[14px] text-paragraph">{count} Courses</div>
    </a>
  );
}