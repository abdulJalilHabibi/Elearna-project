import { useState } from "react";
import Eyebrow from "@/ui/Eyebrow";
import DiscoverCard from "./DiscoverCard";
import { discover } from "./content";

export default function Discover() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F1F4F4]  pt-20" >
      <div className="mx-auto mb-9 flex max-w-[928px]  flex-col items-center px-[15px] text-center">
        <Eyebrow>{discover.eyebrow}</Eyebrow>
        <h3 className="mt-4 text-[25px] leading-[1.2] tracking-[-1px] md:text-[30px] lg:text-[35px] lg:leading-[42px]">
          {discover.title}
        </h3>
      </div>

      <div className="relative overflow-hidden">
        {/* Background images cross-fade based on the hovered card */}
        <div className="relative min-h-[640px] md:min-h-[560px] lg:min-h-0">
          {discover.images.map((src, i) => (
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
          {discover.cards.map((card, i) => (
            <DiscoverCard
              key={card.number}
              {...card}
              active={active === i}
              onActivate={() => setActive(i)}
              className={i < discover.cards.length - 1 ? "lg:border-r" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
