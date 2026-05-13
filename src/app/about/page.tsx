"use client";

import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";
import { GlassWater, Sparkles, Music, Wind, Users, Coffee, MapPin, Phone, Mail, Clock, TrainFront } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
      <Navbar />
      <StickyActions />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 md:pb-32 overflow-hidden bg-oasis-umber">
        <img
          src="/lounge/DSC03299.jpg"
          alt="OPA Bar & Cafe — Best Bar and Cafe in Andheri East Mumbai"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/40 to-transparent" />

        <div className="container mx-auto px-6 relative z-10 space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.8em] text-oasis-accent font-bold block">
              The Mediterranean Sanctuary · Andheri East, Mumbai
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-stylized text-sand-light leading-none tracking-tight">
              Our <br /> Legacy
            </h1>
          </div>
          <p className="text-sand-light/70 max-w-2xl font-light text-lg md:text-2xl leading-relaxed italic">
            "Born from the golden sands and the azure heart of the Mediterranean, OPA is more than a destination. It is a portal to a world where time dissolves into rhythm and flavor."
          </p>
        </div>
      </section>

      <Marquee text="THE STORY • THE SPIRIT • THE SANCTUARY" />

      {/* The Philosophy */}
      <section className="py-16 md:py-28 lg:py-40 bg-sand-light relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="/cafe/DSC03327.jpg"
                alt="OPA Mediterranean Restaurant Andheri East"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-oasis-umber/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <span className="text-oasis-accent text-[10px] uppercase tracking-[0.6em] font-bold">Rooted in Tradition</span>
                <h2 className="text-4xl md:text-6xl font-stylized text-oasis-umber leading-tight">
                  Beyond the <br /> Horizon
                </h2>
                <p className="text-oasis-umber/60 text-lg md:text-xl leading-relaxed font-light">
                  For over a decade, OPA Bar & Cafe has stood as a beacon of luxury in the heart of Mumbai. We blend the raw, untamed beauty of the Mediterranean with modern gourmet mastery, creating an experience that resonates long after the night ends. Celebrated as the best bar and cafe in Andheri East, OPA is your go-to destination for rooftop dining, craft cocktails, and unforgettable nights — open till late night, every night.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "The Craft", desc: "Every plate is a canvas of Levantine art." },
                  { title: "The Pulse", desc: "World-class beats meet an electric soul." },
                  { title: "The Space", desc: "Four unique zones for every mood." },
                  { title: "The Service", desc: "Uncompromising hospitality since 2012." },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-xl font-stylized text-oasis-umber">{item.title}</h3>
                    <p className="text-sm text-oasis-umber/50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Strip */}
      <section className="h-[40vh] md:h-[60vh] relative overflow-hidden">
        <img
          src="/lounge/DSC03306.jpg"
          className="w-full h-full object-cover fixed top-0 left-0 -z-10"
          alt="OPA Lounge Ambience Andheri East"
        />
        <div className="absolute inset-0 bg-oasis-umber/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-8xl font-stylized text-sand-light/80 tracking-[0.5em] text-center px-6">
            Where Mumbai Meets the Med
          </h2>
        </div>
      </section>

      {/* Brand Pillars — Redesigned for Visual Excellence */}
      <section className="py-16 md:py-28 lg:py-40 bg-oasis-umber relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24 space-y-6"
          >
            <span className="text-oasis-accent text-[10px] uppercase tracking-[1em] font-bold block">The OPA Standard</span>
            <h2 className="text-3xl md:text-5xl lg:text-8xl font-stylized text-sand-light leading-tight tracking-tight">The Pillars of <br /> Our Sanctuary</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <GlassWater size={32} />,
                title: "Best Cocktail Bar in Andheri East",
                desc: "Handcrafted LIT cocktails, signature sips, and innovative mixology. OPA is Andheri's most celebrated cocktail bar — from sunset to late night, every pour is a statement.",
              },
              {
                icon: <Sparkles size={32} />,
                title: "Rooftop Cafe & Healthy Food",
                desc: "An aesthetic rooftop cafe in Andheri with a menu built for the health-conscious. Fresh, wholesome Mediterranean ingredients meet bold Levantine flavors in every dish.",
              },
              {
                icon: <Music size={32} />,
                title: "Best Music & Ambience",
                desc: "Live music nights, resident DJs, and curated soundscapes. The best music and ambience in Andheri East, OPA sets the tone from golden hour to after midnight.",
              },
              {
                icon: <Wind size={32} />,
                title: "Best Arabian & Lounge Ambience",
                desc: "Palm trees, lanterns, flowing drapes, and warm candlelight. Experience the best Arabian ambience in Mumbai — an immersive Middle-Eastern escape right in Andheri East.",
              },
              {
                icon: <Users size={32} />,
                title: "Resto Bar & Dining Destination",
                desc: "The finest resto bar in Andheri East — combining a world-class kitchen with a full bar. Perfect for date nights, family dinners, corporate evenings, and group celebrations.",
              },
              {
                icon: <Coffee size={32} />,
                title: "On Till Late Night",
                desc: "Andheri's go-to late-night destination. OPA stays open till late night, making it the best party place in Andheri East for those who live for the night.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-oasis-gold/20 transition-all duration-700"
              >
                <div className="mb-8 text-oasis-gold opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-stylized text-sand-light mb-4 tracking-wide">{item.title}</h3>
                <p className="text-sand-light/40 text-base leading-relaxed font-light group-hover:text-sand-light/60 transition-colors duration-500">
                  {item.desc}
                </p>
                
                {/* Subtle corner accent */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-white/0 group-hover:border-oasis-gold/30 transition-all duration-700 rounded-tr-3xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Heritage */}
      <section className="py-16 md:py-28 lg:py-40 bg-sand-light relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 md:order-1 space-y-10"
            >
              <div className="space-y-6">
                <span className="text-oasis-accent text-[10px] uppercase tracking-[0.6em] font-bold">
                  Mediterranean · Lebanese · Arabic · Turkish
                </span>
                <h2 className="text-4xl md:text-6xl font-stylized text-oasis-umber leading-tight">
                  A Cuisine Born <br /> From Ancient Shores
                </h2>
                <p className="text-oasis-umber/60 text-lg md:text-xl leading-relaxed font-light">
                  OPA is celebrated as the best Mediterranean restaurant, best Lebanese restaurant, best Arabic restaurant, and best Turkish restaurant in Andheri East, Mumbai. Our kitchen draws from centuries of coastal culinary wisdom — mezze platters, slow-roasted meats, stone-baked breads, and vibrant herb-laden salads that transport you straight to the shores of the Mediterranean and the souks of Beirut.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Mediterranean", tag: "Best Mediterranean Food Restaurant in Andheri East" },
                  { name: "Lebanese", tag: "Authentic Levantine Cuisine Mumbai" },
                  { name: "Arabic", tag: "Best Arabic Restaurant Andheri East Mumbai" },
                  { name: "Turkish", tag: "Best Turkish Restaurant in Andheri" },
                ].map((c, i) => (
                  <div key={i} className="border border-oasis-umber/15 rounded-2xl p-5 space-y-1">
                    <p className="font-stylized text-oasis-umber text-lg">{c.name}</p>
                    <p className="text-xs text-oasis-umber/40 leading-snug">{c.tag}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 md:order-2 relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="/food/30 TEN --2.png"
                alt="Mediterranean Lebanese Arabic Turkish Food Restaurant Andheri East Mumbai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-oasis-umber/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nightlife Strip — On Till Late Night */}
      <section className="py-16 md:py-24 lg:py-40 bg-oasis-umber relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">
                Nightlife in Andheri · Best Club in Mumbai · On Till Late Night
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-stylized text-sand-light leading-none">
                The Night <br /> Never Ends
              </h2>
              <p className="text-sand-light/60 text-lg md:text-2xl leading-relaxed font-light max-w-3xl mx-auto">
                When the sun sets over Andheri East, OPA transforms into Mumbai's most electric nightlife destination. Voted among the best party places in Andheri East and the best lounge in Mumbai, our venue pulses with world-class DJs, live performances, and a crowd that knows how to celebrate. We are open till late night — because some moments are too good to rush.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { stat: "Late Night", label: "Open Every Night" },
                { stat: "Live Beats", label: "Music Every Weekend" },
                { stat: "#1", label: "Lounge in Andheri East" },
                { stat: "4 Zones", label: "Unique Spaces to Explore" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="border border-sand-light/10 rounded-2xl p-6 space-y-1 text-center"
                >
                  <p className="text-2xl md:text-3xl font-stylized text-oasis-accent">{s.stat}</p>
                  <p className="text-sand-light/40 text-xs uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
