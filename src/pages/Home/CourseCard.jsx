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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85 to-[75%]" />

      {/* Animated corner borders */}
      <div className="pointer-events-none absolute left-[20px] top-[20px] sm:left-[28px] sm:top-[27px] z-20 h-[110px] w-[115px] sm:h-[140px] sm:w-[145px] origin-top-left scale-0 border-l border-t border-white transition-transform duration-700 ease-out group-hover:scale-100" />
      <div className="pointer-events-none absolute bottom-[20px] right-[20px] sm:bottom-[27px] sm:right-[28px] z-20 h-[110px] w-[115px]  sm:h-[140px] sm:w-[145px] origin-bottom-right scale-0 border-b border-r border-white transition-transform duration-700 ease-out group-hover:scale-100" />

      {/* Price badge */}
      <div className="absolute right-[20px] top-[20px] sm:right-[30px] sm:top-[30px] z-10 flex h-[60px] w-[60px] sm:h-[74px] sm:w-[74px] items-center justify-center rounded-full bg-[#254EDB] font-heading text-[16px] font-semibold text-white sm:text-[20px]">
        {price}
      </div>

      <div className="absolute inset-0 z-[3] flex flex-col items-start justify-end p-5 sm:p-7 xl:p-10">
        <span className="text-[12px] sm:text-[13px] font-medium uppercase text-white">
          {category}
        </span>
        <h4 className="mt-2 sm:mt-3 mb-3 sm:mb-4 text-[19px] leading-snug tracking-[-0.5px] text-white sm:text-[22px] xl:text-[24px]">
          {title}
        </h4>
        <div className="flex items-center gap-2">
          <img src={ratingIcon} alt="Rating" />
          <span className="text-[13px] font-medium uppercase text-light-blue/80">
            {rating}
          </span>
        </div>

        {/* Buttons: always visible on mobile/tablet, slide up on desktop hover */}
        <div className="grid w-full transition-all duration-500 grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="flex flex-wrap sm:flex-nowrap w-full gap-2.5 pt-4 p-4 sm:pt-6">
              <Button
                href={href}
                variant="yellow"
                className="flex-1 bg-[#FFB606] !px-3 text-[13px] whitespace-nowrap"
              >
                Course details
              </Button>
              {!isFree && (
                <Button
                  href="#"
                  className="flex-1 bg-[#0F252A] !px-3 text-[13px] whitespace-nowrap"
                >
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