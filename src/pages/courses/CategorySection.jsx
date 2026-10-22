import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Button from "@/ui/Button";
import Reveal from "@/ui/Reveal";
import { Link } from "react-router-dom";
import { categoriesData } from "./coursesData";

export default function CategorySection({ className = "" }) {
  return (
    <section className={`bg-white py-14 sm:py-20  lg:py-[100px] ${className}`}>
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Left Column */}
          <div className="flex w-full max-w-[397px] flex-col items-center text-center lg:items-start lg:text-left">
            <Reveal delay={50}>
              <Eyebrow>{categoriesData.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-[-1px] text-heading sm:text-[34px] lg:text-[40px] lg:leading-[48px]">
                {categoriesData.title}
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-6 sm:mt-8">
                <Button to={categoriesData.cta.href}>
                  {categoriesData.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Categories Grid */}
          <div className="grid w-full max-w-[630px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
            {categoriesData.items.map((cat, i) => (
              <Reveal key={cat.title} delay={100 + i * 60}>
                <Link
                  to={cat.href}
                  className="group flex flex-col items-center justify-center rounded-[4px] border border-[#6F8197]/20 bg-white p-5 pb-7 text-center transition-all duration-300 hover:border-transparent hover:shadow-[0_2px_60px_rgba(79,155,172,0.28)]"
                >
                  <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#f1f4f4] transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={cat.icon}
                      alt={cat.title}
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <h3 className="mb-1.5 text-[16px] font-semibold leading-[1.3] text-heading">
                    {cat.title}
                  </h3>
                  <div className="text-[14px] text-[#6F8197]">
                    {cat.count}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
