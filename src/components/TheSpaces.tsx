"use client";

import { motion } from "framer-motion";
import { Users, Music, GlassWater, Coffee, Sparkles } from "lucide-react";

const venues = [
  {
    name: "The Lounge",
    capacity: "120 Pax",
    size: "large",
    feature: "Curated Comfort",
    icon: <Users size={16} />,
    image: "/lounge/DSC03257.jpg"
  },
  {
    name: "Main Bar",
    capacity: "150 Pax",
    size: "wide",
    feature: "Liquid Artistry",
    icon: <GlassWater size={16} />,
    image: "/images/bar.webp"
  },
  {
    name: "The Console",
    capacity: "60 Pax",
    size: "small",
    feature: "Sonic Pulse",
    icon: <Music size={16} />,
    image: "/images/dj.png"
  },
  {
    name: "The Cafe",
    capacity: "80 Pax",
    size: "small",
    feature: "Sun-Drenched Flavors",
    icon: <Coffee size={16} />,
    image: "/cafe/DSC03208.jpg"
  }
];

export function TheSpaces() {
  return (
    <section id="spaces" className="py-20 md:py-40 bg-oasis-umber overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center space-y-6">
           <span className="text-[10px] uppercase tracking-[0.6em] text-oasis-accent">Exclusive Venues</span>
           <h2 className="text-3xl md:text-6xl lg:text-8xl font-stylized text-sand-light tracking-tight">The Sanctuary Spaces</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[900px]">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5 
                ${venue.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${venue.size === 'wide' ? 'md:col-span-2 md:row-span-1' : ''}
                ${venue.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
            >
              {/* Background with Zoom */}
              <img 
                src={venue.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-60 grayscale hover:grayscale-0 transition-all"
                alt={venue.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/40 to-transparent opacity-90" />

              {/* Blueprint Overlay Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />

              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-oasis-accent group-hover:bg-oasis-accent group-hover:text-oasis-umber transition-all duration-500">
                     {venue.icon}
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-oasis-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">Details</span>
                </div>

                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-oasis-accent/30 text-[9px] font-bold uppercase tracking-widest text-oasis-accent">
                    {venue.feature}
                  </span>
                  <div className="space-y-1 text-left">
                    <h3 className="text-2xl md:text-4xl font-stylized text-sand-light">{venue.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-oasis-accent/60 flex items-center gap-2">
                       <Users size={12} /> {venue.capacity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Border Ring Glow on hover */}
              <div className="absolute inset-0 border-2 border-oasis-gold/0 group-hover:border-oasis-gold/20 rounded-[2.5rem] transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
