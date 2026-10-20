import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import PhilosophyCard from "./PhilosophyCard";
import { philosophy } from "./about";

export default function Philosophy() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>{philosophy.eyebrow}</Eyebrow>
          <h3 className="mt-3 text-[25px] tracking-[-1px] md:text-[30px] lg:text-[35px] lg:leading-[42px]">
            {philosophy.title}
          </h3>
          <div className="grid w-full grid-cols-1 gap-x-[30px] gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:pt-[50px]">
            {philosophy.categories.map((c) => (
              <PhilosophyCard key={c.label} {...c} arrowIcon={philosophy.arrowIcon} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
