"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Marquee({ text = "MENU" }: { text?: string }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sliderRef.current, {
        x: "-25%", // Move only a portion to keep it subtle
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // High scrub for ultra-smoothness
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-12 border-y border-oasis-umber/10 bg-sand-base/5 overflow-hidden flex whitespace-nowrap">
      <div ref={sliderRef} className="flex space-x-12 md:space-x-24 items-center will-change-transform">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="flex items-center space-x-12 md:space-x-24">
            <span className="text-3xl md:text-5xl lg:text-8xl font-stylized text-oasis-umber opacity-20">
              {text}
            </span>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-oasis-accent/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
