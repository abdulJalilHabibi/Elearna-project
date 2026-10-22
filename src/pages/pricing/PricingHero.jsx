import { useState } from "react";
import Container from "@/ui/Container";
import Eyebrow from "@/ui/Eyebrow";
import Reveal from "@/ui/Reveal";
import { Link } from "react-router-dom";
import { pricingHeroData } from "./pricingData";

export default function PricingHero({ className = "" }) {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" | "yearly"

  return (
    <section
      className={`relative bg-[#0F252A] bg-cover bg-center bg-no-repeat pt-[140px] pb-[80px] sm:pt-[170px] sm:pb-[100px] lg:pt-[200px] lg:pb-[120px] ${className}`}
      style={{ backgroundImage: `url(${pricingHeroData.background})` }}
    >
      <Container className="max-w-[850px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Reveal delay={50}>
            <Eyebrow light className="!text-white mb-2">
              {pricingHeroData.eyebrow}
            </Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-3 max-w-[644px] text-[30px] font-bold leading-[1.15] tracking-[-1.5px] text-white sm:text-[42px] md:text-[48px] lg:text-[52px]">
              {pricingHeroData.title}
            </h1>
          </Reveal>

          {/* Billing Switcher */}
          <Reveal delay={180}>
            <div className="mt-8 mb-10 inline-flex items-center rounded-full bg-[#7B7C7D]/40 p-1.5 sm:mt-9 sm:mb-12">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-full px-5 py-2 font-heading text-[13px] font-bold uppercase transition-all duration-300 sm:px-6 sm:text-[14px] ${
                  billingCycle === "monthly"
                    ? "bg-[#ffb606] text-[#0F252A] shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`flex items-center gap-2 rounded-full px-5 py-2 font-heading text-[13px] font-bold uppercase transition-all duration-300 sm:px-6 sm:text-[14px] ${
                  billingCycle === "yearly"
                    ? "bg-[#ffb606] text-[#0F252A] shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>Yearly</span>
                <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-[#0F252A]">
                  {pricingHeroData.billingDiscount}
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2">
          {pricingHeroData.plans.map((plan, idx) => {
            const pricing =
              billingCycle === "monthly" ? plan.monthly : plan.yearly;

            return (
              <Reveal key={plan.id} delay={200 + idx * 100}>
                <div
                  className={`flex h-full flex-col items-center rounded-[20px] p-7 text-center transition-all duration-300 sm:p-9 lg:p-10 ${
                    plan.dark
                      ? "border border-[#ffb606] bg-[#0F252A] shadow-2xl"
                      : "bg-white shadow-xl"
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-[72px] items-center justify-center">
                    <img
                      src={plan.icon}
                      alt={plan.name}
                      width={plan.iconWidth}
                      height={plan.iconHeight}
                      className="max-h-[72px] w-auto object-contain"
                    />
                  </div>

                  {/* Plan Name */}
                  <h3
                    className={`text-[22px] font-bold sm:text-[24px] ${
                      plan.dark ? "text-white" : "text-[#0F252A]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-2 mb-6 text-[14px] leading-relaxed sm:text-[15px] ${
                      plan.dark ? "text-[#9095B1]" : "text-[#7B7C7D]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-[16px] text-[#9095B1] line-through">
                      {pricing.originalPrice}
                    </span>
                    <div
                      className={`flex items-baseline gap-1 text-[15px] ${
                        plan.dark ? "text-[#9095B1]" : "text-[#7B7C7D]"
                      }`}
                    >
                      <span
                        className={`font-heading text-[34px] font-bold sm:text-[38px] ${
                          plan.dark ? "text-white" : "text-[#0F252A]"
                        }`}
                      >
                        {pricing.price}
                      </span>
                      <span>{pricing.period}</span>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="my-6 h-[1px] w-full bg-[#9095B1]/30" />

                  {/* Features List */}
                  <div className="mb-8 flex w-full flex-col gap-3 text-left">
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-3.5 text-[14px] sm:text-[15px]"
                      >
                        <img
                          src={feature.included ? plan.tickIcon : plan.crossIcon}
                          alt=""
                          width={21}
                          height={22}
                          className="h-[21px] w-[21px] shrink-0 object-contain"
                        />
                        <span
                          className={
                            plan.dark
                              ? "text-[#9095B1]"
                              : feature.included
                              ? "text-[#0F252A]"
                              : "text-[#7B7C7D]"
                          }
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto w-full">
                    <Link
                      to={plan.buttonHref}
                      className={`block w-full rounded-[4px] py-3.5 px-6 font-heading text-[15px] font-semibold transition-colors duration-300 ${
                        plan.buttonVariant === "yellow"
                          ? "bg-[#ffb606] text-[#0F252A] hover:bg-[#e0a005]"
                          : "bg-[#0F252A] text-white hover:bg-[#20383E]"
                      }`}
                    >
                      {plan.buttonLabel}
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
