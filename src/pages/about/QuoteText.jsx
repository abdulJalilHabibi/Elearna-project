import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import { quote } from "./about";

export default function QuoteText({ className = "" }) {
  return (
    <section className={`px-[15px] py-[50px] md:py-[110px] lg:py-20 ${className}`}>
      <div className="mx-auto flex max-w-[644px] flex-col items-center text-center">
        <Reveal delay={50}>
          <Eyebrow>{quote.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h4 className="mt-4 text-[20px] leading-snug tracking-[-0.5px] text-heading md:text-[24px]">{quote.text}</h4>
        </Reveal>
      </div>
    </section>
  );
}
