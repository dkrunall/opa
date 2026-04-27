"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useBooking } from "./BookingContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const { openModal } = useBooking();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -120, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-16 h-32 pointer-events-none"
      >
        {/* Left: Branding */}
        <div className="flex-1 flex items-center pointer-events-auto">
          <Link href="/" className="group/logo">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-20 md:w-24 h-12 flex items-center justify-center transition-all duration-700"
            >
              <img src="/logo.png" alt="OPA Logo" className="w-full h-full object-contain" />
            </motion.div>
          </Link>
        </div>

        {/* Center: Minimalist Dock */}
        <div className="hidden lg:flex items-center pointer-events-auto">
          <div className="bg-oasis-umber/20 backdrop-blur-3xl border border-white/10 rounded-full py-2 px-3 flex items-center space-x-1 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative px-6 py-2.5 text-[9px] font-bold uppercase tracking-[0.4em] transition-all duration-500 rounded-full ${
                  activeLink === link.name ? "text-oasis-umber bg-white shadow-lg" : "text-sand-light/90 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Reservations */}
        <div className="flex-1 flex items-center justify-end pointer-events-auto">
          <button onClick={openModal} className="hidden md:block relative group/res bg-oasis-umber border border-oasis-gold/30 backdrop-blur-xl px-10 py-4 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] text-oasis-gold hover:bg-white hover:text-oasis-umber transition-all duration-500 shadow-2xl overflow-hidden">
             <span className="relative z-10">Reservations</span>
             <div className="absolute inset-0 bg-white translate-y-full group-hover/res:translate-y-0 transition-transform duration-500 -z-10" />
          </button>
          
          <button
            className="lg:hidden w-12 h-12 flex items-center justify-center text-sand-light bg-oasis-umber/40 rounded-full backdrop-blur-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Hair-thin Connecting Line (High Fashion) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-oasis-gold/20 to-transparent pointer-events-none" />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
           <motion.div
              initial={{ opacity: 0, backdropBlur: "0px" }}
              animate={{ opacity: 1, backdropBlur: "20px" }}
              exit={{ opacity: 0, backdropBlur: "0px" }}
              className="fixed inset-0 z-[60] bg-oasis-umber/95 flex flex-col items-center justify-center space-y-10"
           >
              <button 
                className="absolute top-12 right-12 text-oasis-accent p-2"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl font-stylized text-sand-light hover:text-oasis-gold transition-colors tracking-widest"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-20"
              >
                 <button onClick={() => { setIsOpen(false); openModal(); }} className="bg-oasis-gold px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest text-oasis-umber">
                   Book Now
                 </button>
              </motion.div>
           </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
