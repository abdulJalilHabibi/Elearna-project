import Container from "@/ui/Container";
import Reveal from "@/ui/Reveal";
import { Link } from "react-router-dom";
import { pricingCtaData } from "./pricingData";

export default function PricingCta({ className = "" }) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 rounded-[4px] bg-[#ffb606] px-6 py-10 sm:px-10 md:flex-row md:py-12 lg:px-16">
          <Reveal delay={50}>
            <h2 className="max-w-[500px] text-center text-[26px] font-bold leading-[1.25] tracking-[-1px] text-[#0F252A] sm:text-[32px] md:text-left lg:text-[36px]">
              {pricingCtaData.title}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to={pricingCtaData.btnOne.href}
                className="inline-flex items-center justify-center rounded-[4px] bg-[#0F252A] px-7 py-3.5 font-heading text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#20383E] sm:text-[16px]"
              >
                {pricingCtaData.btnOne.label}
              </Link>
              <Link
                to={pricingCtaData.btnTwo.href}
                className="inline-flex items-center justify-center rounded-[4px] border border-[#0F252A] px-7 py-3.5 font-heading text-[15px] font-semibold text-[#0F252A] transition-colors duration-300 hover:bg-[#0F252A] hover:text-white sm:text-[16px]"
              >
                {pricingCtaData.btnTwo.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
