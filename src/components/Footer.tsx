"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = footerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="pb-16 bg-sand-light relative z-30 pt-16 md:pt-32 overflow-hidden"
    >
      {/* Large Background Logo Polish */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <h2 className="text-[20vw] font-stylized text-oasis-umber/[0.03] leading-none tracking-tighter">
          OPA
        </h2>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="group max-w-6xl mx-auto bg-oasis-umber rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(61,43,31,0.4)]"
        >
          {/* Luminous Glow following mouse */}
          <motion.div 
            style={{ x: mouseX, y: mouseY }}
            className="absolute -inset-[300px] bg-gradient-to-r from-oasis-accent/10 via-oasis-gold/5 to-transparent blur-[150px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          />
          
          <div className="relative z-10 grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-12">
              <div className="space-y-4">
                 <Link href="/" className="block w-48 h-24">
                  <img src="/logo.png" alt="OPA Logo" className="w-full h-full object-contain object-left brightness-0 invert" />
                </Link>
                <div className="w-20 h-[1px] bg-oasis-accent/30" />
              </div>
              
              <div className="space-y-8">
                <p className="text-sand-light/50 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
                  Redefining the Mediterranean odyssey where gourmet mastery meets the deep pulse of Mumbai's soul.
                </p>
                
                {/* SEO Description */}
                <div className="space-y-6 text-[10px] uppercase tracking-[0.2em] text-sand-light/30 leading-loose max-w-2xl font-medium">
                  <p>
                    OPA Bar & Cafe is celebrated as the <strong className="text-sand-light/60">best bar in Andheri</strong> and the <strong className="text-sand-light/60">best Mediterranean food restaurant in Andheri East Mumbai</strong>. We combine a world-class cocktail bar, rooftop lounge, and authentic Lebanese restaurant under one roof. 
                  </p>
                  <p>
                    From <strong className="text-sand-light/60">nightlife in Andheri</strong> to <strong className="text-sand-light/60">rooftop dining in Mumbai</strong>, OPA remains the city's most iconic destination, offering the <strong className="text-sand-light/60">best Arabian ambience</strong> and signature mixology till late night.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-12">
               <div className="space-y-8">
                <h4 className="text-sand-light uppercase tracking-[0.4em] text-[10px] font-bold opacity-40">Direct Contact</h4>
                
                <div className="space-y-8">
                  <div className="group/item">
                    <p className="text-[9px] uppercase tracking-widest text-oasis-accent font-bold mb-2">Location</p>
                    <p className="text-sand-light/70 text-sm leading-relaxed font-light">Hotel Peninsula Grand, Sakinaka Junction, Andheri East, Mumbai, 400072</p>
                  </div>
                  
                  <div className="group/item">
                    <p className="text-[9px] uppercase tracking-widest text-oasis-accent font-bold mb-2">Reservations</p>
                    <p className="text-sand-light/70 text-lg font-medium">+91 81049 61636</p>
                  </div>

                  <div className="group/item">
                    <p className="text-[9px] uppercase tracking-widest text-oasis-accent font-bold mb-2">Support</p>
                    <p className="text-sand-light/70 text-sm font-light">info@opabarandcafe.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-sand-light/20 uppercase tracking-[0.5em] font-semibold">
            <p>© 2026 OPA BAR & CAFE — ANDHERI EAST MUMBAI</p>
            <div className="flex space-x-12 mt-6 md:mt-0">
              <Link href="/blog" className="hover:text-oasis-accent cursor-pointer transition-colors">Journal</Link>
              <Link href="/contact" className="hover:text-oasis-accent cursor-pointer transition-colors">Find Us</Link>
              <Link href="/book-a-table" className="hover:text-oasis-accent cursor-pointer transition-colors">Book</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
