"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, Sparkles, Phone, User, MessageSquare } from "lucide-react";
import { useBooking } from "./BookingContext";

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
      <label className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.35em] text-sand-light/40">
        <Icon size={11} />
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sand-light text-sm placeholder:text-sand-light/20 focus:outline-none focus:border-oasis-gold/60 transition-colors [color-scheme:dark]";

export function BookingModal() {
  const { isOpen, closeModal } = useBooking();
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => { setForm(empty); setSubmitted(false); }, 400);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className="fixed inset-0 bg-oasis-umber/80 backdrop-blur-md z-[200]"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[2.5rem] bg-oasis-umber border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)] pointer-events-auto">

              {/* Header */}
              <div className="relative flex items-center justify-between px-8 md:px-12 pt-10 pb-8 border-b border-white/8">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.5em] text-oasis-accent mb-2">OPA Bar & Cafe · Mumbai</p>
                  <h2 className="text-3xl md:text-4xl font-stylized text-sand-light leading-none">Reserve Your Table</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-sand-light/50 hover:text-sand-light transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-5 gap-0">

                {/* Left — info panel */}
                <div className="md:col-span-2 px-8 md:px-12 py-10 border-r border-white/8 flex flex-col justify-between gap-10">
                  <div className="space-y-8">
                    <img src="/logo.png" alt="OPA" className="h-14 w-auto object-contain brightness-0 invert opacity-60" />
                    <p className="text-sand-light/40 text-sm leading-relaxed font-sans normal-case tracking-normal">
                      Experience the warmth of Mediterranean hospitality. Our team will confirm your reservation within 30 minutes.
                    </p>
                    <div className="space-y-4">
                      {[
                        { label: "Location", value: "Peninsula Grand, Sakinaka, Andheri E" },
                        { label: "Hours", value: "12 PM – 1:30 AM (Daily)" },
                        { label: "Phone", value: "+91 91676 66737" },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="text-[9px] uppercase tracking-[0.35em] text-oasis-accent/70">{item.label}</p>
                          <p className="text-sand-light/60 text-xs mt-1 font-sans normal-case tracking-normal">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img src="/images/food_real.webp" alt="Opa food" className="w-full h-40 object-cover rounded-2xl opacity-40" />
                  </div>
                </div>

                {/* Right — form */}
                <div className="md:col-span-3 px-8 md:px-12 py-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center gap-6 py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-oasis-gold/10 border border-oasis-gold/30 flex items-center justify-center">
                        <Sparkles size={32} className="text-oasis-gold" />
                      </div>
                      <h3 className="text-2xl font-stylized text-sand-light">We'll Be Expecting You</h3>
                      <p className="text-sand-light/40 text-sm max-w-xs leading-relaxed font-sans normal-case tracking-normal">
                        Your booking details have been sent via WhatsApp. Our team will confirm within 30 minutes.
                      </p>
                      <button
                        onClick={closeModal}
                        className="mt-4 px-10 py-4 rounded-full bg-oasis-gold text-oasis-umber text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                      >
                        Done
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Full Name" icon={User}>
                          <input required className={inputCls} placeholder="Your name" value={form.name} onChange={set("name")} />
                        </Field>
                        <Field label="Phone" icon={Phone}>
                          <input required type="tel" className={inputCls} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set("phone")} />
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Date" icon={Calendar}>
                          <input required type="date" min={today} className={`${inputCls} [color-scheme:dark]`} value={form.date} onChange={set("date")} />
                        </Field>
                        <Field label="Time" icon={Clock}>
                          <select required className={inputCls} value={form.time} onChange={set("time")}>
                            <option value="" disabled style={{ background: "#3D2B1F", color: "#F4E8D1" }}>Select time</option>
                            {timeSlots.map((t) => <option key={t} value={t} style={{ background: "#3D2B1F", color: "#F4E8D1" }}>{t}</option>)}
                          </select>
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Guests" icon={Users}>
                          <select required className={inputCls} value={form.guests} onChange={set("guests")}>
                            <option value="" disabled style={{ background: "#3D2B1F", color: "#F4E8D1" }}>Select guests</option>
                            {guestOptions.map((g) => <option key={g} value={g} style={{ background: "#3D2B1F", color: "#F4E8D1" }}>{g}</option>)}
                          </select>
                        </Field>
                        <Field label="Occasion" icon={Sparkles}>
                          <select className={inputCls} value={form.occasion} onChange={set("occasion")}>
                            <option value="" style={{ background: "#3D2B1F", color: "#F4E8D1" }}>Select occasion</option>
                            {occasions.map((o) => <option key={o} value={o} style={{ background: "#3D2B1F", color: "#F4E8D1" }}>{o}</option>)}
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

                      <button
                        type="submit"
                        disabled={!isValid}
                        className="w-full py-4 rounded-2xl bg-oasis-gold text-oasis-umber font-bold uppercase tracking-[0.2em] text-[10px] hover:scale-[1.02] hover:shadow-xl hover:shadow-oasis-gold/20 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none mt-2"
                      >
                        Send via WhatsApp
                      </button>

                      <p className="text-center text-[9px] text-sand-light/20 uppercase tracking-widest">
                        Your details are sent directly to the restaurant
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
