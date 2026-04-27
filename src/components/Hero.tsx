"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  // Mouse perspective effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  useEffect(() => {
    gsap.to(bgRef.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300",
        scrub: true,
      },
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - (rect.left + rect.width / 2));
      mouseY.set(e.clientY - (rect.top + rect.height / 2));
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef as any} 
      onMouseMove={handleMouseMove}
      className="relative h-[120vh] w-full overflow-hidden bg-sand-light"
    >
      {/* Background Layer (Sky/Distant Dunes) */}
      <motion.div ref={bgRef} style={{ y: y1 }} className="absolute inset-0 z-0 scale-110">
        <img 
          src="/images/desert.png" 
          alt="Desert Oasis" 
          className="w-full h-full object-cover"
        />
        {/* Logo Locked to the Sun in the Wallpaper */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48">
          <img 
            src="/logo.png" 
            alt="" 
            className="w-full h-full object-contain opacity-80 mix-blend-luminosity brightness-75" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand-light/20 to-sand-light"></div>
      </motion.div>

      {/* Atmospheric Dust Particles */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 1000 }}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 0.4, 0],
              x: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Foreground Palm Fringe (Parallax) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute -bottom-20 -left-20 w-[40vw] aspect-square z-20 pointer-events-none opacity-20 grayscale"
      >
         <img src="/images/ambience.webp" className="w-full h-full object-cover rounded-full mix-blend-multiply blur-3xl" alt="" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="mb-24 invisible h-32 md:h-48" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-8xl font-stylized text-oasis-umber tracking-[0.4em] mb-4">
            The Oasis Sanctuary
          </h1>
          <div className="w-24 h-[1px] bg-oasis-accent mx-auto"></div>
          <p className="text-[10px] uppercase tracking-[1em] text-oasis-accent">Where Time Dissolves into Rhythm</p>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
         <span className="text-[8px] uppercase tracking-[0.6em] text-oasis-umber/40 font-bold">Discover More</span>
         <div className="w-[1px] h-20 bg-oasis-umber/10 relative overflow-hidden">
            <motion.div 
               animate={{ y: ['-100%', '100%'] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 left-0 w-full h-1/2 bg-oasis-accent"
            />
         </div>
      </div>

      {/* Base Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-sand-light to-transparent z-20 pointer-events-none" />
    </section>
  );
}
