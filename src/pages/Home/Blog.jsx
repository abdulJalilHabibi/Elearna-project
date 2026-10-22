import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import BlogCard from "./BlogCard";
import { blog } from "./content";

export default function Blog({ className = "" }) {
  return (
    <section className={`bg-light-blue pt-14 pb-16 sm:pt-20 sm:pb-[90px] ${className}`}>
      <Container>
        <SectionHeading
          eyebrow={blog.eyebrow}
          title={blog.title}
          description={blog.text}
          align="center"
          className="mb-8 font-semibold sm:mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-[30px] lg:grid-cols-3">
          {blog.posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
