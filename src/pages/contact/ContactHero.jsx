import Container from "@/ui/Container";
import { contactHero } from "./contactData";

export default function ContactHero() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat pt-[180px] pb-[120px] md:pt-[220px] md:pb-[200px] lg:pt-[260px] lg:pb-[240px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactHero.background})`,
      }}
    >
      <Container>
        <h1 className="text-[35px] font-bold leading-[1.15] tracking-[-1.5px] text-white md:text-[45px] lg:text-[60px] lg:leading-[68px]">
          {contactHero.title}
        </h1>
      </Container>
    </section>
  );
}
