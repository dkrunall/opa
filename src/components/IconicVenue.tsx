"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export function IconicVenue() {
  return (
    <section className="py-16 md:py-28 lg:py-40 bg-sand-light relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-oasis-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-oasis-umber/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left: Brand Narrative */}
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">
                  Andheri East · Sakinaka · Mumbai
                </span>
                <h2 className="text-4xl md:text-6xl font-stylized text-oasis-umber leading-tight tracking-tight">
                  Andheri East's <br /> Most <span className="text-oasis-accent">Iconic</span> Venue
                </h2>
              </div>

              <div className="space-y-6 text-oasis-umber/60 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Searching for the <strong className="text-oasis-umber/90 font-medium italic">best bar in Andheri</strong> or an <strong className="text-oasis-umber/90 font-medium italic">aesthetic cafe in Andheri East</strong> that truly delivers? OPA Bar & Cafe is celebrated as the finest <strong className="text-oasis-umber/90 font-medium italic">bar and restaurant in Andheri East</strong> — combining a world-class cocktail bar, rooftop lounge, and a vibrant nightlife sanctuary.
                </p>
                <p>
                  From <strong className="text-oasis-umber/90 font-medium italic">pubs in Andheri East Mumbai</strong> to finding the <strong className="text-oasis-umber/90 font-medium italic">best lounge in Mumbai</strong>, we answer every craving. Our <strong className="text-oasis-umber/90 font-medium italic">rooftop cafe in Andheri</strong> is loved for healthy food and a <strong className="text-oasis-umber/90 font-medium italic">best Arabian ambience in Mumbai</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-[0.3em] text-oasis-accent font-bold opacity-70">
                <span>Mediterranean Food Restaurant</span>
                <span className="opacity-30">•</span>
                <span>Lebanese</span>
                <span className="opacity-30">•</span>
                <span>Arabic</span>
                <span className="opacity-30">•</span>
                <span>Turkish</span>
              </div>
            </div>

            {/* Right: SEO Optimized Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { label: "Best Bar in Andheri", sub: "Cocktails · Full Bar · Late Night", desc: "Andheri's most celebrated destination for drinks." },
                { label: "Rooftop Cafe Andheri", sub: "Aesthetic · Healthy Food", desc: "Rooftop dining with a stunning starlit view." },
                { label: "Best Lounge Mumbai", sub: "Arabian Ambience · Music", desc: "Immersive Middle-Eastern vibes and sonic soul." },
                { label: "Mediterranean Restaurant", sub: "Lebanese · Arabic · Turkish", desc: "Authentic Levantine flavors in Andheri East." },
                { label: "Best Club in Mumbai", sub: "DJ Nights · Party Weekly", desc: "The ultimate nightlife sanctuary in Mumbai." },
                { label: "On Till Late Night", sub: "Open Every Night", desc: "The best party place in Andheri East Mumbai." },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-white/30 backdrop-blur-sm border border-oasis-umber/5 rounded-[2rem] p-6 space-y-2 hover:bg-oasis-umber hover:border-oasis-umber transition-all duration-700 hover:shadow-xl"
                >
                  <p className="font-stylized text-oasis-umber text-lg group-hover:text-sand-light transition-colors duration-500">
                    {card.label}
                  </p>
                  <div className="space-y-1">
                    <p className="text-[9px] text-oasis-accent uppercase tracking-widest group-hover:text-oasis-accent transition-colors duration-500 font-bold">
                      {card.sub}
                    </p>
                    <p className="text-[11px] text-oasis-umber/40 group-hover:text-sand-light/40 transition-colors duration-500 font-light leading-snug">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer info bar */}
          <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-oasis-umber/10 grid md:grid-cols-2 gap-6 md:gap-8 text-sm text-oasis-umber/40 font-light">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-oasis-umber/5 flex items-center justify-center text-oasis-accent">
                 <MapPin size={18} />
              </div>
              <p>Hotel Peninsula Grand, Sakinaka Junction, Andheri East, Mumbai — 400072</p>
            </div>
            <div className="flex items-center gap-4 md:justify-end">
              <div className="w-10 h-10 rounded-full bg-oasis-umber/5 flex items-center justify-center text-oasis-accent">
                 <Clock size={18} />
              </div>
              <p>Open daily · Till late night &nbsp;|&nbsp; Opposite Sakinaka Metro Station</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
