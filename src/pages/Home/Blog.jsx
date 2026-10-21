import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import BlogCard from "./BlogCard";
import { blog } from "./content";

export default function Blog({className}) {
  return (
    <section className={` ${className} bg-light-blue   pt-20 pb-[90px]`}>
      <Container>
        <SectionHeading
          eyebrow={blog.eyebrow}
          title={blog.title}
          description={blog.text}
          align="center"
          className="mb-12 font-semibold"
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
