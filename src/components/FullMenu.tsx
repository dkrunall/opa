"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "starters",
    label: "Starters",
    items: [
      { name: "Harissa BBQ Paneer", desc: "Smoked cottage cheese in Harissa & BBQ sauce, grilled chilli, salad", veg: true },
      { name: "Paneer Tikka", desc: "Marinated cottage cheese char-grilled in tandoor", veg: true },
      { name: "Honey Chilli Potato", desc: "Crispy potatoes tossed in sweet-heat honey chilli glaze", veg: true },
      { name: "Veg Manchurian", desc: "Crispy vegetable dumplings in tangy Manchurian sauce", veg: true },
      { name: "Nachos with Salsa", desc: "House nachos served with fresh tomato salsa and dips", veg: true },
      { name: "Veg Cheese Rolls", desc: "Golden-fried rolls stuffed with seasoned vegetables & cheese", veg: true },
      { name: "Chicken Tikka", desc: "Tender chicken marinated in yoghurt & spices, tandoor-grilled", veg: false },
      { name: "Fish Finger", desc: "Crispy beer-battered fish fingers with tartar sauce", veg: false },
      { name: "BBQ Chicken Wings", desc: "Smoky BBQ-glazed wings, slow-cooked and charred to finish", veg: false },
      { name: "Tandoori Chicken Popcorn", desc: "Bite-sized tandoori chicken with mint chutney", veg: false },
      { name: "Golden Fried Prawns", desc: "Crispy golden prawns served with cocktail sauce", veg: false },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      { name: "Dal Makhani", desc: "Slow-cooked black lentils in rich buttery tomato gravy", veg: true },
      { name: "Paneer Butter Masala", desc: "Cottage cheese in velvety tomato-cream sauce", veg: true },
      { name: "Kadhai Paneer", desc: "Paneer & bell peppers tossed in spiced kadhai masala", veg: true },
      { name: "Veg Biryani", desc: "Fragrant basmati layered with seasonal vegetables & whole spices", veg: true },
      { name: "Farmhouse Pizza", desc: "Stone-baked pizza piled with fresh seasonal vegetables", veg: true },
      { name: "Penne Pasta", desc: "Al dente penne in a classic Mediterranean tomato-herb sauce", veg: true },
      { name: "Butter Chicken", desc: "Slow-braised chicken in creamy tomato-butter gravy", veg: false },
      { name: "Lamb Moussaka", desc: "Layers of spiced minced lamb, eggplant & béchamel — oven baked", veg: false },
      { name: "Lahmacun", desc: "Turkish flatbread with spiced minced meat, herbs & fresh lemon", veg: false },
      { name: "Chicken Pide", desc: "Boat-shaped Turkish bread stuffed with spiced chicken filling", veg: false },
      { name: "Cheese Pide", desc: "Classic pide filled with melted blend of aged cheeses", veg: true },
      { name: "Spinach & Cheese Pide", desc: "Sautéed spinach and cheese in a soft Turkish bread boat", veg: true },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Baklava", desc: "Crispy phyllo pastry layered with pistachios & rose honey syrup", veg: true },
      { name: "Brownie with Ice Cream", desc: "Warm dark-chocolate brownie with house vanilla ice cream", veg: true },
      { name: "Rabdi Fondue Cake", desc: "Our signature Indian-fusion cake served with warm rabdi fondue", veg: true },
      { name: "Ice Cream Selection", desc: "Chef's rotating artisanal ice cream, ask your server for today's flavours", veg: true },
    ],
  },
  {
    id: "bar",
    label: "Bar & Cocktails",
    items: [
      { name: "Opa 300", desc: "Our house signature — a closely guarded secret blend", veg: true },
      { name: "Arabian Delight", desc: "LIIT with an Arabian twist — layered citrus, spirits & spice", veg: true },
      { name: "Blue Breeze", desc: "Refreshing blue cocktail with citrus, elderflower & mint", veg: true },
      { name: "Mojito", desc: "Classic mint-lime mojito, available in seasonal fruit variations", veg: true },
      { name: "IMFL Selection", desc: "Premium whiskey, vodka, rum and draught beer", veg: true },
      { name: "Mocktails", desc: "A curated selection of fresh-pressed mocktails and soft beverages", veg: true },
      { name: "Sheesha", desc: "Premium sheesha with a range of flavours, served tableside", veg: true },
    ],
  },
];

const VegBadge = ({ veg }: { veg: boolean }) => (
  <span
    className="inline-flex items-center justify-center w-4 h-4 border-2 shrink-0 mt-1"
    style={{ borderColor: veg ? "#16a34a" : "#dc2626" }}
  >
    <span
      className="w-2 h-2 rounded-full"
      style={{ backgroundColor: veg ? "#16a34a" : "#dc2626" }}
    />
  </span>
);

export function FullMenu() {
  const [active, setActive] = useState("starters");

  const currentCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="full-menu" className="py-24 md:py-40 bg-oasis-umber">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-sand-light/10 pb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-oasis-accent mb-4">Opa Bar & Cafe · Sakinaka</p>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-stylized text-sand-light leading-none">Our Menu</h2>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <p className="text-sand-light/40 text-xs uppercase tracking-widest">Oasis Sanctuary</p>
            <p className="text-oasis-gold font-stylized text-3xl mt-1">Andheri E</p>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${
                active === cat.id
                  ? "text-oasis-umber"
                  : "text-sand-light/50 hover:text-sand-light border border-sand-light/10"
              }`}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="menu-tab-pill"
                  className="absolute inset-0 rounded-full bg-oasis-gold"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sand-light/5"
          >
            {currentCategory.items.map((item, i) => (
              <div
                key={i}
                className="bg-oasis-umber p-5 md:p-8 hover:bg-white/5 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <VegBadge veg={item.veg} />
                  <div>
                    <h4 className="text-sand-light font-stylized text-lg group-hover:text-oasis-gold transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-sand-light/40 text-xs leading-relaxed mt-2 font-sans normal-case tracking-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer Note */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-sand-light/10 pt-10">
          <p className="text-sand-light/30 text-[10px] uppercase tracking-widest text-center md:text-left">
            Menu subject to change · Prices & availability on request
          </p>
          <div className="flex gap-6 items-center">
            <a
              href="tel:+918104961636"
              className="text-[10px] font-bold uppercase tracking-widest text-oasis-accent hover:text-oasis-gold transition-colors"
            >
              +91 81049 61636
            </a>
            <a
              href="https://www.zomato.com/mumbai/opa-bar-cafe-peninsula-grand-hotel-sakinaka/order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-oasis-gold text-oasis-umber px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
