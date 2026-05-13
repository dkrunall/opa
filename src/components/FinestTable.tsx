"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export function FinestTable() {
  return (
    <section className="py-16 md:py-28 lg:py-40 bg-oasis-umber relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-oasis-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-oasis-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left: Brand Narrative */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-oasis-accent text-[10px] uppercase tracking-[1em] font-bold block">
                  Mediterranean · Lebanese · Arabic · Turkish
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-stylized text-sand-light leading-[0.9] tracking-tight">
                  The Finest <br /> Table in <span className="text-oasis-accent">Andheri</span>
                </h2>
              </div>

              <div className="space-y-8 text-sand-light/60 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  OPA Bar & Cafe is widely regarded as the <strong className="text-oasis-accent font-medium italic">best Mediterranean food restaurant in Andheri East</strong> and the <strong className="text-oasis-accent font-medium italic">best Lebanese restaurant in Mumbai</strong>. Our kitchen is inspired by centuries of coastal culinary heritage.
                </p>
                <p>
                  From the spice-laden souks of Beirut to the sun-drenched shores of the Mediterranean, we bring you the <strong className="text-sand-light/90 font-medium italic">best Arabic restaurant in Andheri East Mumbai</strong> experience with every plate we serve.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.3em] text-oasis-accent font-bold">
                <span>Healthy Food Cafe</span>
                <span className="opacity-30">•</span>
                <span>Rooftop Dining</span>
                <span className="opacity-30">•</span>
                <span>LIT Cocktails</span>
              </div>
            </div>

            {/* Right: Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Best Mediterranean Restaurant", sub: "Andheri East · Mumbai", desc: "The city's most authentic coastal flavors." },
                { label: "Best Lebanese Restaurant", sub: "Levantine Flavors", desc: "Tradition-steeped recipes from Beirut." },
                { label: "Best Arabic Restaurant", sub: "Andheri East Mumbai", desc: "Middle-Eastern heritage at every table." },
                { label: "Best Turkish Restaurant", sub: "Andheri · Mumbai", desc: "The soul of Istanbul in every bite." },
                { label: "Healthy Food Cafe", sub: "Andheri East Mumbai", desc: "Wholesome, fresh, and sun-inspired." },
                { label: "Rooftop Dining in Andheri", sub: "Peninsula Grand · Sakinaka", desc: "Starlit dinners above the city lights." },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 space-y-3 hover:bg-sand-light hover:border-sand-light transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <p className="font-stylized text-sand-light text-xl leading-tight group-hover:text-oasis-umber transition-colors duration-500">
                    {card.label}
                  </p>
                  <div className="space-y-1">
                    <p className="text-[10px] text-oasis-accent uppercase tracking-widest group-hover:text-oasis-accent transition-colors duration-500 font-bold">
                      {card.sub}
                    </p>
                    <p className="text-xs text-sand-light/30 group-hover:text-oasis-umber/40 transition-colors duration-500 font-light leading-snug">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer info bar */}
          <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/10 grid md:grid-cols-2 gap-6 md:gap-8 text-sm text-sand-light/30 font-light">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-oasis-accent">
                 <MapPin size={18} />
              </div>
              <p>Hotel Peninsula Grand, Sakinaka Junction, Andheri East, Mumbai — 400072</p>
            </div>
            <div className="flex items-center gap-4 md:justify-end">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-oasis-accent">
                 <Clock size={18} />
              </div>
              <p>Open daily · Lunch & Dinner · Till late night</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
