import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import { hero } from "./content";

export default function Hero({ className = "" }) {
  const [first, second] = hero.bigWords;
  return (
    <section
      className={`overflow-hidden bg-cover bg-center bg-no-repeat pt-[180px] pb-[120px] lg:pt-[300px] lg:pb-[170px] ${className}`}
      style={{ backgroundImage: `url(${hero.background})` }}
    >
      <Container>
        {/* Giant faded gradient words */}
        <div className="mb-14 flex flex-col items-start font-heading font-bold uppercase lg:mb-[120px]">
          <span className="bg-gradient-to-b from-[#5f88a3] from-0% to-[#51616b00] to-95% bg-clip-text text-[55px] leading-[0.9] tracking-[-2.3px] text-transparent sm:text-[80px] md:text-[90px] lg:text-[110px] lg:leading-[98px]">
            {first}
          </span>
          <span className="-mt-3 ml-12 bg-gradient-to-b from-[#5e6d77] from-15% to-[#0e181f00] to-89% bg-clip-text text-[55px] leading-[0.9] tracking-[-2.3px] text-transparent [text-shadow:0_-21px_33px_rgba(0,0,0,0.6)] sm:ml-24 sm:text-[80px] md:ml-36 md:text-[90px] lg:-mt-7 lg:ml-48 lg:text-[110px] lg:leading-[98px]">
            {second}
          </span>
        </div>

        <div className="ml-auto max-w-[662px] text-white">
          <Eyebrow light className="!text-white">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-4 text-[30px] font-bold leading-[1.15] tracking-[-1.5px] text-white sm:text-[38px] md:text-[45px] lg:text-[60px] lg:leading-[68px]">
            Transform <span className="text-[#FFB606]">learning</span> with flexible online education
          </h1>
        </div>
      </Container>
    </section>
  );
}
