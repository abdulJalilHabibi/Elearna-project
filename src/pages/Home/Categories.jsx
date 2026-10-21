import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Button from "@/ui/Button";
import Reveal from "@/ui/Reveal";
import CategoryCard from "./CategoryCard";
import { categories } from "./content";

export default function Categories({className}) {
  return (
    <section className={` ${className} py-[90px]`}>
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex font-semibold flex-col items-center text-center lg:items-start lg:text-left">
            <SectionHeading
              eyebrow="Top Categories"
              title={
                <>
                  Discover leading <br className="hidden lg:block" />
                  categories
                </>
              }
              className="items-center font-space-grotesk lg:items-start"
            />
            <Reveal delay={150}>
              <Button href="#" className="mt-2 font-normal bg-[#0F252A]">
                Get Started
              </Button>
            </Reveal>
          </div>

          <div className="mt-2.5 grid w-full max-w-[630px] grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3">
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
