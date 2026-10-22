import Container from "@/ui/Container";
import Reveal from "@/ui/Reveal";
import { contactHero } from "./contactData";

export default function ContactHero({ className = "" }) {
  return (
    <section
      className={`bg-cover bg-center bg-no-repeat !pt-[140px] pb-[80px] sm:!pt-[180px] sm:pb-[120px] md:!pt-[220px] md:pb-[180px] lg:!pt-[260px] lg:pb-[220px] ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactHero.background})`,
      }}
    >
      <Container>
        <Reveal delay={100}>
          <h1 className="text-[32px] sm:text-[38px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[48px] lg:text-[60px] lg:leading-[68px] lg:tracking-[-1.5px]">
            {contactHero.title}
          </h1>
        </Reveal>
      </Container>
    </section>
  );
}