import Button from "@/ui/Button";

export default function HelpBox() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 rounded bg-light-blue px-10 py-[30px]">
      <div>
        <h5 className="mb-1 text-[17px] md:text-[20px]">Still have questions?</h5>
        <p>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
      </div>
      <Button href="#" className="shrink-0">Get Started</Button>
    </div>
  );
}
