import Container from "@/ui/Container";
import Button from "@/ui/Button";
import { instructor } from "./about";

export default function InstructorCta({ className = "" }) {
  return (
    <section className={`overflow-hidden py-10 sm:py-14 lg:pt-[87px] lg:pb-0 ${className}`}>
      <Container>
        <div
          className="flex items-center justify-center rounded bg-heading bg-cover bg-center px-6 py-8 sm:px-[30px] sm:pt-[50px] sm:pb-[60px] lg:py-0"
          style={{ backgroundImage: `url(${instructor.background})` }}
        >
          <div className="flex w-full max-w-[1110px] flex-col items-center justify-between gap-[30px] lg:flex-row">
            <div className="flex flex-1 flex-col items-center text-center lg:max-w-[520px] lg:items-start lg:py-[30px] lg:text-left">
              <h3 className="mb-4 text-[24px] tracking-[-1px] text-white sm:mb-5 sm:text-[30px] lg:text-[35px] lg:leading-[42px]">
                {instructor.title}
              </h3>
              <p className="mb-6 text-[15px] leading-relaxed text-white/70 sm:mb-[30px] sm:text-[16px]">{instructor.text}</p>
              <Button href={instructor.cta.href} variant="yellow">
                {instructor.cta.label}
              </Button>
            </div>

            <div className="relative flex flex-1 items-start justify-center pl-0 sm:pl-[35px] lg:-mt-[87px] lg:max-w-[461px]">
              <img src={instructor.image} alt="Instructor" className="hidden w-full lg:block" />
              <img src={instructor.mobileImage} alt="Instructor" className="w-full max-w-[340px] sm:max-w-none lg:hidden" />
              <img
                src={instructor.reviewImage}
                alt="Student review"
                className="absolute left-0 top-1/2 w-[43%] -translate-y-1/2 rounded-[100px] shadow-[0_14px_46px_rgba(0,0,0,0.17)] lg:bottom-[25%] lg:top-auto lg:w-auto lg:translate-y-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
