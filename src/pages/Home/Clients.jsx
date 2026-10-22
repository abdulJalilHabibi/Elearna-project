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

export default function Clients({ className = "" }) {
  return (
    <section className={`relative z-10 -mt-12 sm:-mt-20 ${className}`}>
      <Container>
        <div className="flex flex-col items-center gap-6 rounded bg-white px-4 py-8 text-center shadow-[0_10px_60px_rgba(71,107,115,0.15)] sm:gap-9 sm:px-6 sm:py-[45px] md:px-[55px]">
          <p className="text-[15px] font-medium text-heading sm:text-[16px]">{clients.text}</p>
          <div className="relative flex w-full overflow-hidden">
            <LogoTrain />
            <LogoTrain />
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />
          </div>
        </div>
      </Container>
    </section>
  );
}
