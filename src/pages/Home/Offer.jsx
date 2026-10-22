import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Button from "@/ui/Button";
import { offer } from "./content";

export default function Offer({ className = "" }) {
  return (
    <section
      className={`bg-cover bg-center pt-16 pb-24 sm:pt-24 sm:pb-32 md:py-[130px] lg:py-[160px] ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72), rgba(0,0,0,0.35)), url(${offer.background})`,
      }}
    >
      <Container>
        <div className="max-w-[553px] pb-2 sm:pb-6">
          <SectionHeading
            eyebrow={offer.eyebrow}
            title={offer.title}
            light
          />
          <p className="mb-7 text-[15px] leading-relaxed text-white/85 sm:text-[16px] lg:mb-10">
            {offer.text}
          </p>
          <Button href="#" variant="yellow">
            Get Course
          </Button>
        </div>
      </Container>
    </section>
  );
}