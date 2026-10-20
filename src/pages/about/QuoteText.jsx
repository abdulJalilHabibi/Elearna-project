import Eyebrow from "@/ui/Eyebrow";
import { quote } from "./about";

export default function QuoteText() {
  return (
    <section className="px-[15px] py-[50px] md:py-[110px] lg:py-20">
      <div className="mx-auto flex max-w-[644px] flex-col items-center text-center">
        <Eyebrow>{quote.eyebrow}</Eyebrow>
        <h4 className="mt-4 text-[20px] leading-snug tracking-[-0.5px] md:text-[24px]">{quote.text}</h4>
      </div>
    </section>
  );
}
