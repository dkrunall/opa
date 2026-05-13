"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MessageCircle, MapPin, Instagram } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    icon: Calendar,
    label: "Reserve Table",
    href: "/book-a-table",
    primary: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919167666737",
    primary: false,
  },
  {
    icon: MapPin,
    label: "Directions",
    href: "https://www.google.com/maps/dir//Opa!+Bar+%26+Cafe,+Hotel+Peninsula+Grand,+Sakinaka+Junction,+Andheri+East,+Mumbai,+Maharashtra+400072/@19.1020254,72.8887262,18z",
    primary: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/opabarandcafe",
    primary: false,
  },
];

export function StickyActions() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-8 right-6 md:right-10 z-[100] flex flex-col gap-3 md:gap-4"
    >
      {actions.map((action, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
        >
          <Link
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : "_self"}
            aria-label={action.label}
            className={`group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl transition-all duration-500 hover:scale-110 active:scale-95 ${
              action.primary 
                ? "bg-oasis-umber text-sand-light hover:bg-oasis-gold hover:text-oasis-umber" 
                : "bg-white/90 backdrop-blur-md border border-oasis-umber/5 text-oasis-umber hover:bg-oasis-umber hover:text-sand-light"
            }`}
          >
            <action.icon size={20} strokeWidth={2} />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 bg-oasis-umber text-sand-light px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-2xl whitespace-nowrap">
              {action.label}
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
