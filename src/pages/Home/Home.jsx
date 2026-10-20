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
    <>
      <main>
        <Hero />
        <Features />
        <Categories />
        <Discover />
        <Courses />
        <WhyUs />
        <Offer />
        <Clients />
        <Testimonials />
        <Blog />
      </main>
    </>
  );
}
