import Container from "@/ui/Container";
import Reveal from "@/ui/Reveal";
import { featuredPost, blogPostsGrid } from "./blogData";

export default function BlogGrid({ className = "" }) {
  return (
    <section className={`py-[60px] md:py-[90px] lg:py-[120px] ${className}`}>
      <Container>
        <div className="flex flex-col items-start gap-[30px] lg:flex-row">
          {/* Left: Sticky Featured Post */}
          <div className="w-full lg:self-start lg:sticky lg:top-[140px] lg:max-w-[630px] lg:flex-1">
            <Reveal delay={100}>
              <a
                href={featuredPost.href}
                className="group block overflow-hidden rounded bg-white shadow-[0_40px_60px_rgba(15,37,42,0.18)] transition-all duration-300 hover:shadow-[0_40px_60px_rgba(15,37,42,0.28)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-10 lg:p-[50px] lg:pb-[40px]">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="text-[13px] font-medium text-paragraph">
                      {featuredPost.date}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-heading" />
                    <span className="text-[13px] font-medium uppercase text-heading">
                      {featuredPost.author}
                    </span>
                  </div>
                  <h3 className="mb-4 text-[22px] font-semibold leading-tight tracking-[-0.5px] text-heading transition-colors duration-300 group-hover:text-blue md:text-[26px]">
                    {featuredPost.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-paragraph md:text-[16px]">
                    {featuredPost.description}
                  </p>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Right: 2 Columns of Smaller Blog Cards */}
          <div className="flex w-full flex-1 flex-col gap-[30px] sm:flex-row lg:max-w-[630px]">
            {blogPostsGrid.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-1 flex-col gap-[30px]">
                {column.map((post, postIdx) => (
                  <Reveal
                    key={postIdx}
                    delay={150 + (colIdx * 4 + postIdx) * 70}
                  >
                    <a
                      href={post.href}
                      className="group block overflow-hidden rounded bg-white shadow-[0_40px_60px_rgba(15,37,42,0.18)] transition-all duration-300 hover:shadow-[0_40px_60px_rgba(15,37,42,0.28)]"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 pb-7 md:p-6 md:pb-8">
                        <div className="mb-3 flex flex-wrap items-center gap-2.5">
                          <span className="text-[13px] font-medium text-paragraph">
                            {post.date}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-heading" />
                          <span className="text-[13px] font-medium uppercase text-heading">
                            {post.author}
                          </span>
                        </div>
                        <h4 className="text-[16px] font-semibold leading-snug tracking-[-0.5px] text-heading transition-colors duration-300 group-hover:text-blue md:text-[18px]">
                          {post.title}
                        </h4>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
