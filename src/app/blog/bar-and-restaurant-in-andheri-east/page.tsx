import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Bar and Restaurant in Andheri East | Opa Bar & Cafe",
  description:
    "Discover Opa Bar & Cafe, a premium bar and restaurant in Andheri East near Mumbai Airport, known for dining, cocktails, nightlife, and celebrations.",
  keywords: [
    "bar and restaurant in Andheri East",
    "andheri east bar and restaurant",
    "bar and restaurant near international airport Mumbai",
    "bar near airport",
    "party places near airport",
    "resto bar in Andheri East",
    "nightlife Andheri East",
    "cocktail bar Andheri East",
    "best bar in Andheri",
    "rooftop cafe Andheri",
  ],
  openGraph: {
    title: "Bar and Restaurant in Andheri East | Opa Bar & Cafe",
    description:
      "Discover Opa Bar & Cafe, a premium bar and restaurant in Andheri East near Mumbai Airport, known for dining, cocktails, nightlife, and celebrations.",
    url: "https://opabarandcafe.in/blog/bar-and-restaurant-in-andheri-east",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "article",
  },
};

const faqs = [
  {
    q: "Why is Opa Bar & Cafe considered a top bar and restaurant in Andheri East?",
    a: "Opa offers premium dining, handcrafted cocktails, stylish ambiance, exceptional hospitality, and a convenient location near Mumbai Airport.",
  },
  {
    q: "Is Opa Bar & Cafe located near Mumbai International Airport?",
    a: "Yes. Opa is conveniently situated, making it a preferred bar and restaurant near international airport Mumbai for travelers and locals.",
  },
  {
    q: "Does Opa host private parties and celebrations?",
    a: "Yes. Opa is one of the preferred party places near airport for birthdays, anniversaries, corporate gatherings, and special events.",
  },
  {
    q: "What type of cuisine does Opa Bar & Cafe serve?",
    a: "Opa offers a curated menu featuring Middle Eastern, Mediterranean, and Levantine dishes, chef specialties, and premium dining experiences.",
  },
  {
    q: "Is Opa suitable for business meetings and networking?",
    a: "Absolutely. The ambiance, location, and hospitality make it ideal for informal meetings, networking events, and corporate gatherings.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://opabarandcafe.in/" },
    { "@type": "ListItem", position: 2, name: "Blogs", item: "https://opabarandcafe.in/blog" },
    { "@type": "ListItem", position: 3, name: "Bar and Restaurant in Andheri East", item: "https://opabarandcafe.in/blog/bar-and-restaurant-in-andheri-east" },
  ],
};

export default function BlogBarRestaurantAndheriEastPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
        <Navbar />
        <StickyActions />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-20 md:pb-28 overflow-hidden bg-oasis-umber">
          <img
            src="/cafe/DSC03327.jpg"
            alt="Bar and Restaurant in Andheri East — OPA Bar & Cafe Near Mumbai Airport"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/60 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 space-y-5 max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <span className="bg-oasis-accent/20 border border-oasis-accent/40 text-oasis-accent text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                Dining & Bar
              </span>
              <span className="bg-white/10 border border-white/20 text-sand-light/70 text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                Andheri East · Near Airport · Mumbai
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-stylized text-sand-light leading-tight tracking-tight">
              Bar and Restaurant in <br className="hidden md:block" /> Andheri East: Where Great Food <br className="hidden md:block" /> Meets Memorable Evenings
            </h1>
            <p className="text-sand-light/60 max-w-2xl font-light text-base md:text-lg leading-relaxed">
              Signature cocktails, curated cuisine, and vibrant nightlife — OPA Bar &amp; Cafe is Andheri East's most complete hospitality destination, steps from Mumbai Airport.
            </p>
          </div>
        </section>

        <Marquee text="DINING • BAR • NIGHTLIFE • NEAR AIRPORT • ANDHERI EAST" />

        {/* Article Body */}
        <article className="py-20 md:py-32 bg-sand-light">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-14">

              {/* Intro */}
              <div className="space-y-5 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Mumbai's dining and nightlife scene is constantly evolving, but few locations offer the perfect blend of accessibility, ambiance, culinary excellence, and vibrant social experiences quite like Andheri East. Whether you're a business traveler flying into the city, a local looking for a premium dining destination, or a group planning a memorable celebration, finding the right venue can make all the difference.
                </p>
                <p>
                  If you're searching for a <strong className="text-oasis-umber">bar and restaurant in Andheri East</strong> that combines elevated dining, handcrafted beverages, stylish interiors, and exceptional hospitality, Opa Bar &amp; Cafe delivers an experience that goes beyond expectations.
                </p>
                <p>
                  Located conveniently near Mumbai International Airport, Opa Bar &amp; Cafe has established itself as a destination where guests can unwind, celebrate, network, and indulge in thoughtfully curated food and beverage experiences.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Why Andheri East Has Become a Preferred Dining and Nightlife Destination
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Over the years, Andheri East has transformed into one of Mumbai's most dynamic commercial and lifestyle hubs. Guests today are looking for more than just food and drinks. They seek:
                </p>
                <ul className="space-y-3">
                  {[
                    "Stylish dining environments",
                    "Curated cocktail experiences",
                    "Live entertainment",
                    "Rooftop and lounge atmospheres",
                    "Convenient airport accessibility",
                    "Memorable celebrations and social gatherings",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-oasis-umber/70 font-light">
                      <span className="w-2 h-2 rounded-full bg-oasis-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Opa Bar &amp; Cafe has been designed to meet these evolving expectations while delivering a premium hospitality experience in the heart of Mumbai.
                </p>
              </div>

              {/* Section 2 — Culinary */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  A Carefully Curated Culinary Experience
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Food is at the heart of every memorable hospitality experience. Our culinary team focuses on creating dishes that blend global inspiration with contemporary presentation. Guests can enjoy:
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { title: "Global Cuisine Selections", desc: "A diverse menu spanning Middle Eastern, Levantine, and Mediterranean flavors curated for every palate." },
                    { title: "Chef-Crafted Specialties", desc: "Signature dishes crafted with premium ingredients and refined presentation." },
                    { title: "Sharing Platters for Groups", desc: "Perfect for social dining — mezze platters and grilled specialties to share." },
                    { title: "Seasonal Menu Innovations", desc: "Menus that evolve with the season, ensuring fresh and exciting culinary experiences every visit." },
                  ].map((item, i) => (
                    <div key={i} className="border border-oasis-umber/12 rounded-2xl p-6 space-y-2 hover:border-oasis-accent/30 hover:bg-oasis-umber/[0.02] transition-all duration-300">
                      <h3 className="font-stylized text-oasis-umber text-lg leading-snug">{item.title}</h3>
                      <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3 — Cocktails */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Signature Cocktails and Premium Beverages
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    A modern <strong className="text-oasis-umber">bar and restaurant in Andheri East</strong> must offer more than a standard beverage menu. At Opa Bar &amp; Cafe, our mixologists create handcrafted cocktails using premium ingredients, innovative techniques, and balanced flavor profiles.
                  </p>
                  <p>
                    Guests can also choose from an extensive collection of spirits, wines, mocktails, and specialty beverages. Whether you're enjoying a relaxed evening or celebrating a special occasion, the beverage experience is designed to elevate every visit.
                  </p>
                </div>
              </div>

              {/* Section 4 — Near Airport */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  The Perfect Bar and Restaurant Near International Airport Mumbai
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  For travelers, business professionals, and visitors with limited time in the city, Opa Bar &amp; Cafe serves as an ideal{" "}
                  <strong className="text-oasis-umber">bar and restaurant near international airport Mumbai</strong>. Its strategic location offers several advantages:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { title: "Quick Airport Access", desc: "Enjoy a premium dining experience without traveling across the city." },
                    { title: "Ideal for Business Travelers", desc: "Perfect balance between business sophistication and social comfort for client meetings." },
                    { title: "Convenient Meeting Point", desc: "Proximity to major transportation routes makes Opa easily accessible from any part of Mumbai." },
                  ].map((item, i) => (
                    <div key={i} className="border border-oasis-umber/12 rounded-2xl p-6 space-y-2 text-center hover:border-oasis-accent/30 transition-all duration-300">
                      <h3 className="font-stylized text-oasis-umber text-base leading-snug">{item.title}</h3>
                      <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5 — Bar Near Airport */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  A Premium Bar Near Airport for Every Occasion
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Opa Bar &amp; Cafe combines convenience with quality. As a premier <strong className="text-oasis-umber">bar near airport</strong>, guests can visit for:
                </p>
                <div className="bg-oasis-umber/[0.04] border border-oasis-umber/10 rounded-2xl p-8 space-y-4">
                  <ul className="space-y-3">
                    {[
                      { title: "After-Work Drinks", desc: "Unwind after a productive day with expertly crafted cocktails and curated food pairings." },
                      { title: "Weekend Social Gatherings", desc: "Catch up with friends in a lively yet sophisticated environment." },
                      { title: "Date Nights", desc: "Enjoy intimate dining experiences complemented by elegant interiors and attentive service." },
                      { title: "Corporate Networking", desc: "Build professional relationships in a relaxed and upscale setting." },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-oasis-umber/70 font-light text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-oasis-accent shrink-0 mt-2" />
                        <span><strong className="text-oasis-umber font-medium">{item.title}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 6 — Party Places */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  One of the Most Popular Party Places Near Airport
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Celebrations deserve extraordinary venues. Opa Bar &amp; Cafe is increasingly recognized among the preferred <strong className="text-oasis-umber">party places near airport</strong> because of its:
                </p>
                <ul className="space-y-3">
                  {[
                    "Vibrant atmosphere",
                    "Premium food and beverage offerings",
                    "Stylish interiors",
                    "Group-friendly seating arrangements",
                    "Professional event support",
                    "Personalized hospitality",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-oasis-umber/70 font-light">
                      <span className="w-2 h-2 rounded-full bg-oasis-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 7 — Featured In */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Recognized by Leading Publications
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Opa Bar &amp; Cafe has been featured by respected lifestyle and hospitality publications, reflecting its growing presence within Mumbai's premium dining landscape:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { pub: "ELLE India", desc: "New Menus Across Mumbai, Delhi & Kolkata" },
                    { pub: "Curly Tales", desc: "Best Rooftop Restaurants in Mumbai" },
                  ].map((item, i) => (
                    <div key={i} className="bg-oasis-umber/[0.04] border border-oasis-umber/10 rounded-2xl p-6 space-y-1">
                      <p className="font-stylized text-oasis-umber text-lg">{item.pub}</p>
                      <p className="text-oasis-umber/50 text-sm font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 8 — What Makes Opa Different */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  What Makes Opa Bar & Cafe Different?
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { title: "Premium Ambiance", desc: "Sophisticated interiors designed for both social and professional occasions." },
                    { title: "Curated Food & Beverage Program", desc: "Thoughtfully crafted menus and signature cocktail experiences." },
                    { title: "Strategic Location", desc: "Easy accessibility for residents, travelers, and corporate guests near the airport." },
                    { title: "Personalized Hospitality", desc: "Attentive service focused on guest satisfaction every single visit." },
                  ].map((item, i) => (
                    <div key={i} className="border border-oasis-umber/12 rounded-2xl p-6 space-y-2 hover:border-oasis-accent/30 hover:bg-oasis-umber/[0.02] transition-all duration-300">
                      <h3 className="font-stylized text-oasis-umber text-lg leading-snug">{item.title}</h3>
                      <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-5 border-t border-oasis-umber/10 pt-10">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Experience Opa Bar & Cafe
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Whether you're looking for a premium <strong className="text-oasis-umber">bar and restaurant in Andheri East</strong>, a convenient <strong className="text-oasis-umber">bar and restaurant near international airport Mumbai</strong>, a stylish <strong className="text-oasis-umber">bar near airport</strong>, or one of the most vibrant <strong className="text-oasis-umber">party places near airport</strong>, Opa Bar &amp; Cafe offers an experience designed to exceed expectations.
                  </p>
                  <p>
                    From exceptional cuisine and signature cocktails to memorable celebrations and warm hospitality, every visit is crafted to leave a lasting impression.
                  </p>
                </div>
                <a
                  href="/book-a-table"
                  className="inline-block mt-2 bg-oasis-umber text-sand-light text-[10px] uppercase tracking-widest font-bold px-8 py-4 rounded-full hover:bg-oasis-accent transition-colors duration-300"
                >
                  Reserve Your Table
                </a>
              </div>

            </div>
          </div>
        </article>

        {/* FAQs */}
        <section className="py-20 md:py-28 bg-oasis-umber">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="text-center space-y-3">
                <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl md:text-5xl font-stylized text-sand-light">FAQs</h2>
              </div>
              <div className="space-y-5">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-sand-light/10 rounded-2xl p-7 space-y-3 hover:border-oasis-accent/30 transition-colors duration-300">
                    <h3 className="font-stylized text-sand-light text-lg leading-snug">
                      {i + 1}. {faq.q}
                    </h3>
                    <p className="text-sand-light/50 text-sm leading-relaxed font-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-sand-light border-t border-oasis-umber/10">
          <div className="container mx-auto px-6 text-center space-y-4">
            <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">
              Hotel Peninsula Grand · Sakinaka · Andheri East, Mumbai
            </span>
            <p className="text-oasis-umber/60 text-sm font-light">
              📍 Sakinaka Junction, Andheri East &nbsp;|&nbsp; 📞 +91 81049 61636 &nbsp;|&nbsp; 🕐 5:00 PM – 3:00 AM Daily
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
