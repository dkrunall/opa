import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { MapPin, Phone, Mail, Clock, TrainFront } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact OPA Bar & Cafe | Bar & Restaurant in Andheri East Mumbai | Find Us",
  description:
    "Find OPA Bar & Cafe near Sakinaka Metro Station, Andheri East, Mumbai. Best bar, cafe, lounge & Mediterranean restaurant. Places to eat and drink near me in Andheri East. Open till late night. Call: +91 91676 66737.",
  keywords: [
    "places to eat and drink near me",
    "bar and restaurant in Andheri east",
    "andheri east bar and restaurant",
    "best bar in Andheri",
    "best cafe in Andheri",
    "lounge Andheri east",
    "pubs in Andheri east Mumbai",
    "cocktail bar in Andheri east",
    "rooftop cafe in Andheri",
    "rooftop dining in Andheri",
    "nightlife in Andheri",
    "on till late night",
    "Mediterranean food restaurant in Andheri",
    "Best Arabic Restaurant in Andheri East Mumbai",
    "Best LIT cocktails",
    "Best Arabian ambience",
    "best party places in Andheri east",
    "best bar and cafe in Andheri east",
    "OPA bar cafe Sakinaka",
    "OPA bar cafe Andheri East",
    "Peninsula Grand Hotel restaurant",
  ],
  openGraph: {
    title: "Contact OPA Bar & Cafe | Andheri East, Mumbai — Near Sakinaka Metro",
    description:
      "Visit OPA Bar & Cafe at Hotel Peninsula Grand, Sakinaka, Andheri East, Mumbai. Best bar, cafe & Mediterranean restaurant. Open till late night. +91 91676 66737.",
    url: "https://opabarandcafe.in/contact",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
      <Navbar />
      <StickyActions />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 md:pb-32 overflow-hidden bg-oasis-umber">
        <img
          src="/lounge/DSC03299.jpg"
          alt="OPA Bar & Cafe — Bar and Restaurant in Andheri East Mumbai Near Sakinaka"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/60 to-transparent z-10" />
        <div className="container mx-auto px-6 relative z-20 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.8em] text-oasis-accent font-bold block">
            Hotel Peninsula Grand · Sakinaka · Andheri East, Mumbai
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-stylized text-sand-light leading-none tracking-tight">
            Find <br /> OPA
          </h1>
          <p className="text-sand-light/65 max-w-xl font-light text-base md:text-xl leading-relaxed">
            The best bar, cafe, lounge & Mediterranean restaurant in Andheri East — open till late night, every night.
          </p>
        </div>
      </section>

      <Marquee text="FIND US • VISIT US • EXPERIENCE US" />

      {/* Find Us — Premium Location & Map Section */}
      <section className="py-16 md:py-28 lg:py-40 bg-sand-light relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            
            {/* Left: Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">Get In Touch</span>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-stylized text-oasis-umber leading-tight tracking-tight">Visit Us In <br /> Andheri East</h2>
                <p className="text-oasis-umber/60 text-base md:text-lg leading-relaxed font-light max-w-xl">
                  Whether you're planning a reservation, enquiring about events, or simply want to know how to find the <strong className="text-oasis-umber/80">best bar and cafe in Andheri East</strong> — we're here to help.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <MapPin size={20} />, label: "Address", value: "Hotel Peninsula Grand, Sakinaka Junction, Andheri East, Mumbai — 400072" },
                  { icon: <Phone size={20} />, label: "Phone", value: "+91 91676 66737" },
                  { icon: <Mail size={20} />, label: "Email", value: "info@opabarandcafe.in" },
                  { icon: <Clock size={20} />, label: "Hours", value: "Open daily — Lunch & Dinner · Till late night" },
                  { icon: <TrainFront size={20} />, label: "Metro", value: "Opposite Sakinaka Metro Station (Line 1)" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-oasis-umber/5 flex items-center justify-center text-oasis-accent group-hover:bg-oasis-accent group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-oasis-accent font-bold">{item.label}</p>
                      <p className="text-oasis-umber/80 font-light leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Map & Quick Tags */}
            <div className="space-y-10">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.5320819256668!2d72.88872615765337!3d19.10202543293675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ee50c84947%3A0x403f9851c9beb14!2sOpa*21%20Bar%20%26%20Cafe!5e0!3m2!1sen!2sin!4v1778666411232!5m2!1sen!2sin" 
                  width="100%" 
                  height="500" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-[2s]"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-2 border-oasis-gold/10 rounded-[2.5rem]"></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Best Bar in Andheri", "Best Cafe in Andheri",
                  "Rooftop Dining Andheri", "Cocktail Bar Andheri East",
                  "Mediterranean Restaurant", "Best Lounge Mumbai",
                  "Pubs in Andheri East", "Open Till Late Night"
                ].map((tag) => (
                  <div key={tag} className="px-6 py-3 bg-white/50 border border-oasis-umber/5 rounded-xl text-[9px] uppercase tracking-widest text-oasis-umber/40 text-center font-bold hover:border-oasis-accent/30 hover:text-oasis-accent transition-all duration-300">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-20 md:py-28 bg-oasis-umber">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3 text-center">
              <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">
                Places to Eat & Drink Near Me · Andheri East
              </span>
              <h2 className="text-3xl md:text-5xl font-stylized text-sand-light">
                Why OPA is Andheri East's Most Searched Destination
              </h2>
            </div>

            <div className="space-y-5 text-sand-light/55 text-base leading-relaxed font-light text-center max-w-3xl mx-auto">
              <p>
                Every day thousands of Mumbaikars search for{" "}
                <strong className="text-sand-light/80">places to eat and drink near me</strong>,{" "}
                <strong className="text-sand-light/80">best bars in Andheri East</strong>, or the{" "}
                <strong className="text-sand-light/80">best lounge in Mumbai</strong> — and they all find OPA. Located
                at Hotel Peninsula Grand opposite Sakinaka Metro Station, OPA is Andheri East's most iconic{" "}
                <strong className="text-sand-light/80">bar and restaurant in Andheri East</strong>. Whether you're
                after a relaxed afternoon at our{" "}
                <strong className="text-sand-light/80">rooftop cafe in Andheri</strong>, a sumptuous dinner at our{" "}
                <strong className="text-sand-light/80">Mediterranean food restaurant</strong>, or the city's best{" "}
                <strong className="text-sand-light/80">nightlife in Andheri</strong>, OPA is always the answer.
              </p>
              <p>
                With the{" "}
                <strong className="text-sand-light/80">best Arabian ambience in Mumbai</strong>,{" "}
                <strong className="text-sand-light/80">best LIT cocktails</strong>, world-class{" "}
                <strong className="text-sand-light/80">music and ambience</strong>, and a team that ensures every visit
                is extraordinary — OPA is truly{" "}
                <strong className="text-sand-light/80">open till late night</strong>, every night of the week.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-4">
              {[
                { stat: "₹1,500", label: "Avg for Two" },
                { stat: "Late Night", label: "Open Every Night" },
                { stat: "30+", label: "Signature Dishes" },
                { stat: "4 Zones", label: "Unique Spaces" },
              ].map((s, i) => (
                <div key={i} className="border border-sand-light/10 rounded-2xl p-5 text-center space-y-1">
                  <p className="text-xl md:text-2xl font-stylized text-oasis-accent">{s.stat}</p>
                  <p className="text-sand-light/35 text-[10px] uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
