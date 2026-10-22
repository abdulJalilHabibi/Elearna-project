import Container from "@/ui/Container";
import { clients } from "../Home/content";

function LogoTrain({ logos }) {
  return (
    <div className="flex shrink-0 animate-marquee items-center gap-[50px] pr-[50px] lg:gap-[91px] lg:pr-[91px]">
      {logos.map((logo, i) => (
        <img key={i} src={logo} alt="Client" className="h-8 w-auto max-w-none" />
      ))}
    </div>
  );
}

function Marquee({ logos, fade }) {
  return (
    <div className="relative flex w-full overflow-hidden">
      <LogoTrain logos={logos} />
      <LogoTrain logos={logos} />
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r ${fade} to-transparent sm:w-24`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l ${fade} to-transparent sm:w-24`} />
    </div>
  );
}

/**
 * variant="card"  – floating white card overlapping the section above (Home)
 * variant="band"  – full-width light-blue strip (About)
 */
export default function Clients({ variant = "card", text = clients.text, logos = clients.logos, className = "" }) {
  if (variant === "band") {
    return (
      <section className={`overflow-hidden bg-light-blue py-8 sm:py-10 md:py-[65px] ${className}`}>
        <Container className="flex flex-col items-center text-center">
          <p className="mb-6 text-[15px] font-medium text-heading sm:text-[16px]">{text}</p>
          <Marquee logos={logos} fade="from-light-blue" />
        </Container>
      </section>
    );
  }

  return (
    <section className={`relative z-10 -mt-12 sm:-mt-20 ${className}`}>
      <Container>
        <div className="flex flex-col items-center gap-6 rounded bg-white px-4 py-8 text-center shadow-[0_10px_60px_rgba(71,107,115,0.15)] sm:gap-9 sm:px-6 sm:py-[45px] md:px-[55px]">
          <p className="text-[15px] font-medium text-heading sm:text-[16px]">{text}</p>
          <Marquee logos={logos} fade="from-white" />
        </div>
      </Container>
    </section>
  );
}
