import { useState } from "react";
import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import { pricingFaqData } from "./pricingData";

export default function PricingFaq({ className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`bg-white py-16 sm:py-20 lg:py-[100px] ${className}`}>
      <Container>
        <div className="mx-auto max-w-[950px] rounded-[8px] bg-[#F1F4F4] p-6 sm:p-10 lg:p-14">
          {/* FAQ Top Header */}
          <Reveal
            delay={50}
            className="mb-10 flex flex-col items-center gap-8 md:flex-row md:items-center"
          >
            <img
              src={pricingFaqData.icon}
              alt="FAQ Icons"
              width={263}
              height={247}
              className="h-28 w-auto object-contain sm:h-36 md:h-44"
            />
            <div className="flex flex-col text-center md:text-left">
              <Eyebrow className="mb-2">{pricingFaqData.eyebrow}</Eyebrow>
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-1px] text-heading sm:text-[32px] md:text-[36px] lg:text-[40px]">
                {pricingFaqData.title}
              </h2>
            </div>
          </Reveal>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {pricingFaqData.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal
                  key={index}
                  delay={100 + index * 60}
                  className="overflow-hidden rounded-[4px] border border-[#1b2c30]/10 bg-white transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors duration-200 hover:bg-black/[0.02] md:px-7 md:py-5"
                  >
                    <span className="text-[16px] font-semibold text-heading md:text-[18px]">
                      {item.question}
                    </span>
                    <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                      <span className="h-[2px] w-3.5 rounded-full bg-heading transition-transform duration-300" />
                      <span
                        className={`absolute h-[2px] w-3.5 rounded-full bg-heading transition-transform duration-300 ${
                          isOpen ? "rotate-0 opacity-0" : "rotate-90 opacity-100"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#1b2c30]/10 px-5 pt-4 pb-6 md:px-7">
                        <p className="text-[14px] leading-relaxed text-paragraph md:text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
