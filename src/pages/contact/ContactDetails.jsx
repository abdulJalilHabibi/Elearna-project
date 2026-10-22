import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import { contactDetails } from "./contactData";

export default function ContactDetails({ className = "" }) {
  return (
    <section className={`py-14 sm:py-20 lg:py-[110px] ${className}`}>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal delay={50}>
            <Eyebrow className="mb-3 sm:mb-4">{contactDetails.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mb-4 sm:mb-5 max-w-[750px] text-[24px] sm:text-[30px] font-semibold leading-[1.2] tracking-[-1px] text-heading md:text-[36px] lg:text-[45px] lg:leading-[52px]">
              {contactDetails.title}
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mb-10 sm:mb-12 max-w-[660px] text-[15px] leading-relaxed text-paragraph md:text-[17px]">
              {contactDetails.description}
            </p>
          </Reveal>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch lg:justify-between lg:gap-10">
            {contactDetails.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={200 + index * 100}
                className="flex flex-1 items-start justify-between gap-4 text-left"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mt-1 h-9 w-auto shrink-0 object-contain"
                  />
                  <div className="flex flex-col">
                    <h4 className="mb-1.5 text-[17px] font-semibold text-heading md:text-[18px]">
                      {item.title}
                    </h4>
                    {item.lines?.map((line, i) => (
                      <span
                        key={i}
                        className="text-[14px] text-paragraph md:text-[15px]"
                      >
                        {line}
                      </span>
                    ))}
                    {item.links?.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        className="text-[14px] text-paragraph transition-colors hover:text-brand md:text-[15px]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                {index < contactDetails.items.length - 1 && (
                  <div className="hidden h-16 w-px self-center bg-black/10 lg:block" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}