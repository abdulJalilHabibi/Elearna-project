import Container from "@/ui/Container";
import Button from "@/ui/Button";
import Reveal from "@/ui/Reveal";
import { ctaBanner } from "./contactData";

export default function CtaBanner({ className = "" }) {
  return (
    <section
      className={`bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24 lg:py-28 ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(10, 23, 26, 0.6), rgba(10, 23, 26, 0.6)), url(${ctaBanner.background})`,
      }}
    >
      <Container>
        <div className="mx-auto flex max-w-[1084px] flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <Reveal delay={50}>
            <h2 className="max-w-[450px] text-[26px] sm:text-[32px] font-semibold leading-[1.2] tracking-[-1px] text-white md:text-[36px] lg:text-[40px] lg:leading-[46px]">
              {ctaBanner.title}
            </h2>
          </Reveal>

          <Reveal delay={150} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <Button
                href={ctaBanner.secondaryCta.href}
                variant="outline"
                className="w-full sm:w-auto border-white/40 text-white hover:text-heading"
              >
                {ctaBanner.secondaryCta.label}
              </Button>
              <Button
                href={ctaBanner.primaryCta.href}
                variant="yellow"
                className="w-full sm:w-auto"
              >
                {ctaBanner.primaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}