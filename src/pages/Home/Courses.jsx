import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import CourseCard from "./CourseCard";
import { courses } from "./content";

export default function Courses() {
  return (
    <section className="bg-light-blue pt-20 pb-[90px] p-8">
      <Container>
        <SectionHeading eyebrow="Online learning" title="Top online courses" className="mb-8" />
        <div className="grid  grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </Container>
      
    </section>
  );
}
