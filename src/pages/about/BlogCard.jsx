export default function BlogCard({ image, category, title, date, href = "#" }) {
  return (
    <a
      href={href}
      className="group block h-full overflow-hidden rounded bg-white shadow-[0_30px_60px_rgba(43,51,79,0.13)]"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 p-[30px]">
        <span className="text-[13px] font-medium uppercase text-white">{category}</span>
        <h5 className="text-[17px] leading-snug transition-colors text-white font-semibold group-hover:text-blue md:text-[20px]">{title}</h5>
        <div>{date}</div>
      </div>
    </a>
  );
}
