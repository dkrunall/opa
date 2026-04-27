"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: "fine-dine",
    title: "Fine Dine",
    subtitle: "CULINARY MASTERY",
    description: "Immerse yourself in a Mediterranean symphony of flavors, where every dish tells a story of sun-drenched coasts and spice-laden markets.",
    image: "/images/food.png",
  },
  {
    id: "night-life",
    title: "Night Life",
    subtitle: "THE AFTER DARK",
    description: "When the moon rises, Opa transforms. Experience the ultimate fusion of world-class beats and an electric Arabic atmosphere.",
    image: "/images/dj.png",
  }
];

export function Experiences() {
  const [activeTab, setActiveTab] = useState(experiences[0]);

  return (
    <section id="experience" className="py-32 bg-sand-light overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-stylized text-oasis-umber tracking-[0.4em]">Experiences</h2>
          <div className="flex gap-4 justify-center">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp)}
                className={`badge-outline transition-all duration-500 hover:border-oasis-umber ${
                  activeTab.id === exp.id ? "bg-oasis-umber text-sand-light border-oasis-umber" : "text-oasis-umber/60"
                }`}
              >
                {exp.title}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-6xl relative h-[500px] md:h-[700px] overflow-hidden rounded-sm group cursor-explore">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img src={activeTab.image} alt={activeTab.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber/90 via-oasis-umber/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex flex-col items-center justify-end p-12 md:p-24 text-center">
            <motion.div
              key={activeTab.id + "-text"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <span className="text-sand-base uppercase tracking-[0.6em] text-xs font-semibold">{activeTab.subtitle}</span>
              <h3 className="text-4xl md:text-7xl font-stylized text-sand-light">{activeTab.title}</h3>
              <p className="text-sand-light/70 max-w-xl mx-auto font-sans leading-relaxed">
                {activeTab.description}
              </p>
              <button className="px-8 py-3 bg-oasis-gold text-oasis-umber font-bold uppercase tracking-widest text-xs hover:bg-white transition-all">
                Reserve Experience
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
