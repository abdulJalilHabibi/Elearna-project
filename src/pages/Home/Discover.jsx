import { useState } from "react";
import Eyebrow from "@/ui/Eyebrow";
import DiscoverCard from "./DiscoverCard";
import { discover } from "./content";

export default function Discover({ className = "" }) {
  const [active, setActive] = useState(0);

  return (
    <section className={`bg-[#F1F4F4] pt-14 sm:pt-20 lg:pt-[90px] ${className}`}>
      <div className="mx-auto mb-9 flex max-w-[928px] flex-col items-center px-[15px] text-center sm:mb-12">
        <Eyebrow>{discover.eyebrow}</Eyebrow>
        <h3 className="mt-3 sm:mt-4 text-[22px] font-semibold leading-[1.25] tracking-[-0.8px] text-[#0F252A] sm:text-[28px] md:text-[32px] lg:text-[35px] lg:leading-[42px]">
          {discover.title}
        </h3>
      </div>

      <div className="relative min-h-[680px] overflow-hidden sm:min-h-[560px] lg:min-h-[580px] xl:min-h-[640px]">
        {/* Background images cross-fade based on the hovered/active card */}
        <div className="absolute inset-0">
          {discover.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="relative z-[5] grid min-h-[680px] grid-cols-1 bg-gradient-to-b from-[#060f1100] from-[10%] via-[#060f11]/65 to-[#060f11] sm:min-h-[560px] sm:grid-cols-2 lg:min-h-[580px] lg:grid-cols-4 xl:min-h-[640px]">
          {discover.cards.map((card, i) => {
            // Borders for mobile (bottom), tablet (2x2 grid), and desktop (4 columns)
            const borderClasses = [
              i < discover.cards.length - 1 ? "border-b sm:border-b-0" : "",
              i < 2 ? "sm:border-b lg:border-b-0" : "",
              i % 2 === 0 ? "sm:border-r" : "",
              i < discover.cards.length - 1 ? "lg:border-r" : "",
            ].join(" ");

            return (
              <DiscoverCard
                key={card.number}
                {...card}
                active={active === i}
                onActivate={() => setActive(i)}
                className={borderClasses}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}