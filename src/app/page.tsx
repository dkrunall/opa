import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/About";
import { Marquee } from "@/components/Marquee";
import { DualExperience } from "@/components/DualExperience";
import { TheSpaces } from "@/components/TheSpaces";
import { IconicVenue } from "@/components/IconicVenue";
import { SocialGallery } from "@/components/SocialGallery";
import { GreatArch } from "@/components/GreatArch";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";

export const metadata: Metadata = {
  title: "OPA Bar & Cafe | Best Bar, Cafe & Mediterranean Restaurant in Andheri East Mumbai",
  description:
    "OPA Bar & Cafe — the best bar, cafe, lounge & Mediterranean restaurant in Andheri East, Mumbai. Rooftop dining, LIT cocktails, Arabian ambience & live music. Open till late night near Sakinaka Metro Station.",
  keywords: [
    "best bar in Andheri",
    "best cafe in Andheri",
    "pubs in Andheri",
    "cafe in Andheri",
    "bar in Andheri",
    "mediterranean food restaurant in Andheri",
    "best club in Mumbai",
    "pubs in Andheri east Mumbai",
    "best lounge in Mumbai",
    "bar and restaurant in Andheri east",
    "places to eat in Andheri east",
    "lounge Andheri east",
    "resto bar in Andheri east",
    "places to eat and drink near me",
    "aesthetic cafe in Andheri",
    "best bars in Andheri east",
    "rooftop cafe in Andheri",
    "Best Mediterranean restaurant",
    "Best Lebanese restaurant",
    "Best Arabian restaurant",
    "lounge bar in Andheri east",
    "Best Turkish restaurant",
    "best bar and cafe in Andheri east",
    "cocktail bar in Andheri east",
    "best party places in Andheri east",
    "nightlife in Andheri",
    "rooftop dining in Andheri",
    "Best Arabic Restaurant in Andheri East Mumbai",
    "Mediterranean Food Restaurant in Andheri East",
    "Best Cocktail Bar in Andheri East Mumbai",
    "Healthy Food Cafe in Andheri East Mumbai",
    "Best LIT cocktails",
    "Best Arabian ambience",
    "Best music and ambience",
    "on till late night",
  ],
  openGraph: {
    title: "OPA Bar & Cafe | Best Bar, Lounge & Mediterranean Restaurant in Andheri East",
    description:
      "Arabian ambience, LIT cocktails, rooftop dining & late-night vibes. OPA — Andheri East's most iconic bar, cafe & Mediterranean restaurant. Open till late night near Sakinaka.",
    url: "https://opabarandcafe.in",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
      <Navbar />
      <Hero />
      <StickyActions />
      <Introduction />
      <Marquee text="THE OASIS EXPERIENCE" />
      <DualExperience />
      <Marquee text="MENU • VIBES • NIGHTLIFE" />
      <TheSpaces />
      
      <IconicVenue />

      <SocialGallery />
      <GreatArch />

      <Footer />
    </main>
  );
}

