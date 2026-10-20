import Container from "@/ui/Container";
import FeatureItem from "./FeatureItem";
import { features } from "./content";

export default function Features() {
  return (
    <section className="relative z-10 -mt-[50px]">
      <Container>
        <div className="flex flex-col gap-8 rounded bg-white px-[30px] pt-[60px] pb-[50px] shadow-[0_10px_60px_rgba(71,107,115,0.08)] md:flex-row md:items-center md:justify-between md:gap-5">
          {features.map((f) => (
            <FeatureItem key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}
