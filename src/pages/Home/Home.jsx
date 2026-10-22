import Hero from "./Hero";
import Features from "./Features";
import Categories from "./Categories";
import Discover from "./Discover";
import Courses from "./Courses";
import WhyUs from "./WhyUs";
import Offer from "./Offer";
import Clients from "./Clients";
import Testimonials from "./Testimonials";
import Blog from "./Blog";

export default function Home() {
  const p = "p-4 sm:p-6 md:p-8 lg:p-10";
  return (
    <div className="w-full overflow-x-clip">
      <main className="w-full">
        <Hero className={p} />
        <Features className={p} />
        <Categories className={p} />
        <Discover className={p} />
        <Courses className={p} />
        <WhyUs className={p} />
        <Offer className={p} />
        <Clients className={p} />
        <Testimonials className={p} />
        <Blog className={p} />
      </main>
    </div>
  );
}