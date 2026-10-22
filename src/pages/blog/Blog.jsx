import BlogHero from "./BlogHero";
import BlogGrid from "./BlogGrid";
import CtaBanner from "../contact/CtaBanner";

export default function Blog() {
  const p = "p-4 sm:p-6 md:p-8 lg:p-10";
  return (
    <div className="w-full overflow-x-clip">
      <main className="w-full">
        <BlogHero className={p} />
        <BlogGrid className={p} />
        <CtaBanner className={p} />
      </main>
    </div>
  );
}