"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Sparkles, Phone, User, MessageSquare, MapPin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

const RESTAURANT_WHATSAPP = "918104961636";

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM",
  "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM",
];

const guestOptions = ["1 – 2 Guests", "3 – 4 Guests", "5 – 6 Guests", "7 – 10 Guests", "11 – 15 Guests", "16 – 20 Guests", "20+ Guests"];
const occasions = ["Just Dining", "Birthday", "Anniversary", "Date Night", "Corporate Event", "Bachelorette / Bachelor", "Other"];

const today = new Date().toISOString().split("T")[0];

interface FormState {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
}

const empty: FormState = { name: "", phone: "", date: "", time: "", guests: "", occasion: "", requests: "" };

function Field({ label, icon: Icon, children }: { label: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.35em] text-oasis-umber/40">
        <Icon size={11} />
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full bg-oasis-umber/[0.03] border border-oasis-umber/10 rounded-xl px-4 py-3.5 text-oasis-umber text-sm placeholder:text-oasis-umber/20 focus:outline-none focus:border-oasis-gold transition-colors";

export default function BookATablePage() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `*New Reservation — OPA Bar & Cafe*`,
      ``,
      `👤 Name: ${form.name}`,
      `📱 Phone: ${form.phone}`,
      `📅 Date: ${form.date}`,
      `🕐 Time: ${form.time}`,
      `👥 Guests: ${form.guests}`,
      `🎉 Occasion: ${form.occasion || "Just Dining"}`,
      form.requests ? `📝 Note: ${form.requests}` : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  }

  const isValid = form.name && form.phone && form.date && form.time && form.guests;

  return (
    <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
      <Navbar />
      <StickyActions />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 md:pb-32 overflow-hidden bg-oasis-umber">
        <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/60 to-transparent z-10" />
        <div className="absolute inset-0">
             <img 
               src="/lounge/DSC03299.jpg" 
               className="w-full h-full object-cover opacity-50" 
               alt="Book a Table at OPA" 
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80";
               }}
             />
        </div>
        <div className="container mx-auto px-6 relative z-20 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.8em] text-oasis-accent font-bold block">
            Reservations · Experience · Oasis
          </span>
          <h1 className="text-5xl md:text-[9rem] font-stylized text-sand-light leading-none tracking-tight">
            Reserve <br /> Table
          </h1>
        </div>
      </section>

      <Marquee text="RESERVE YOUR MOMENT • VISIT THE OASIS • EXPERIENCE OPA" />

      {/* Booking Form Section */}
      <section className="py-24 md:py-48 bg-sand-light">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.08)] border border-oasis-umber/5 grid md:grid-cols-5">
            
            {/* Left: Info Panel */}
            <div className="md:col-span-2 bg-oasis-umber px-8 md:px-12 py-16 flex flex-col justify-between gap-12 relative overflow-hidden">
               {/* Accent glow */}
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-oasis-gold/10 rounded-full blur-[80px]" />
               
               <div className="space-y-10 relative z-10">
                 <img src="/logo.png" alt="OPA" className="h-12 w-auto object-contain brightness-0 invert opacity-80" />
                 <div className="space-y-4">
                    <h2 className="text-3xl font-stylized text-sand-light leading-tight">Join Us At <br /> The Oasis</h2>
                    <p className="text-sand-light/40 text-sm leading-relaxed font-light">
                      Experience the warmth of Mediterranean hospitality. Our team will confirm your reservation within 30 minutes.
                    </p>
                 </div>

                 <div className="space-y-6">
                    {[
                      { icon: MapPin, label: "Location", value: "Peninsula Grand, Sakinaka, Andheri E" },
                      { icon: Clock, label: "Hours", value: "12 PM – 1:30 AM (Daily)" },
                      { icon: Phone, label: "Phone", value: "+91 81049 61636" },
                      { icon: Mail, label: "Email", value: "info@opabarandcafe.in" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <item.icon size={16} className="text-oasis-accent mt-1 shrink-0" />
                         <div>
                            <p className="text-[8px] uppercase tracking-widest text-oasis-accent font-bold mb-0.5">{item.label}</p>
                            <p className="text-sand-light/70 text-xs font-light">{item.value}</p>
                         </div>
                      </div>
                    ))}
                 </div>
               </div>

               <div className="relative rounded-2xl overflow-hidden aspect-video opacity-40">
                  <img 
                    src="/lounge/DSC03298.jpg" 
                    alt="OPA Food" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544145945-f904253d0c7e?auto=format&fit=crop&q=80";
                    }}
                  />
               </div>
            </div>

            {/* Right: Form Section */}
            <div className="md:col-span-3 px-8 md:px-16 py-16">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center gap-6 py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-oasis-gold/10 border border-oasis-gold/30 flex items-center justify-center">
                    <Sparkles size={32} className="text-oasis-gold" />
                  </div>
                  <h3 className="text-3xl font-stylized text-oasis-umber">We'll Be Expecting You</h3>
                  <p className="text-oasis-umber/40 text-sm max-w-xs leading-relaxed font-light">
                    Your booking details have been sent via WhatsApp. Our team will contact you shortly to finalize your reservation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-12 py-5 rounded-full bg-oasis-umber text-sand-light text-[10px] font-bold uppercase tracking-widest hover:bg-oasis-gold hover:text-oasis-umber transition-all duration-500 shadow-xl"
                  >
                    New Reservation
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Full Name" icon={User}>
                      <input required className={inputCls} placeholder="Your name" value={form.name} onChange={set("name")} />
                    </Field>
                    <Field label="Phone" icon={Phone}>
                      <input required type="tel" className={inputCls} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set("phone")} />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Date" icon={Calendar}>
                      <input required type="date" min={today} className={inputCls} value={form.date} onChange={set("date")} />
                    </Field>
                    <Field label="Time" icon={Clock}>
                      <select required className={inputCls} value={form.time} onChange={set("time")}>
                        <option value="" disabled>Select time</option>
                        {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Guests" icon={Users}>
                      <select required className={inputCls} value={form.guests} onChange={set("guests")}>
                        <option value="" disabled>Select guests</option>
                        {guestOptions.map((g) => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </Field>
                    <Field label="Occasion" icon={Sparkles}>
                      <select className={inputCls} value={form.occasion} onChange={set("occasion")}>
                        <option value="">Select occasion</option>
                        {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Special Requests" icon={MessageSquare}>
                    <textarea
                      rows={3}
                      className={`${inputCls} resize-none`}
                      placeholder="Dietary requirements, seating preferences, surprises..."
                      value={form.requests}
                      onChange={set("requests")}
                    />
                  </Field>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="w-full py-6 rounded-2xl bg-oasis-gold text-oasis-umber font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-oasis-umber hover:text-sand-light transition-all duration-500 shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Confirm via WhatsApp
                    </button>
                    <p className="text-center text-[9px] text-oasis-umber/20 uppercase tracking-[0.4em] mt-6 font-bold">
                      Instant Confirmation · Premium Service
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
