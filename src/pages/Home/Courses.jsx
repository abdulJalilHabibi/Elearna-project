import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/ui/Reveal";
import CourseCard from "./CourseCard";
import { courses } from "./content";

export default function Courses({ className }) {
  return (
    <section
      className={`flex flex-col items-center gap-10 ${className} bg-light-blue pt-20 pb-[90px] p-8`}
    >
      <Container>
        <SectionHeading
          eyebrow="Online learning"
          title="Top online courses"
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.title} delay={100 + i * 80}>
              <CourseCard {...course} />
            </Reveal>
          ))}
        </div>
      </Container>
      <div className="flex justify-center items-center">
        <div className="flex text-white px-15 py-4 rounded-full bg-heading max-w-190  mt-10 justify-center items-center">
          <p className="">
            We assist you in finding the ideal tutor at no cost.
            <span className=" border-b border-b-white"> Browse all available courses</span>
          </p>
        </div>
      </div>
    </section>
  );
}
