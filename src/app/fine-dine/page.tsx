import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { CulinaryShowcase } from "@/components/CulinaryShowcase";
import { FoodGallery } from "@/components/FoodGallery";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { FinestTable } from "@/components/FinestTable";

export const metadata = {
  title: "Fine Dine | Best Mediterranean, Lebanese & Arabic Restaurant in Andheri East Mumbai | OPA Bar & Cafe",
  description:
    "Experience the best Mediterranean food restaurant, Lebanese restaurant, and Arabic restaurant in Andheri East, Mumbai at OPA Bar & Cafe. 30+ signature dishes, healthy food cafe, cocktail bar & rooftop dining at Peninsula Grand, Sakinaka.",
  keywords: [
    "Mediterranean food restaurant in Andheri East",
    "Best Mediterranean restaurant Mumbai",
    "Best Lebanese restaurant Andheri East",
    "Best Arabic Restaurant in Andheri East Mumbai",
    "Best Turkish restaurant in Andheri",
    "Best Arabian restaurant Mumbai",
    "Healthy Food Cafe in Andheri East Mumbai",
    "places to eat in Andheri East",
    "places to eat and drink near me",
    "rooftop dining in Andheri",
    "rooftop cafe in Andheri",
    "bar and restaurant in Andheri east",
    "fine dining Andheri East",
    "Mediterranean Food Restaurant in Andheri East",
    "best bar and cafe in Andheri east",
    "resto bar in Andheri east",
    "Best Cocktail Bar in Andheri East Mumbai",
    "Best LIT cocktails",
    "andheri east bar and restaurant",
  ],
  openGraph: {
    title: "Fine Dine at OPA | Best Mediterranean & Arabic Restaurant in Andheri East Mumbai",
    description:
      "The best Mediterranean, Lebanese, and Arabic restaurant in Andheri East. 30+ dishes, LIT cocktails, healthy food & rooftop dining at OPA Bar & Cafe, Peninsula Grand Sakinaka.",
    url: "https://opabarandcafe.in/fine-dine",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "website",
  },
};

export default function FineDinePage() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
      <Navbar />
      <StickyActions />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 md:pb-32 overflow-hidden bg-oasis-umber">
        <img
          src="/food/30 TEN -08232.png"
          alt="Best Mediterranean Lebanese Arabic Restaurant Andheri East Mumbai — OPA Bar & Cafe Fine Dine"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/60 to-oasis-umber/10" />


        <div className="container mx-auto px-6 relative z-10 space-y-6">
          <p className="text-[10px] uppercase tracking-[0.6em] text-oasis-gold font-bold">Peninsula Grand · Sakinaka</p>
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-stylized text-sand-light leading-none">
            Fine<br />Dine
          </h1>
          <p className="text-sand-light/55 max-w-lg font-sans text-base md:text-lg leading-relaxed">
            Immerse yourself in a Mediterranean symphony of flavors — where every dish tells a story of sun-drenched coasts and spice-laden markets.
          </p>

          {/* Quick highlights strip */}
          <div className="flex flex-wrap gap-3 pt-2">
            {["30+ Dishes", "Cocktail Bar", "Sheesha Lounge", "Desserts", "Mediterranean & Indian"].map((tag) => (
              <span
                key={tag}
                className="bg-white/8 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-sand-light/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CulinaryShowcase />
      <Marquee text="TASTE • TRADITION • MEDITERRANEAN SOUL" />
      <FoodGallery />

      <FinestTable />

      <Footer />
    </main>
  );
}
