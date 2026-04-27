"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    day: "MON",
    date: "Every Monday",
    title: "Sunset Sessions",
    genre: "Deep House",
    dj: "DJ Ray",
    time: "8 PM – 1 AM",
    tag: "Chill Vibes",
    image: "/images/ambience.webp",
    color: "#C69B7B",
  },
  {
    day: "WED",
    date: "Every Wednesday",
    title: "Ladies of Oasis",
    genre: "RnB & Hip-Hop",
    dj: "DJ Zink",
    time: "9 PM – 1 AM",
    tag: "Ladies Night",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&fit=crop",
    color: "#D4AF37",
  },
  {
    day: "FRI",
    date: "Every Friday",
    title: "The Main Event",
    genre: "Commercial",
    dj: "DJ OPA",
    time: "10 PM – 1:30 AM",
    tag: "Signature Night",
    image: "/images/dj.png",
    color: "#D4AF37",
  },
  {
    day: "SAT",
    date: "Every Saturday",
    title: "Desert Rhythms",
    genre: "Arabic Tech",
    dj: "DJ Ahmed",
    time: "10 PM – 1:30 AM",
    tag: "Peak Night",
    image: "/images/bar.webp",
    color: "#C69B7B",
  },
];

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const todayIndex = new Date().getDay(); // 0=Sun
const dayMap: Record<string, number> = { SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6 };

function SoundBars() {
  return (
    <div className="flex items-end gap-[3px] h-5">
      {[3, 5, 4, 6, 3, 5, 4].map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-oasis-gold"
          animate={{ scaleY: [1, h / 3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          style={{ height: `${h * 3}px`, transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}

export function WeeklyBeats() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  function scrollTo(idx: number) {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>(".beat-card");
    cards[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActiveIdx(idx);
  }

  function slide(dir: 1 | -1) {
    const next = Math.max(0, Math.min(events.length - 1, activeIdx + dir));
    scrollTo(next);
  }

  return (
    <section className="bg-oasis-umber py-24 md:py-36 overflow-hidden">

      {/* ── Header ── */}
      <div className="container mx-auto px-6 mb-20 text-center">
        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-5">
            <div className="flex items-center justify-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-oasis-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-oasis-gold" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-oasis-accent underline underline-offset-8">Live Entertainment Weekly</span>
            </div>
            <h2 className="text-6xl md:text-[8rem] font-stylized text-sand-light leading-none tracking-tight">
              Weekly Pulse
            </h2>
          </div>

          {/* Week day strip */}
          <div className="flex gap-3 flex-wrap justify-center bg-white/5 p-4 rounded-3xl backdrop-blur-sm border border-white/5">
            {DAYS.map((d) => {
              const hasEvent = events.some((e) => e.day === d);
              const isToday = dayMap[d] === todayIndex;
              return (
                <div
                  key={d}
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-500 ${
                    isToday ? "bg-oasis-gold text-oasis-umber shadow-[0_0_20px_rgba(212,175,55,0.3)]" : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isToday ? "text-oasis-umber" : "text-sand-light"}`}>{d}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      hasEvent ? (isToday ? "bg-oasis-umber" : "bg-oasis-gold") : "bg-white/10"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Cards ── */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto md:overflow-x-visible items-center justify-center snap-x snap-mandatory scrollbar-hide gap-8 px-6 md:px-20 pb-12"
        style={{ scrollbarWidth: "none" }}
      >
        {events.map((event, i) => {
          const isLive = dayMap[event.day] === todayIndex;
          return (
            <motion.div
              key={event.day}
              className="beat-card flex-none w-[300px] md:w-[380px] h-[520px] md:h-[580px] snap-start relative rounded-[2rem] overflow-hidden group cursor-pointer select-none"
              onClick={() => setActiveIdx(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Bg image */}
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
              <div className="absolute inset-0 bg-oasis-umber/30" />

              {/* Top row */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span
                  className="px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border"
                  style={{ borderColor: `${event.color}50`, color: event.color, background: `${event.color}15` }}
                >
                  {event.tag}
                </span>
                {isLive ? (
                  <div className="flex items-center gap-2 bg-red-500/20 border border-red-500/40 px-3 py-1.5 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-red-400">Tonight</span>
                  </div>
                ) : (
                  <span className="text-[9px] uppercase tracking-widest text-sand-light/40">{event.date}</span>
                )}
              </div>

              {/* Giant day watermark */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 font-stylized text-[140px] md:text-[160px] leading-none text-white/[0.04] pointer-events-none select-none pr-4">
                {event.day}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 space-y-5">

                {/* Genre + sound bars */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em]" style={{ color: event.color }}>
                    {event.genre}
                  </span>
                  {isLive && <SoundBars />}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-stylized text-sand-light leading-tight">
                  {event.title}
                </h3>

                {/* Divider */}
                <div className="h-px bg-white/10" />

                {/* DJ + time + button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.35em] text-sand-light/40">Curated by</p>
                    <p className="text-sm font-stylized text-sand-light mt-0.5">{event.dj}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-sand-light/40">Doors open</p>
                    <p className="text-sm font-bold text-sand-light mt-0.5">{event.time}</p>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border"
                  style={{
                    background: `${event.color}15`,
                    borderColor: `${event.color}40`,
                    color: event.color,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = event.color;
                    (e.currentTarget as HTMLElement).style.color = "#3D2B1F";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${event.color}15`;
                    (e.currentTarget as HTMLElement).style.color = event.color;
                  }}
                >
                  Reserve for This Night
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Footer controls ── */}
      <div className="container mx-auto px-6 mt-16 flex flex-col md:flex-row items-center justify-center gap-12">

        {/* Dot indicators */}
        <div className="flex gap-3 order-2 md:order-1">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="transition-all duration-500 rounded-full"
              style={{
                width: activeIdx === i ? "40px" : "10px",
                height: "10px",
                background: activeIdx === i ? "#D4AF37" : "rgba(244,232,209,0.1)",
                boxShadow: activeIdx === i ? "0 0 15px rgba(212,175,55,0.4)" : "none",
              }}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-6 order-1 md:order-2">
          <button
            onClick={() => slide(-1)}
            disabled={activeIdx === 0}
            className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-sand-light/30 hover:border-oasis-gold/50 hover:text-oasis-gold disabled:opacity-10 transition-all duration-500 bg-white/2"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => slide(1)}
            disabled={activeIdx === events.length - 1}
            className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-sand-light/30 hover:border-oasis-gold/50 hover:text-oasis-gold disabled:opacity-10 transition-all duration-500 bg-white/2"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* ── Scroll progress bar ── */}
      <div className="max-w-2xl mx-auto px-6 mt-12 pb-20">
        <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div className="h-full bg-oasis-gold/60 rounded-full" style={{ width: progressWidth }} />
        </div>
      </div>

    </section>
  );
}
