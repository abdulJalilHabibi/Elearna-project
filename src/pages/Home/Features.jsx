import Container from "@/ui/Container";
import FeatureItem from "./FeatureItem";
import Reveal from "@/ui/Reveal";
import { features } from "./content";

export default function Features({className}) {
  return (
    <section className={`${className} relative z-10 -mt-[50px]`}>
      <Container>
        <Reveal delay={100}>
          <div className="flex flex-col gap-8 rounded bg-white px-[30px] pt-[60px] pb-[50px] shadow-[0_10px_60px_rgba(71,107,115,0.08)] md:flex-row md:items-center md:justify-between md:gap-5">
            {features.map((f, i) => (
              <FeatureItem key={f.title} {...f} index={i} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
