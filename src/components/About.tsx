"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const patternX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const palmY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-40 bg-sand-light overflow-hidden"
    >
      {/* Drifting Background Pattern */}
      <motion.div 
        style={{ x: patternX }}
        className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none scale-110" 
      />

      {/* Floating Decorative Elements */}
      <motion.div
        style={{ y: palmY }}
        className="absolute -right-20 top-40 w-96 h-96 opacity-10 pointer-events-none"
      >
        <img src="/images/ambience.webp" alt="" className="w-full h-full object-cover rounded-full mix-blend-multiply filter blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block mb-4">The Mediterranean Sanctuary</span>
            <h2 className="text-6xl md:text-[10rem] font-stylized text-oasis-umber leading-none tracking-tight">
               Our <br /> Legacy
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-[2.5rem] font-light text-oasis-umber/70 leading-tight italic"
          >
            "Born from the golden sands and the azure heart of the Mediterranean, OPA is not just a destination. It is a portal to a world where time dissolves into rhythm and flavor."
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            {[
              { label: "Cuisine", detail: "Chef-Driven Art" },
              { label: "Mixology", detail: "Liquid Gold" },
              { label: "Vibe", detail: "Deep House Pulse" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="space-y-2 group"
              >
                <span className="block text-[8px] uppercase tracking-[0.4em] text-oasis-accent font-bold group-hover:text-oasis-umber transition-colors">{stat.label}</span>
                <span className="block h-px w-8 bg-oasis-accent/20 mx-auto group-hover:w-16 transition-all" />
                <span className="block text-xl font-stylized text-oasis-umber">{stat.detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
