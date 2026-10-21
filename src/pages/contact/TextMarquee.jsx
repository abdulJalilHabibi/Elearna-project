import Container from "@/ui/Container";
import { contactMarquee } from "./contactData";

export default function TextMarquee({ className = "" }) {
  const trainItem = (
    <div className="flex shrink-0 items-center">
      <span className="font-heading pr-[50px] text-[40px] font-bold uppercase leading-none tracking-wider text-[#e8e9ee] select-none sm:text-[55px] lg:text-[73px]">
        {contactMarquee.text}
      </span>
    </div>
  );

  return (
    <section className={`relative overflow-hidden pb-10 ${className}`}>
      <Container>
        <div className="relative flex w-full overflow-hidden">
          <div className="flex w-max shrink-0 animate-marquee">
            {trainItem}
            {trainItem}
            {trainItem}
            {trainItem}
          </div>
          {/* Subtle gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </Container>
    </section>
  );
}
