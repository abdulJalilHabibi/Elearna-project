import { useEffect, useState } from "react";
import { testimonials } from "./content";

export default function Testimonials({ className = "" }) {
  const { items, quoteIcon, arrowIcon } = testimonials;
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section className={`py-14 sm:py-20 lg:py-[90px] ${className}`}>
      <div className="mx-auto max-w-[1038px] px-[15px]">
        <div className="flex flex-col items-center">
          <img src={quoteIcon} alt="" className="mb-6 h-8 sm:mb-8 sm:h-auto" />
          <div className="relative w-full sm:px-14 md:px-20">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {items.map((t) => (
                  <div key={t.name} className="w-full shrink-0 text-center">
                    <p className="mb-6 text-[16px] leading-relaxed text-heading sm:mb-10 sm:text-[19px] md:text-[22px]">
                      “{t.quote}”
                    </p>
                    <div className="mb-1 text-[16px] font-semibold leading-5 text-heading md:text-[22px] md:leading-8">
                      {t.name}
                    </div>
                    <div className="text-[13px] text-paragraph md:text-[15px]">
                      {t.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons: Below text on extra-small screens, side-by-side on sm+ */}
            <div className="mt-6 flex items-center justify-center gap-4 sm:mt-0">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-grey-blue/30 transition hover:border-brand hover:bg-brand sm:absolute sm:left-0 sm:top-1/2 sm:h-11 sm:w-11 sm:-translate-y-1/2"
              >
                <img
                  src={arrowIcon}
                  alt=""
                  className="h-3.5 w-3.5 rotate-180 sm:h-auto sm:w-auto"
                />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-grey-blue/30 transition hover:border-brand hover:bg-brand sm:absolute sm:right-0 sm:top-1/2 sm:h-11 sm:w-11 sm:-translate-y-1/2"
              >
                <img
                  src={arrowIcon}
                  alt=""
                  className="h-3.5 w-3.5 sm:h-auto sm:w-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}