"use client";

import { motion } from "framer-motion";

export function GreatArch() {
  return (
    <section className="py-24 bg-sand-light flex flex-col items-center">
      <div className="relative w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative aspect-video overflow-hidden rounded-t-full border-8 border-white shadow-2xl"
        >
          <img src="/images/arch.png" alt="Oasis Portal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-700" />
        </motion.div>
        
        <div className="text-center mt-12 space-y-4">
          <h2 className="text-2xl font-stylized text-oasis-umber tracking-[0.5em]">The Oasis Sanctuary</h2>
          <p className="text-xs uppercase tracking-[0.3em] text-oasis-accent">Step into the Mediterranean Odyssey</p>
        </div>
      </div>
    </section>
  );
}
