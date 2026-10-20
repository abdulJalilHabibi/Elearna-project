import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import BlogCard from "./BlogCard";
import { blog } from "../Home/content";

export default function Blog({ className = "bg-light-blue" }) {
  return (
    <section className={`pt-20 pb-[90px] ${className}`}>
      <Container>
        <SectionHeading
          eyebrow={blog.eyebrow}
          title={blog.title}
          description={blog.text}
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {blog.posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
