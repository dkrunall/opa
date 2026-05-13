"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const instagramPhotos = [
  "/food/30 TEN -08223.png",
  "/lounge/DSC03273.jpg",
  "/cafe/DSC03218.jpg",
  "/food/30 TEN -08192.png",
  "/lounge/DSC03339.jpg",
  "/cafe/DSC03321.jpg",
];

export function SocialGallery() {
  return (
    <section className="py-24 md:py-40 bg-sand-light overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-20 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">The Vibe</span>
          <h2 className="text-4xl md:text-6xl font-stylized text-oasis-umber tracking-[0.3em]">Social Sanctuary</h2>
        </div>
        
        <a 
          href="https://instagram.com/opabarandcafe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-oasis-umber/10 rounded-full text-oasis-umber uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-oasis-umber hover:text-sand-light transition-all duration-500 group shadow-sm"
        >
          <Instagram size={16} className="group-hover:scale-110 transition-transform" />
          @opabarandcafe
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
        {instagramPhotos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 0.98 }}
            className="aspect-square overflow-hidden cursor-pointer relative group"
          >
            <img src={photo} alt="" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-oasis-umber/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <Instagram size={24} className="text-white opacity-60" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-oasis-accent/40 font-bold italic">
          Shared moments from the heart of Mumbai
        </p>
      </div>
    </section>
  );
}
