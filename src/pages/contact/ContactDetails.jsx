import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import { contactDetails } from "./contactData";

export default function ContactDetails() {
  return (
    <section className="py-[50px] md:py-[80px] lg:py-[110px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow className="mb-4">{contactDetails.eyebrow}</Eyebrow>
          <h2 className="mb-5 max-w-[750px] text-[28px] font-semibold leading-[1.2] tracking-[-1px] text-heading md:text-[35px] lg:text-[45px] lg:leading-[52px]">
            {contactDetails.title}
          </h2>
          <p className="mb-12 max-w-[660px] text-[15px] leading-relaxed text-paragraph md:text-[17px]">
            {contactDetails.description}
          </p>

          <div className="flex w-full flex-col justify-between gap-8 sm:flex-row sm:items-stretch sm:gap-6 lg:gap-10">
            {contactDetails.items.map((item, index) => (
              <div key={item.title} className="flex flex-1 items-start gap-4 text-left">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mt-1 h-9 w-auto shrink-0 object-contain"
                />
                <div className="flex flex-col">
                  <h4 className="mb-2 text-[17px] font-semibold text-heading md:text-[18px]">
                    {item.title}
                  </h4>
                  {item.lines?.map((line, i) => (
                    <span key={i} className="text-[14px] text-paragraph md:text-[15px]">
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
                {index < contactDetails.items.length - 1 && (
                  <div className="hidden h-16 w-px self-center bg-black/10 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
