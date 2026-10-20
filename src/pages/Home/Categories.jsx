import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Button from "@/ui/Button";
import CategoryCard from "./CategoryCard";
import { categories } from "./content";

export default function Categories() {
  return (
    <section className="py-[90px]">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex  font-semibold flex-col items-center text-center lg:items-start lg:text-left">
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
            <Button href="#" className="mt-2 font-normal bg-[#0F252A]">
              Get Started
            </Button>
          </div>

          <div className="mt-2.5 grid w-full max-w-[630px] grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
