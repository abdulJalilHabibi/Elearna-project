import PricingHero from "./PricingHero";
import PricingFaq from "./PricingFaq";
import PricingCta from "./PricingCta";

export default function PricingTwo() {
  const p = "p-4 sm:p-6 md:p-8 lg:p-10";

  return (
    <div className="w-full overflow-x-clip">
      <main className="w-full">
        <PricingHero className={p} />
        <PricingFaq className={p} />
        <PricingCta className={p} />
      </main>
    </div>
  );
}
