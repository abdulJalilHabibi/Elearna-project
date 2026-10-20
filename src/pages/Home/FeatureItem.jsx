export default function FeatureItem({ icon, title, text }) {
  return (
    <div className="flex max-w-[383px] flex-1 items-start gap-6">
      <img src={icon} alt="" className="mt-1.5 shrink-0" />
      <div>
        <h4 className="mb-1 text-[20px] tracking-[-0.5px] md:text-[24px]">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
