"use client";

import { useRef } from "react";
import { Instagram, Facebook, Music, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { useBooking } from "./BookingContext";

export function Footer() {
  const { openModal } = useBooking();
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
      className="pb-16 bg-sand-light relative z-30 pt-32 overflow-hidden"
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
          className="group max-w-6xl mx-auto bg-oasis-umber rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(61,43,31,0.4)]"
        >
          {/* Luminous Glow following mouse */}
          <motion.div 
            style={{ x: mouseX, y: mouseY }}
            className="absolute -inset-[300px] bg-gradient-to-r from-oasis-accent/10 via-oasis-gold/5 to-transparent blur-[150px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          />
          
          <div className="relative z-10 grid lg:grid-cols-5 gap-16 items-center">
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
                <div className="flex space-x-8">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Music, label: "Music" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-oasis-accent hover:bg-oasis-accent hover:text-oasis-umber transition-all duration-500 shadow-xl cursor-pointer"
                    >
                      <social.icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
               <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/[0.03] backdrop-blur-3xl rounded-[2rem] p-10 border border-white/10 shadow-2xl space-y-8"
               >
                <h4 className="text-sand-light uppercase tracking-[0.4em] text-[10px] font-bold opacity-40">Direct Contact</h4>
                
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start space-x-5 group/item">
                    <div className="w-10 h-10 rounded-full bg-oasis-accent/10 flex items-center justify-center text-oasis-accent group-hover/item:bg-oasis-accent group-hover/item:text-oasis-umber transition-colors">
                      <MapPin size={18} />
                    </div>
                    <span className="text-sand-light/70 text-sm leading-relaxed flex-1 pt-1">Hotel Peninsula Grand, Sakinaka Junction, Mumbai, 400072</span>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center space-x-5 group/item">
                    <div className="w-10 h-10 rounded-full bg-oasis-accent/10 flex items-center justify-center text-oasis-accent group-hover/item:bg-oasis-accent group-hover/item:text-oasis-umber transition-colors">
                      <Phone size={18} />
                    </div>
                    <span className="text-sand-light/70 text-sm font-medium">+91 91676 66737</span>
                  </div>

                  {/* Mail */}
                  <div className="flex items-center space-x-5 group/item">
                    <div className="w-10 h-10 rounded-full bg-oasis-accent/10 flex items-center justify-center text-oasis-accent group-hover/item:bg-oasis-accent group-hover/item:text-oasis-umber transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-sand-light/70 text-sm">info@opabarandcafe.in</span>
                  </div>
                </div>

                <button onClick={openModal} className="w-full py-5 bg-oasis-gold text-oasis-umber font-bold uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-white hover:scale-[1.02] transition-all shadow-xl active:scale-95">
                  Secure Your Table
                </button>
              </motion.div>
            </div>
          </div>

          <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-sand-light/20 uppercase tracking-[0.5em] font-semibold">
            <p>© 2026 OPA BAR & CAFE — EXCLUSIVE RESERVATIONS</p>
            <div className="flex space-x-12 mt-6 md:mt-0">
              <span className="hover:text-oasis-accent cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-oasis-accent cursor-pointer transition-colors">Guidelines</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
