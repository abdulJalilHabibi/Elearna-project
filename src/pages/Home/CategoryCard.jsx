export default function CategoryCard({ icon, title, count, href = "#" }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center rounded border border-[#f5f0f0] bg-white px-5 pt-5 pb-[30px] text-center transition-all duration-300 hover:border-brand hover:shadow-[0_10px_40px_rgba(71,107,115,0.12)]"
    >
      <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-light-blue">
        <img src={icon} alt="" />
      </div>
      <h6 className="mb-1 text-[15px] md:text-[18px]">{title}</h6>
      <div>{count} Courses</div>
    </a>
  );
}
