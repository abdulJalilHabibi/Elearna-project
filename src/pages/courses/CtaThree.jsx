import Container from "@/ui/Container";
import Reveal from "@/ui/Reveal";
import { Link } from "react-router-dom";
import { ctaThreeData } from "./coursesData";

export default function CtaThree({ className = "" }) {
  return (
    <section
      className={`relative bg-cover bg-center py-20 sm:py-24 lg:py-[135px] ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(10, 23, 26, 0.55), rgba(10, 23, 26, 0.55)), url(${ctaThreeData.background})`,
      }}
    >
      <Container className="max-w-[1084px]">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:gap-10 md:text-left">
          <Reveal delay={50}>
            <h2 className="max-w-[500px] text-[26px] font-bold leading-[1.25] tracking-[-1px] text-white sm:text-[34px] lg:text-[40px] lg:leading-[48px]">
              {ctaThreeData.title}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <Link
                to={ctaThreeData.browseBtn.href}
                className="inline-flex items-center justify-center rounded border border-white px-7 py-3.5 font-heading text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-heading sm:text-[16px]"
              >
                {ctaThreeData.browseBtn.label}
              </Link>
              <Link
                to={ctaThreeData.instructorBtn.href}
                className="inline-flex items-center justify-center rounded bg-[#ffb606] px-7 py-3.5 font-heading text-[15px] font-semibold text-heading transition-all duration-300 hover:bg-[#e0a005] sm:text-[16px]"
              >
                {ctaThreeData.instructorBtn.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
