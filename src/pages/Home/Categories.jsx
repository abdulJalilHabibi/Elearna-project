import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Button from "@/ui/Button";
import Reveal from "@/ui/Reveal";
import CategoryCard from "./CategoryCard";
import { categories } from "./content";

export default function Categories({ className = "" }) {
  return (
    <section className={`py-14 sm:py-20 lg:py-[90px] ${className}`}>
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="flex flex-col items-center text-center lg:max-w-[420px] lg:items-start lg:text-left">
            <SectionHeading
              eyebrow="Top Categories"
              title={
                <>
                  Discover leading <br className="hidden lg:block" />
                  categories
                </>
              }
              className="items-center lg:items-start"
            />
            <Reveal delay={150}>
              <Button href="#" className="mt-2 font-normal bg-[#0F252A]">
                Get Started
              </Button>
            </Reveal>
          </div>

          <div className="grid w-full max-w-[650px] grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-[26px]">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={100 + i * 60}>
                <CategoryCard {...c} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}