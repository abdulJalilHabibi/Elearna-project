import BlogHero from "./BlogHero";
import BlogGrid from "./BlogGrid";
import CtaBanner from "../contact/CtaBanner";

export default function Blog() {
  return (
    <div className="w-full overflow-hidden">
      <main className="w-full">
        <BlogHero />
        <BlogGrid />
        <CtaBanner />
      </main>
    </div>
  );
}
