import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import { blogHero } from "./blogData";

export default function BlogHero() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat pt-[180px] pb-[120px] pl-12 md:pt-[220px] md:pb-[180px] lg:pt-[240px] lg:pb-[210px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${blogHero.background})`,
      }}
    >
      <Container>
        <div className="max-w-[630px]">
          <Eyebrow light className="mb-4">
            {blogHero.eyebrow}
          </Eyebrow>
          <h1 className="text-[35px] text-[#FFFFFF]  font-bold leading-[1.15] tracking-[-1.5px]  md:text-[45px] lg:text-[60px] lg:leading-[68px]">
            {blogHero.title}
          </h1>
        </div>
      </Container>
    </section>
  );
}
