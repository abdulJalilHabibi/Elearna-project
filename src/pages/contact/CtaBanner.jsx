import Container from "@/ui/Container";
import Button from "@/ui/Button";
import { ctaBanner } from "./contactData";

export default function CtaBanner() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 md:py-24 lg:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 23, 26, 0.55), rgba(10, 23, 26, 0.55)), url(${ctaBanner.background})`,
      }}
    >
      <Container>
        <div className="mx-auto flex max-w-[1084px] flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <h2 className="max-w-[450px] text-[28px] font-semibold leading-[1.2] tracking-[-1px] text-white md:text-[35px] lg:text-[40px] lg:leading-[46px]">
            {ctaBanner.title}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={ctaBanner.secondaryCta.href}
             
              className="outline outline-white text-white hover: transition-all duration-500 hover:scale-95 "
            >
              {ctaBanner.secondaryCta.label}
            </Button>
            <Button href={ctaBanner.primaryCta.href} className="bg-[#FFB606] text-black hover:transition-all duration-500 hover:scale-95">
              {ctaBanner.primaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
