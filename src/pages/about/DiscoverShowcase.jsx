import { useState } from "react";
import DiscoverCard from "./DiscoverCard";
import { discover } from "../Home/content";

// Full-width image with 4 hover cards; the background swaps to match the active card.
export default function DiscoverShowcase({ images = discover.images, cards = discover.cards, className = "" }) {
  const [active, setActive] = useState(0);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative min-h-[640px] md:min-h-[560px] lg:min-h-0">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`h-full w-full object-cover transition-opacity duration-700 ${
              i === 0 ? "absolute inset-0 lg:relative" : "absolute inset-0"
            } ${active === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-[5] grid grid-cols-1 bg-gradient-to-b from-[#060f1100] from-[33%] to-[#060f11] sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <DiscoverCard
            key={card.number}
            {...card}
            active={active === i}
            onActivate={() => setActive(i)}
            className={i < cards.length - 1 ? "lg:border-r" : ""}
          />
        ))}
      </div>
    </div>
  );
}
