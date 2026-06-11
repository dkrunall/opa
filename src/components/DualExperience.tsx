"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fineDineHighlights = [
  "Gourmet Feast",
  "Elevated Dining",
  "Curated Cocktails",
  "Middle-Eastern Soul",
  "Modern Levantine Cuisine",
  "Crafted Confections",
];

const nightLifeHighlights = [
  "Nightlife Reimagined",
  "Cocktails and Club Energy",
  "Bollytech Takeovers",
  "Midnight Muse Nights",
  "Global Artist Takeovers",
  "Weekend Soundscapes",
];

export function DualExperience() {
  return (
    <section className="py-24 md:py-40 bg-sand-light overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 space-y-4"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-oasis-accent font-bold">The OPA World</p>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-stylized text-oasis-umber leading-tight">
            Two Worlds.<br className="hidden md:block" /> One Address.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">

          {/* Fine Dine Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[420px] md:min-h-[580px] lg:min-h-[640px] cursor-pointer"
          >
            <img
              src="/food/30 TEN -08232.png"
              alt="Fine Dining at OPA"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber/95 via-oasis-umber/50 to-oasis-umber/10" />

            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-14">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.6em] text-oasis-gold font-bold">Culinary Mastery</span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-stylized text-sand-light mt-2">Fine Dine</h3>
                  <p className="text-sand-light/55 font-sans text-sm leading-relaxed mt-3 max-w-sm">
                    Bold middle-eastern flavours, artisanal cocktails, and an atmosphere designed for afterhours indulgence.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                  {fineDineHighlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-oasis-gold shrink-0" />
                      <span className="text-sand-light/65 text-[11px] font-sans">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/fine-dine-in-andheri-east"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-oasis-gold text-oasis-umber font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-white transition-all duration-300 w-fit group/btn"
                >
                  Explore Fine Dine
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Night Life Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[420px] md:min-h-[580px] lg:min-h-[640px] cursor-pointer"
          >
            <img
              src="/lounge/DSC03298.jpg"
              alt="Night Life at OPA"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-14">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.6em] text-oasis-gold font-bold">The After Dark</span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-stylized text-sand-light mt-2">Night Life</h3>
                  <p className="text-sand-light/55 font-sans text-sm leading-relaxed mt-3 max-w-sm">
                    Immersive beats, endless nights — OPA is where the city comes alive after dark.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                  {nightLifeHighlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-oasis-gold shrink-0" />
                      <span className="text-sand-light/65 text-[11px] font-sans">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/nightlife-in-andheri"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-oasis-gold text-oasis-gold font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-oasis-gold hover:text-oasis-umber transition-all duration-300 w-fit group/btn"
                >
                  Explore Night Life
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
