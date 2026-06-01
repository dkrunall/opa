"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const foodImages = [
  "30 TEN --2.png",
  "30 TEN --3.png",
  "30 TEN --4.png",
  "30 TEN -.png",
  "30 TEN -08098.png",
  "30 TEN -08110.png",
  "30 TEN -08164.png",
  "30 TEN -08176.png",
  "30 TEN -08182.png",
  "30 TEN -08192.png",
  "30 TEN -08195.png",
  "30 TEN -08200.png",
  "30 TEN -08213.png",
  "30 TEN -08223.png",
  "30 TEN -08232.png",
  "30 TEN -08241.png",
  "30 TEN -08245.png",
  "30 TEN -08247.png",
  "30 TEN -08251.png",
  "30 TEN -08256.png"
];

export function FoodGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeImage = foodImages[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % foodImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + foodImages.length) % foodImages.length);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const button = scrollRef.current.children[index] as HTMLElement;
      if (button) {
        scrollRef.current.scrollTo({
          left: button.offsetLeft - scrollRef.current.clientWidth / 2 + button.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <section className="py-24 md:py-40 bg-oasis-umber relative overflow-hidden text-sand-light selection:bg-oasis-gold selection:text-oasis-umber">
      {/* Premium background radial gradient & vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,30,24,0.85)_0%,rgba(18,14,12,1)_100%)] pointer-events-none" />
      <div className="absolute -left-64 top-1/4 w-[600px] h-[600px] bg-oasis-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-64 bottom-1/4 w-[600px] h-[600px] bg-oasis-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-oasis-gold/10 border border-oasis-gold/20 rounded-full text-oasis-gold text-[9px] font-bold uppercase tracking-[0.4em]">
            <Sparkles size={12} className="text-oasis-gold" />
            Sensory Experience
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-stylized text-sand-light leading-none tracking-tight">
            The Gallery
          </h2>
          <p className="text-sm md:text-base text-sand-light/60 leading-relaxed font-sans normal-case tracking-normal max-w-lg mx-auto">
            A visual showcase of OPA's culinary craft. Browse through our signature preparations, where texture, color, and plating come together in harmony.
          </p>
        </div>

        {/* Main Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left/Center: Large active plate showcase */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[300px] md:min-h-[450px]">
            
            {/* Nav Arrows */}
            <button 
              onClick={handlePrev}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-sand-light/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-sand-light hover:text-oasis-gold hover:border-oasis-gold/40 hover:bg-white/10 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-sand-light/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-sand-light hover:text-oasis-gold hover:border-oasis-gold/40 hover:bg-white/10 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            {/* Displaying Image with clean entry animation */}
            <div className="w-full max-w-[540px] aspect-[4/3] relative rounded-[2rem] bg-sand-light/[0.01] flex items-center justify-center shadow-2xl border border-white/5 overflow-hidden group">
              {/* Premium ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={`/food/${activeImage}`}
                  alt="OPA Signature Plating"
                  className="w-full h-full object-cover select-none pointer-events-none z-10"
                />
              </AnimatePresence>
              
              {/* Overlay styling for extra premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-15 pointer-events-none" />
            </div>
          </div>

          {/* Right: Editorial content and index indicators */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.6em] text-oasis-gold font-bold">Plate No. {activeIndex + 1} of {foodImages.length}</span>
              <h3 className="text-3xl md:text-4xl font-stylized text-sand-light leading-tight">
                Mediterranean Artistry
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-sand-light/50 font-sans normal-case tracking-normal leading-relaxed">
              Our culinary philosophy emphasizes fresh-milled herbs, traditional cold-pressed oils, and spices imported directly from Levantine markets. Every dish is styled to appeal as much to the eyes as to the palate.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest text-oasis-gold">
                Wood-Fired
              </span>
              <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest text-oasis-gold">
                Fresh Herbs
              </span>
              <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest text-oasis-gold">
                OPA Signature
              </span>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center lg:justify-start gap-2 pt-4">
              {foodImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleThumbnailClick(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-oasis-gold" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Thumbnail Track Carousel */}
        <div className="mt-20 md:mt-28 max-w-5xl mx-auto space-y-4">
          <div className="flex justify-between items-center px-2">
            <span className="text-[9px] uppercase tracking-[0.3em] text-sand-light/40 font-bold">Select a plate to feature</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-oasis-gold font-bold">Swipe / Scroll</span>
          </div>

          {/* Horizontal scroll track (with hidden scrollbar styling) */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-6 snap-x select-none"
            style={{ 
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {/* Inline CSS override to hide webkit scrollbars */}
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {foodImages.map((img, idx) => (
              <button
                key={img}
                onClick={() => handleThumbnailClick(idx)}
                className={`snap-center shrink-0 w-24 h-18 md:w-32 md:h-24 rounded-2xl p-1 bg-white/[0.01] border transition-all duration-500 overflow-hidden outline-none ${
                  activeIndex === idx 
                    ? "border-oasis-gold bg-white/10 scale-105 shadow-[0_0_20px_rgba(212,175,55,0.15)]" 
                    : "border-white/5 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <img
                  src={`/food/${img}`}
                  alt=""
                  className="w-full h-full object-cover rounded-xl select-none pointer-events-none"
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
