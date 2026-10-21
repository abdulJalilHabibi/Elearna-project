import Button from "@/ui/Button";
import { ratingIcon } from "./content";

export default function CourseCard({
  image,
  category,
  title,
  rating,
  price,
  href = "#",
}) {
  const isFree = price.toLowerCase() === "free";

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded">
      <img
        src={image}
        alt={title}
        className="aspect-[410/520] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 to-[74%]" />
      {/* Animated corner borders */}
      {/* Animated corner borders */}
      <div className="pointer-events-none absolute left-[28px] top-[27px] z-20 h-[140px] w-[145px] origin-top-left scale-0 border-l border-t border-white transition-transform duration-700 ease-out group-hover:scale-100" />

      <div className="pointer-events-none absolute bottom-[27px] right-[28px] z-20 h-[140px] w-[145px] origin-bottom-right scale-0 border-b border-r border-white transition-transform duration-700 ease-out group-hover:scale-100" />
      {/* Price badge */}
      <div className="absolute bg-[#254EDB] right-[30px] top-[30px] z-10 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-blue font-heading text-[17px] text-white md:text-[20px]">
        {price}
      </div>

      <div className="absolute inset-0 z-[3] flex flex-col items-start justify-end p-5 md:p-10">
        <span className="text-[13px] font-medium uppercase text-white">
          {category}
        </span>
        <h4 className="mt-3 mb-4 text-[20px] leading-tight tracking-[-0.5px] text-white md:text-[24px]">
          {title}
        </h4>
        <div className="flex items-center gap-2">
          <img src={ratingIcon} alt="Rating" />
          <span className="text-[13px] font-medium uppercase text-light-blue/80">
            {rating}
          </span>
        </div>

        {/* Buttons slide up on hover (always visible on touch screens) */}
        <div className="grid w-full transition-all duration-500 lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="flex w-full  gap-2.5 pt-6">
              <Button
                href={href}
                variant="yellow"
                className="flex-1  bg-[#FFB606] !px-6"
              >
                Course details
              </Button>
              {!isFree && (
                <Button href="#" className="flex-1 bg-[#0F252A] !px-6">
                  Buy course
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
