import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About OPA Bar & Cafe | Best Bar & Cafe in Andheri East, Mumbai",
  description:
    "Discover OPA Bar & Cafe — the best bar, cafe, and Mediterranean restaurant in Andheri East, Mumbai. Arabian ambience, LIT cocktails, rooftop dining, and nightlife. Open till late night near Sakinaka Metro Station.",
  keywords: [
    "best bar in Andheri",
    "best cafe in Andheri",
    "pubs in Andheri",
    "cafe in Andheri",
    "bar in Andheri",
    "mediterranean food restaurant",
    "mediterranean food restaurant in Andheri",
    "best club in Mumbai",
    "pubs in Andheri east Mumbai",
    "pubs in Andheri east",
    "best lounge in Mumbai",
    "bar and restaurant in Andheri east",
    "places to eat in Andheri east",
    "lounge Andheri east",
    "resto bar in Andheri east",
    "places to eat and drink near me",
    "aesthetic cafe in Andheri",
    "best bars in Andheri east",
    "places to drink in Andheri",
    "rooftop cafe in Andheri",
    "Best Mediterranean restaurant",
    "Best Lebanese restaurant",
    "Best Arabian restaurant",
    "lounge bar in Andheri east",
    "Best Turkish restaurant",
    "best bar and cafe in Andheri east",
    "bars in Andheri east",
    "cocktail bar in Andheri east",
    "best places to drink in Andheri east",
    "best party places in Andheri east",
    "cocktail bar in Andheri",
    "nightlife in Andheri",
    "rooftop dining in Andheri",
    "andheri east bar and restaurant",
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
      "Arabian ambience, craft cocktails, rooftop dining & late-night vibes. OPA — Andheri East's most iconic bar, cafe & Mediterranean restaurant. Open till late night.",
    url: "https://opabarandcafe.in/about",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
