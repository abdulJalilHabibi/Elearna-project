import Container from "@/ui/Container";
import FeatureItem from "./FeatureItem";
import Reveal from "@/ui/Reveal";
import { features } from "./content";

export default function Features({ className = "" }) {
  return (
    <section className={`relative z-10 -mt-10 sm:-mt-[50px] ${className}`}>
      <Container>
        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-6 rounded bg-white px-6 py-8 shadow-[0_10px_60px_rgba(71,107,115,0.08)] sm:grid-cols-2 sm:gap-8 sm:px-8 sm:py-10 lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-[20px] lg:pt-[55px] lg:pb-[20px]">
            {features.map((f, i) => (
              <FeatureItem key={f.title} {...f} index={i} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}