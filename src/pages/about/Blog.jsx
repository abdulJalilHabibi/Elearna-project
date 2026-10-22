import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import BlogCard from "./BlogCard";
import { blog } from "../Home/content";

export default function Blog({ className = "bg-light-blue" }) {
  return (
    <section className={`py-14 sm:py-20 lg:py-[90px] ${className}`}>
      <Container>
        <SectionHeading
          eyebrow={blog.eyebrow}
          title={blog.title}
          description={blog.text}
          align="center"
          className="mb-8 sm:mb-12"
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
