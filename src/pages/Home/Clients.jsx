import Container from "@/ui/Container";
import { clients } from "./content";

function LogoTrain() {
  return (
    <div className="flex shrink-0 animate-marquee items-center gap-[50px] pr-[50px] lg:gap-[91px] lg:pr-[91px]">
      {clients.logos.map((logo, i) => (
        <img key={i} src={logo} alt="Client" className="h-8 w-auto max-w-none" />
      ))}
    </div>
  );
}

export default function Clients({className}) {
  return (
    <section className={`${className} relative z-10 -mt-20`}>
      <Container>
        <div className="flex flex-col items-center gap-9 rounded bg-white px-6 py-[45px] text-center shadow-[0_10px_60px_rgba(71,107,115,0.15)] md:px-[55px]">
          <p className="text-heading">{clients.text}</p>
          <div className="relative flex w-full overflow-hidden">
            <LogoTrain />
            <LogoTrain />
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
