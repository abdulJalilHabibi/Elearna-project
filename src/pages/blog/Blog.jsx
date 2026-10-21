import BlogHero from "./BlogHero";
import BlogGrid from "./BlogGrid";
import CtaBanner from "../contact/CtaBanner";

export default function Blog() {
  return (
    <div className="w-full overflow-hidden">
      <main className="w-full">
        <BlogHero className="p-10" />
        <BlogGrid className="p-10" />
        <CtaBanner className="p-10" />
      </main>
    </div>
  );
}
