import Button from "@/ui/Button";

export default function HelpBox() {
  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded bg-light-blue p-6 sm:flex-row sm:items-center sm:gap-6 sm:px-10 sm:py-[30px]">
      <div>
        <h5 className="mb-1 text-[17px] font-semibold text-heading md:text-[20px]">Still have questions?</h5>
        <p className="text-[14px] text-paragraph sm:text-[15px]">Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
      </div>
      <Button href="#" className="w-full shrink-0 justify-center text-center sm:w-auto">Get Started</Button>
    </div>
  );
}
