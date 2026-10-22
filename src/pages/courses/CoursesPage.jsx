import CoursesHero from "./CoursesHero";
import CategorySection from "./CategorySection";
import CourseStore from "./CourseStore";
import CtaThree from "./CtaThree";

export default function CoursesPage() {
  const p = "p-4 sm:p-6 md:p-8 lg:p-10";

  return (
    <div className="w-full overflow-x-clip">
      <main className="w-full">
        <CoursesHero className={p} />
        <CategorySection className={p} />
        <CourseStore className={p} />
        <CtaThree className={p} />
      </main>
    </div>
  );
}
