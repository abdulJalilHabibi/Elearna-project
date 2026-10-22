import { useState } from "react";
import DiscoverCard from "./DiscoverCard";
import { discover } from "../Home/content";

export default function DiscoverShowcase({
  images = discover.images,
  cards = discover.cards,
  className = "",
}) {
  const [active, setActive] = useState(0);

  return (
    <div
      className={`relative min-h-[680px] overflow-hidden sm:min-h-[560px] lg:min-h-[580px] xl:min-h-[640px] ${className}`}
    >
      <div className="absolute inset-0">
        {images.map((src, i) => (
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
        {cards.map((card, i) => {
          const borderClasses = [
            i < cards.length - 1 ? "border-b sm:border-b-0" : "",
            i < 2 ? "sm:border-b lg:border-b-0" : "",
            i % 2 === 0 ? "sm:border-r" : "",
            i < cards.length - 1 ? "lg:border-r" : "",
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
  );
}