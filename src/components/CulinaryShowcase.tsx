"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "Signature Plates", value: "30+" },
  { label: "Curated Cocktails", value: "15+" },
  { label: "Cuisine Focus", value: "Levantine" },
];

export function CulinaryShowcase() {
  return (
    <section id="menu" className="py-16 md:py-28 lg:py-40 bg-sand-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image wrapper with parallax & reveal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl bg-oasis-umber group"
          >
            <img
              src="/food/30 TEN -08241.png"
              alt="OPA Culinary Masterpieces"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.22, 1, 0.36, 1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber/40 to-transparent" />
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.5em] text-oasis-accent font-bold">Peninsula Grand · Sakinaka</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-stylized text-oasis-umber leading-none">The Taste</h2>
            </div>

            <div className="space-y-6 text-oasis-umber/80 leading-relaxed font-sans normal-case tracking-normal">
              <p className="text-lg md:text-xl font-light text-oasis-umber/90 italic">
                "Every dish at OPA is a culinary journey designed to transcend the ordinary. We invite you to experience the sun-drenched flavors of the Mediterranean and the aromatic soul of the Levant."
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                At OPA Bar & Cafe, our kitchen blends ancient traditions with modern culinary refinement. From our traditional wood-fired Turkish oven baking hand-stretched pides daily, to tender kebabs infused with imported sumac, za'atar, and saffron, our food is crafted to be shared amongst loved ones.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Whether you are seeking vibrant hot mezze platters, fresh-pressed signature cocktails, or our legendary artisanal desserts, OPA serves as a sanctuary for the culinary enthusiast in Andheri East, Mumbai.
              </p>
            </div>

            {/* highlights row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-oasis-umber/10">
              {highlights.map((h) => (
                <div key={h.label} className="space-y-1">
                  <p className="text-2xl md:text-3xl font-stylized text-oasis-umber leading-none">{h.value}</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-oasis-accent font-bold mt-1">{h.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
