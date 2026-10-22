import { useState, useRef } from "react";
import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import CourseCardTwo from "./CourseCardTow";
import { allCourses } from "./coursesData";

export default function CourseStore({ className = "" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  const coursesPerPage = 6;
  const totalPages = Math.ceil(allCourses.length / coursesPerPage);

  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = allCourses.slice(startIndex, startIndex + coursesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-[#F1F4F4] py-14 sm:py-20 lg:py-[100px] ${className}`}
    >
      <Container>
        {/* Section Heading */}
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <Reveal delay={50}>
            <Eyebrow>Online learning</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.2] tracking-[-1px] text-heading sm:text-[34px] lg:text-[40px] lg:leading-[48px]">
              Top online courses
            </h2>
          </Reveal>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-[30px] lg:grid-cols-3">
          {currentCourses.map((course, idx) => (
            <Reveal key={course.id || course.title} delay={80 + idx * 70}>
              <CourseCardTwo {...course} />
            </Reveal>
          ))}
        </div>

        {/* Pagination Dots / Tabs */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2.5 sm:mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  aria-label={`Go to page ${page}`}
                  className={`flex items-center justify-center rounded-full font-heading font-semibold transition-all duration-300 ${
                    isActive
                      ? "h-[34px] w-[34px] bg-[#1BE3A3] text-heading shadow-sm text-[15px]"
                      : "h-7 w-7 bg-white text-heading/80 hover:bg-white/80 text-[13px]"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
