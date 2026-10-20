import { useEffect, useState } from "react";
import { testimonials } from "./content";

export default function Testimonials() {
  const { items, quoteIcon, arrowIcon } = testimonials;
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  // Auto-advance every 6s
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section className="py-[90px]">
      <div className="mx-auto max-w-[1038px] px-[15px]">
        <div className="flex flex-col items-center">
          <img src={quoteIcon} alt="" className="mb-8" />

          <div className="relative w-full px-12 md:px-20">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {items.map((t) => (
                  <div key={t.name} className="w-full shrink-0 text-center">
                    <p className="mb-10 text-[17px] text-heading md:text-[22px]">“{t.quote}”</p>
                    <div className="mb-1 text-[15px] leading-5 text-heading md:text-[22px] md:leading-8">{t.name}</div>
                    <div className="text-[14px] md:text-[15px]">{t.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-grey-blue/30 transition hover:border-brand hover:bg-brand"
            >
              <img src={arrowIcon} alt="" className="rotate-180" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-grey-blue/30 transition hover:border-brand hover:bg-brand"
            >
              <img src={arrowIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
