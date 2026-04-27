"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const tags = ["Truffle", "Sumac", "Saffron", "Honey", "Za'atar"];

const highlights = [
  { label: "Signature Dishes", value: "30+" },
  { label: "Years Crafting", value: "10+" },
  { label: "Avg Spend / Two", value: "₹1,500" },
];

function scrollToMenu() {
  document.getElementById("full-menu")?.scrollIntoView({ behavior: "smooth" });
}

export function CulinaryShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={sectionRef} id="menu" className="py-28 md:py-44 bg-sand-light overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-oasis-accent mb-3">Peninsula Grand · Sakinaka</p>
            <h2 className="text-5xl md:text-8xl font-stylized text-oasis-umber leading-none">The Taste</h2>
          </div>
          <div className="flex gap-8 md:gap-12 shrink-0">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <p className="text-2xl md:text-3xl font-stylized text-oasis-umber">{h.value}</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-oasis-accent mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8 md:row-span-2 relative group rounded-[2.5rem] overflow-hidden bg-oasis-umber shadow-2xl min-h-[480px] md:min-h-[620px] cursor-pointer"
            onClick={scrollToMenu}
          >
            <motion.img
              src="/images/food_real.webp"
              alt="Signature Dish"
              style={{ y: imgY }}
              className="absolute inset-0 w-full h-[115%] object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-[1.5s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/30 to-transparent" />

            {/* Top badge */}
            <div className="absolute top-8 left-8">
              <span className="bg-oasis-gold/90 backdrop-blur-sm text-oasis-umber px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">
                Signature of 2026
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-10 left-10 right-10 space-y-4">
              <h3 className="text-4xl md:text-6xl font-stylized text-sand-light leading-tight">
                Lamb<br />Moussaka
              </h3>
              <p className="text-sand-light/60 text-sm leading-relaxed max-w-xs hidden md:block font-sans normal-case tracking-normal">
                Layers of spiced minced lamb, roasted eggplant & house béchamel — slow oven-baked to perfection.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((t) => (
                  <span key={t} className="bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-sand-light/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cocktail card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="md:col-span-4 relative group rounded-[2.5rem] overflow-hidden min-h-[280px] md:min-h-[300px] cursor-pointer"
            onClick={scrollToMenu}
          >
            <img
              src="/images/cocktail_real.webp"
              alt="Cocktail"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[9px] uppercase tracking-[0.4em] text-oasis-gold mb-2">Signature Cocktail</p>
              <h4 className="text-2xl font-stylized text-sand-light">Opa 300</h4>
            </div>
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="md:col-span-4 bg-white rounded-[2.5rem] p-9 flex flex-col justify-between shadow-lg border border-sand-base/20 min-h-[280px]"
          >
            <div className="space-y-4">
              <p className="text-[9px] uppercase tracking-[0.4em] text-oasis-accent">Taste Profile</p>
              <h4 className="text-xl font-stylized text-oasis-umber">Mediterranean Soul</h4>
              <p className="text-sm text-oasis-umber/50 leading-relaxed font-sans normal-case tracking-normal">
                From Levantine mezze to grilled pides and Arabian-inspired cocktails — every plate carries the warmth of the Middle East.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((t) => (
                <span key={t} className="bg-sand-light px-3 py-1.5 rounded-xl text-[8px] font-bold uppercase tracking-widest text-oasis-accent">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bar image card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:col-span-4 relative group rounded-[2.5rem] overflow-hidden min-h-[320px] cursor-pointer"
            onClick={scrollToMenu}
          >
            <img
              src="/images/bar.webp"
              alt="Bar"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-stylized text-white tracking-widest drop-shadow-2xl">BAKLAVA</span>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            onClick={scrollToMenu}
            className="md:col-span-8 bg-oasis-umber rounded-[2.5rem] p-10 md:p-12 border border-oasis-gold/10 flex flex-col md:flex-row items-center justify-between group cursor-pointer gap-8 hover:bg-oasis-umber/90 transition-colors duration-500"
          >
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[9px] uppercase tracking-[0.5em] text-oasis-accent font-bold">Explore all 30+ dishes</span>
              <h3 className="text-3xl md:text-5xl font-stylized text-sand-light group-hover:translate-x-3 transition-transform duration-500">
                Full Collection →
              </h3>
            </div>
            <div className="w-24 h-24 bg-oasis-gold rounded-full flex items-center justify-center text-oasis-umber shrink-0 animate-spin-slow shadow-xl shadow-oasis-gold/30">
              <span className="text-[8px] font-bold uppercase tracking-widest text-center leading-tight">View<br />Menu</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
