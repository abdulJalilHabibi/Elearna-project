import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Button from "@/ui/Button";
import { offer } from "./content";

export default function Offer({className}) {
  return (
    <section
      className={` ${className} bg-cover bg-center py-[120px] lg:py-[160px]`}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5), transparent), url(${offer.background})`,
      }}
    >
      <Container>
        <div className="max-w-[553px] pb-10">
          <SectionHeading eyebrow={offer.eyebrow} title={offer.title} light />
          <p className="mb-8 text-white/70 lg:mb-10">{offer.text}</p>
          <Button href="#" variant="yellow">Get Course</Button>
        </div>
      </Container>
    </section>
  );
}
