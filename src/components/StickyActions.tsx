"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar } from "lucide-react";
import { useBooking } from "./BookingContext";

export function StickyActions() {
  const { openModal } = useBooking();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const scale = useTransform(scrollY, [200, 400], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed bottom-10 right-6 md:right-10 z-[100]"
    >
      <button
        onClick={openModal}
        aria-label="Reserve a table"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-oasis-umber rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 overflow-hidden"
      >
        <div className="absolute inset-0 bg-oasis-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <Calendar className="relative z-10 text-sand-light group-hover:text-oasis-umber transition-colors" size={24} />
        <div className="absolute right-full mr-4 bg-oasis-umber text-sand-light px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Reserve Table
        </div>
      </button>
    </motion.div>
  );
}
