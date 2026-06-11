import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { WeeklyBeats } from "@/components/WeeklyBeats";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { ArtistRoster } from "@/components/ArtistRoster";

export const metadata = {
  title: "Bar and Restaurant in Andheri East | Visit Opa Today",
  description:
    "Looking for a bar and restaurant in Andheri East? Visit Opa Bar & Cafe for great food, drinks, music, and nightlife. Book your table today!",
  keywords: [
    "nightlife in Andheri",
    "best club in Mumbai",
    "best lounge in Mumbai",
    "pubs in Andheri east Mumbai",
    "pubs in Andheri east",
    "cocktail bar in Andheri east",
    "cocktail bar in Andheri",
    "best party places in Andheri east",
    "lounge bar in Andheri east",
    "lounge Andheri east",
    "bars in Andheri east",
    "best bars in Andheri east",
    "places to drink in Andheri",
    "best places to drink in Andheri east",
    "bar in Andheri",
    "best bar in Andheri",
    "best bars in Andheri east",
    "best bar and cafe in Andheri east",
    "on till late night",
    "Best LIT cocktails",
    "Best Arabian ambience",
    "Best music and ambience",
    "andheri east bar and restaurant",
  ],
  openGraph: {
    title: "Nightlife in Andheri | OPA Bar & Cafe — Best Club & Lounge in Mumbai",
    description:
      "Mumbai's most electric nightlife destination. Best club, cocktail bar & lounge in Andheri East. LIT cocktails, live DJs, Arabian ambience — open till late night at OPA, Sakinaka.",
    url: "https://opabarandcafe.in/nightlife-in-andheri",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "website",
  },
};

const breadcrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://opabarandcafe.in/" },
    { "@type": "ListItem", "position": 2, "name": "Nightlife in Andheri", "item": "https://opabarandcafe.in/nightlife-in-andheri" },
  ],
};

export default function NightlifePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
      <Navbar />
      <StickyActions />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 md:pb-32 overflow-hidden bg-black">
        <img
          src="/lounge/DSC03303.jpg"
          alt="Best Nightlife in Andheri East Mumbai — OPA Bar & Cafe Open Till Late Night"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

        {/* Live badge */}
        <div className="absolute top-20 md:top-36 right-8 md:right-16 flex flex-col gap-3">
          <div className="flex items-center gap-2 bg-red-500/15 border border-red-500/30 px-4 py-2.5 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-red-400">Open Tonight</span>
          </div>
          <div className="bg-oasis-gold/15 border border-oasis-gold/30 backdrop-blur-sm rounded-2xl px-5 py-3 text-center">
            <p className="text-[8px] uppercase tracking-[0.4em] text-oasis-gold font-bold">4 Nights</p>
            <p className="text-2xl font-stylized text-sand-light mt-1">Weekly</p>
            <p className="text-[8px] uppercase tracking-[0.3em] text-sand-light/40 mt-0.5">Mon Wed Fri Sat</p>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 space-y-6">
          <p className="text-[10px] uppercase tracking-[0.6em] text-oasis-gold font-bold">The After Dark Experience</p>
          <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-stylized text-sand-light leading-none">
            Night<br />Life
          </h1>
          <p className="text-sand-light/55 max-w-lg font-sans text-base md:text-lg leading-relaxed">
            When the moon rises, OPA transforms. World-class beats fuse with an electric Arabic atmosphere — Mumbai's most charged nightlife destination.
          </p>

          {/* Quick highlights strip */}
          <div className="flex flex-wrap gap-3 pt-2">
            {["Deep House", "RnB & Hip-Hop", "Commercial Beats", "Arabic Tech", "Ladies Night", "Bottle Service"].map((tag) => (
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

      <Marquee text="BEATS • VIBES • THE AFTER DARK" />
      <ArtistRoster />
      <WeeklyBeats />

      {/* SEO — Nightlife & Bar Keywords */}
      <section className="py-14 md:py-24 lg:py-32 bg-sand-light border-t border-oasis-umber/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 space-y-3">
              <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">
                Nightlife · Cocktails · Open Till Late Night · Andheri East
              </span>
              <h2 className="text-3xl md:text-5xl font-stylized text-oasis-umber">
                Andheri East After Dark
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
              <div className="space-y-5 text-oasis-umber/70 text-base leading-relaxed font-light">
                <p>
                  When it comes to <strong className="text-oasis-umber font-semibold">nightlife in Andheri</strong>, OPA Bar &amp;
                  Cafe sets the gold standard. Voted among the{" "}
                  <strong className="text-oasis-umber font-semibold">best clubs in Mumbai</strong> and the{" "}
                  <strong className="text-oasis-umber font-semibold">best lounge in Mumbai</strong>, OPA is the ultimate
                  after-dark destination for those who demand more from their nights. We are{" "}
                  <strong className="text-oasis-umber font-semibold">open till late night</strong> — because great nights
                  shouldn't have an early curfew.
                </p>
                <p>
                  Looking for <strong className="text-oasis-umber font-semibold">pubs in Andheri East Mumbai</strong> or the{" "}
                  <strong className="text-oasis-umber font-semibold">best cocktail bar in Andheri East</strong>? OPA delivers
                  world-class <strong className="text-oasis-umber font-semibold">best LIT cocktails</strong>, a curated full bar,
                  and a dance floor powered by resident DJs spinning deep house, RnB, commercial, and Arabic tech. The
                  best <strong className="text-oasis-umber font-semibold">music and ambience in Andheri East</strong> — guaranteed
                  every night.
                </p>
                <p>
                  As Andheri's most sought-after{" "}
                  <strong className="text-oasis-umber font-semibold">lounge bar in Andheri East</strong>, OPA wraps every visit
                  in an authentic{" "}
                  <strong className="text-oasis-umber font-semibold">best Arabian ambience</strong> — think lanterns, palm trees,
                  flowing drapes, and that unmistakable energy that only{" "}
                  <strong className="text-oasis-umber font-semibold">best bars in Andheri East</strong> can deliver. Among all
                  <strong className="text-oasis-umber font-semibold"> best party places in Andheri East</strong>, OPA stands alone.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Nightlife in Andheri", sub: "Open Till Late Night · Every Night" },
                  { label: "Best Club in Mumbai", sub: "DJs · Live Music · Dance Floor" },
                  { label: "Best Lounge in Mumbai", sub: "Arabian Ambience · Sakinaka" },
                  { label: "Cocktail Bar Andheri East", sub: "Best LIT Cocktails · Full Bar" },
                  { label: "Pubs in Andheri East", sub: "Mon · Wed · Fri · Sat" },
                  { label: "Best Party Places", sub: "Andheri East · Mumbai" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="border border-oasis-umber/15 rounded-2xl p-5 space-y-1 hover:border-oasis-accent/40 hover:bg-oasis-umber/5 transition-all duration-300"
                  >
                    <p className="font-stylized text-oasis-umber text-sm leading-snug">{card.label}</p>
                    <p className="text-[11px] text-oasis-umber/55">{card.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-oasis-umber/10 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-oasis-umber/40 font-light">
              <p>📍 Hotel Peninsula Grand, Sakinaka Junction, Andheri East, Mumbai — 400072</p>
              <p>🕐 Open till late night · Mon · Wed · Fri · Sat &nbsp;|&nbsp; 🚇 Sakinaka Metro</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}
