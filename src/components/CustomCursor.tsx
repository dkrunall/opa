"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [cursorType, setCursorType] = useState<"default" | "view" | "explore">("default");
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      if (target.closest('.cursor-view')) setCursorType('view');
      else if (target.closest('.cursor-explore')) setCursorType('explore');
      else setCursorType('default');
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div 
        animate={{
          scale: cursorType === "default" ? 1 : 2.5,
        }}
        className={`
          relative flex items-center justify-center rounded-full transition-colors duration-500
          ${cursorType === "default" ? "w-6 h-6 border border-oasis-gold" : "w-16 h-16 bg-oasis-gold border-none"}
        `}
      >
        {cursorType !== "default" && (
          <span className="text-[6px] font-bold uppercase tracking-widest text-[#000]">
            {cursorType}
          </span>
        )}
        {cursorType === "default" && (
          <div className="w-1 h-1 bg-oasis-gold rounded-full" />
        )}
      </motion.div>
    </motion.div>
  );
}
