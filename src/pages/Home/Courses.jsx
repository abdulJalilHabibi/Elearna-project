import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/ui/Reveal";
import CourseCard from "./CourseCard";
import { courses } from "./content";

export default function Courses({ className = "" }) {
  return (
    <section className={`bg-light-blue pt-14 pb-16 sm:pt-20 sm:pb-[90px] ${className}`}>
      <Container>
        <SectionHeading
          eyebrow="Online learning"
          title="Top online courses"
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-[30px] lg:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.title} delay={100 + i * 80}>
              <CourseCard {...course} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex max-w-[760px] flex-col items-center justify-center rounded-2xl bg-heading px-6 py-4 text-center text-white sm:flex-row sm:rounded-full sm:px-10">
            <p className="text-[14px] leading-relaxed sm:text-[15px]">
              We assist you in finding the ideal tutor at no cost.{" "}
              <a href="/courses" className="border-b border-white transition-colors hover:text-brand">
                Browse all available courses
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
