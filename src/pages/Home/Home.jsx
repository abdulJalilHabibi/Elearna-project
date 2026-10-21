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
  return (
    <div className="w-full overflow-hidden">
      <main className="w-full">
        <Hero className="p-10"/>
        <Features className="p-10" />
        <Categories className="p-10" />
        <Discover className="p-10" />
        <Courses className="p-10"/>
        <WhyUs className="p-10"/>
        <Offer className="p-10" />
        <Clients className="p-10" />
        <Testimonials className="p-10"/>
        <Blog className="p-10" />
      </main>
    </div>
  );
}
