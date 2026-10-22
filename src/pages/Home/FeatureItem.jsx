export default function FeatureItem({ icon, title, text }) {
  return (
    <div className="flex max-w-[383px] flex-1 items-start gap-4 sm:gap-5 lg:gap-6">
      <img src={icon} alt="" className="mt-1 h-11 w-11 sm:h-auto sm:w-auto shrink-0" />
      <div>
        <h4 className="mb-1 text-[18px] font-bold tracking-[-0.5px] text-heading sm:text-[20px] xl:text-[24px]">
          {title}
        </h4>
        <p className="text-[15px] leading-relaxed text-paragraph sm:text-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
}