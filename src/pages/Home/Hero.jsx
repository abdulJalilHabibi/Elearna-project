import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import { hero } from "./content";

export default function Hero({ className = "" }) {
  const [first, second] = hero.bigWords;

  return (
    <section
      className={`relative overflow-hidden bg-cover bg-center bg-no-repeat !pt-[130px] pb-[90px] sm:!pt-[160px] sm:pb-[120px] md:!pt-[200px] md:pb-[140px] lg:!pt-[250px] lg:pb-[170px] ${className}`}
      style={{ backgroundImage: `url(${hero.background})` }}
    >
      <Container>
        {/* Giant faded gradient words */}
        <Reveal
          delay={50}
          className="mb-8 flex flex-col items-start font-heading font-bold uppercase sm:mb-12 md:mb-16 lg:mb-[110px]"
        >
          <span className="bg-gradient-to-b from-[#5f88a3] from-0% to-[#51616b00] to-95% bg-clip-text text-[44px] leading-[0.95] tracking-[-1.5px] text-transparent sm:text-[68px] sm:tracking-[-2px] md:text-[88px] lg:text-[110px] lg:leading-[98px]">
            {first}
          </span>
          <span className="-mt-1 ml-6 bg-gradient-to-b from-[#5e6d77] from-15% to-[#0e181f00] to-89% bg-clip-text text-[44px] leading-[0.95] tracking-[-1.5px] text-transparent [text-shadow:0_-21px_33px_rgba(0,0,0,0.6)] sm:-mt-3 sm:ml-16 sm:text-[68px] md:-mt-5 md:ml-32 md:text-[88px] lg:-mt-7 lg:ml-48 lg:text-[110px] lg:leading-[98px]">
            {second}
          </span>
        </Reveal>

        <Reveal
          delay={150}
          className="max-w-[662px] text-white lg:ml-auto lg:mr-0"
        >
          <Eyebrow light className="!text-white">
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="mt-3 sm:mt-4 text-[28px] font-bold leading-[1.18] tracking-[-1px] text-white sm:text-[38px] sm:tracking-[-1.5px] md:text-[48px] lg:text-[60px] lg:leading-[68px]">
            Transform <span className="text-[#FFB606]">learning</span> with
            flexible online education
          </h1>
        </Reveal>
      </Container>
    </section>
  );
}