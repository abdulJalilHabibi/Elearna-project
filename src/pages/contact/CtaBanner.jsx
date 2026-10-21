import Container from "@/ui/Container";
import Button from "@/ui/Button";
import Reveal from "@/ui/Reveal";
import { ctaBanner } from "./contactData";

export default function CtaBanner({ className = "" }) {
  return (
    <section
      className={`bg-cover bg-center bg-no-repeat py-20 md:py-24 lg:py-28 px-4 md:px-8 lg:px-10 ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(10, 23, 26, 0.55), rgba(10, 23, 26, 0.55)), url(${ctaBanner.background})`,
      }}
    >
      <Container>
        <div className="mx-auto flex max-w-[1084px] flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <Reveal delay={50}>
            <h2 className="max-w-[450px] text-[28px] font-semibold leading-[1.2] tracking-[-1px] text-white md:text-[35px] lg:text-[40px] lg:leading-[46px]">
              {ctaBanner.title}
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href={ctaBanner.secondaryCta.href}
                variant="outline"
                className="border-white/40 hover:bg-white hover:text-heading"
              >
                {ctaBanner.secondaryCta.label}
              </Button>
              <Button href={ctaBanner.primaryCta.href} variant="yellow">
                {ctaBanner.primaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
