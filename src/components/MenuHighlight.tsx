"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const menuItems = [
  { name: "Hummus Beiruti", price: "$18", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?q=80&w=2070&auto=format&fit=crop" },
  { name: "Lamb Moussaka", price: "$32", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" },
  { name: "Turkish Delight", price: "$14", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=2574&auto=format&fit=crop" },
  { name: "Opa Signature Cocktail", price: "$22", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" },
];

export function MenuHighlight() {
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".menu-card");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (scrollRef.current?.offsetWidth || 0),
      }
    });
  }, []);

  return (
    <section id="menu" ref={scrollRef} className="h-screen bg-black flex overflow-hidden">
      <div className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-12 md:px-24">
        <h2 className="text-6xl md:text-8xl font-serif mb-6">Explore <br /><span className="text-brand-gold italic">The Palette</span></h2>
        <p className="text-white/40 uppercase tracking-[0.5em] text-sm">Swipe Through Our Signature Dishes</p>
      </div>

      <div className="flex h-full items-center">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card flex-shrink-0 w-[400px] md:w-[600px] h-[70vh] mx-10 relative group">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-3xl font-serif text-white">{item.name}</h3>
              <p className="text-brand-gold text-xl">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
