import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Mediterranean Food Restaurant in Andheri | Opa Bar and Cafe",
  description:
    "Looking for the best Mediterranean food restaurant in Andheri? Visit Opa Bar and Cafe for authentic Lebanese, Arabian, and Mediterranean cuisine, vibrant ambience, and unforgettable dining experiences.",
  keywords: [
    "Mediterranean food restaurant in Andheri",
    "Best Mediterranean restaurant",
    "Best Mediterranean restaurant Mumbai",
    "Best Lebanese restaurant Andheri East",
    "Best Arabian restaurant Mumbai",
    "Best Arabic Restaurant in Andheri East Mumbai",
    "Mediterranean Food Restaurant in Andheri East",
    "places to eat in Andheri East",
    "rooftop dining in Andheri",
    "Healthy Food Cafe in Andheri East Mumbai",
    "Mediterranean cuisine Mumbai",
    "Lebanese food Andheri",
  ],
  openGraph: {
    title: "Mediterranean Food Restaurant in Andheri | Opa Bar and Cafe",
    description:
      "Discover authentic Lebanese, Arabian, and Mediterranean cuisine at Opa Bar and Cafe — the best Mediterranean food restaurant in Andheri East, Mumbai.",
    url: "https://opabarandcafe.in/blog/mediterranean-food-restaurant-in-andheri",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "article",
  },
};

const faqs = [
  {
    q: "Which is the best Mediterranean food restaurant in Andheri?",
    a: "Opa Bar and Cafe is considered one of the best places for authentic Mediterranean cuisine in Andheri, offering Lebanese, Arabian, and Mediterranean specialities.",
  },
  {
    q: "Does Opa Bar and Cafe serve Lebanese food?",
    a: "Yes, Opa Bar and Cafe is known as the Best Lebanese restaurant serving authentic hummus, shawarmas, mezze platters, kebabs, and more.",
  },
  {
    q: "What type of cuisine is available at Opa Bar and Cafe?",
    a: "The restaurant offers Mediterranean, Lebanese, and Arabian cuisine along with refreshing beverages and signature dishes.",
  },
  {
    q: "Is Opa Bar and Cafe suitable for family dining?",
    a: "Yes, the restaurant offers a comfortable ambience ideal for families, couples, groups, and celebrations.",
  },
  {
    q: "Why is Opa Bar and Cafe considered the Best Arabian restaurant?",
    a: "The restaurant serves flavourful Arabian dishes prepared with authentic spices, fresh ingredients, and premium hospitality, making it a preferred dining destination in Andheri.",
  },
];

export default function BlogMediterraneanPage() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
      <Navbar />
      <StickyActions />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20 md:pb-28 overflow-hidden bg-oasis-umber">
        <img
          src="/food/30 TEN --2.png"
          alt="Mediterranean Food Restaurant in Andheri — OPA Bar & Cafe Lebanese Arabic Cuisine"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/60 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 space-y-5 max-w-4xl">
          <div className="flex flex-wrap gap-3">
            <span className="bg-oasis-accent/20 border border-oasis-accent/40 text-oasis-accent text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
              Dining
            </span>
            <span className="bg-white/10 border border-white/20 text-sand-light/70 text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
              Mediterranean · Lebanese · Arabian
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-stylized text-sand-light leading-tight tracking-tight">
            Discover the Flavours of <br className="hidden md:block" /> the Mediterranean at <br className="hidden md:block" /> Opa Bar and Cafe
          </h1>
          <p className="text-sand-light/60 max-w-2xl font-light text-base md:text-lg leading-relaxed">
            Authentic Lebanese, Arabian, and Mediterranean cuisine in the heart of Andheri East, Mumbai.
          </p>
        </div>
      </section>

      <Marquee text="MEDITERRANEAN • LEBANESE • ARABIAN • TURKISH • ANDHERI EAST" />

      {/* Article Body */}
      <article className="py-20 md:py-32 bg-sand-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-14">

            {/* Intro */}
            <div className="space-y-5 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
              <p>
                Mumbai's food scene is always evolving, but some cuisines continue to win hearts with their rich flavours, healthy ingredients, and comforting dishes. Mediterranean cuisine is one such favourite that has quickly become popular among food lovers across the city. If you are searching for a memorable dining experience with authentic flavours, refreshing ambience, and dishes that leave a lasting impression, then Opa Bar and Cafe is the place to visit.
              </p>
              <p>
                Located in the heart of Andheri, Opa Bar and Cafe has become a preferred destination for those looking for a premium{" "}
                <strong className="text-oasis-umber">Mediterranean food restaurant</strong> experience. From sizzling grills and creamy hummus to flavour-packed mezze platters and aromatic Arabian delicacies, every dish is prepared to offer guests a perfect balance of taste and authenticity.
              </p>
              <p>
                Whether you are planning a casual dinner, weekend outing, date night, or group celebration, Opa Bar and Cafe offers an experience that goes beyond just food.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                Why Mediterranean Cuisine is Loved by Food Enthusiasts
              </h2>
              <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Mediterranean cuisine is known for its fresh ingredients, bold flavours, healthy preparations, and vibrant presentation. Unlike heavy meals, Mediterranean food combines nutrition and taste beautifully using olive oil, fresh herbs, grilled meats, vegetables, chickpeas, pita bread, and flavourful spices.
                </p>
                <p>
                  At Opa Bar and Cafe, every dish reflects the true essence of Mediterranean dining. Guests can enjoy everything from creamy hummus and crispy falafel to perfectly grilled kebabs and authentic Lebanese platters.
                </p>
                <p>
                  As a leading <strong className="text-oasis-umber">Mediterranean food restaurant</strong>, Opa Bar and Cafe focuses on quality ingredients and carefully curated recipes that satisfy both traditional and modern tastes.
                </p>
              </div>
            </div>

            {/* Section 2 — Menu Highlights */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                Experience the Best Mediterranean Restaurant in Andheri
              </h2>
              <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                Finding a place that delivers authentic Mediterranean flavours along with great ambience can be difficult. That is why Opa Bar and Cafe stands out as the <strong className="text-oasis-umber">Best Mediterranean restaurant</strong> for food lovers in Mumbai. The menu has been thoughtfully designed to offer a variety of Mediterranean specialities, including:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Fresh mezze platters",
                  "Lebanese wraps and shawarmas",
                  "Arabian grilled delicacies",
                  "Signature hummus varieties",
                  "Falafel and pita platters",
                  "Flavourful rice bowls",
                  "Refreshing beverages and mocktails",
                  "Healthy food options",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border border-oasis-umber/10 rounded-xl px-5 py-3 hover:border-oasis-accent/30 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-oasis-accent shrink-0" />
                    <span className="text-oasis-umber/70 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                Every dish is prepared with authentic spices and fresh ingredients to ensure guests enjoy a genuine Mediterranean culinary experience.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                A Must-Visit Best Lebanese Restaurant for Authentic Flavours
              </h2>
              <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Lebanese cuisine has become one of the most loved food choices for people who enjoy rich flavours without overly heavy meals. Opa Bar and Cafe has built a strong reputation as the <strong className="text-oasis-umber">Best Lebanese restaurant in Andheri</strong> by serving dishes that are authentic, satisfying, and beautifully presented.
                </p>
                <p>
                  From creamy garlic dips and freshly baked pita bread to juicy grilled kebabs and shawarma platters, every item on the menu reflects the traditional essence of Lebanese cooking.
                </p>
                <p>
                  The chefs at Opa Bar and Cafe focus on preserving authenticity while also adding modern presentation and flavours that appeal to Mumbai's diverse audience. Whether you are trying Lebanese food for the first time or are already a fan of Mediterranean cuisine, you will find something exciting on the menu.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                Enjoy Arabian Delicacies at the Best Arabian Restaurant
              </h2>
              <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Arabian cuisine is known for its aromatic spices, charcoal-grilled meats, and flavourful rice preparations. At Opa Bar and Cafe, guests can enjoy a wide selection of Arabian dishes that capture the richness of Middle Eastern culinary traditions.
                </p>
                <p>
                  This is one of the reasons why many visitors consider Opa Bar and Cafe the <strong className="text-oasis-umber">Best Arabian restaurant in Andheri</strong>. The restaurant creates a complete dining experience where flavours, ambience, and hospitality come together perfectly.
                </p>
                <p>
                  The smoky aroma of grilled platters, delicious kebabs, and signature Arabian preparations make every meal memorable. Whether you are visiting with family, friends, or colleagues, the restaurant offers dishes suitable for every palate.
                </p>
              </div>
            </div>

            {/* Section 5 — Ambience */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                Perfect Ambience for Every Occasion
              </h2>
              <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                Great food becomes even better when paired with the right atmosphere. Opa Bar and Cafe offers a stylish yet welcoming ambience that makes guests feel comfortable from the moment they enter. The modern interiors, elegant décor, ambient lighting, and lively vibe make it one of the most preferred dining destinations in Andheri. Whether you are planning:
              </p>
              <ul className="space-y-3">
                {[
                  "A casual lunch",
                  "Family dinner",
                  "Birthday celebration",
                  "Corporate outing",
                  "Romantic dinner date",
                  "Weekend gathering",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-oasis-umber/70 font-light">
                    <span className="w-2 h-2 rounded-full bg-oasis-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                Opa Bar and Cafe creates the perfect setting for every occasion. As a premium <strong className="text-oasis-umber">Mediterranean food restaurant</strong>, the restaurant also focuses on exceptional customer service to ensure every guest enjoys a seamless experience.
              </p>
            </div>

            {/* Section 6 — Reasons */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                Why Food Lovers Choose Opa Bar and Cafe
              </h2>
              <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                There are many restaurants in Mumbai, but Opa Bar and Cafe continues to attract guests because of its unique combination of flavours, ambience, and hospitality. Here's why visitors keep coming back:
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Authentic Mediterranean & Lebanese Cuisine",
                    desc: "Prepared using quality ingredients and traditional cooking methods.",
                  },
                  {
                    title: "Stylish and Comfortable Ambience",
                    desc: "Perfect for both casual and special occasions.",
                  },
                  {
                    title: "Wide Variety of Dishes",
                    desc: "Options for vegetarians and non-vegetarians alike.",
                  },
                  {
                    title: "Prime Andheri Location",
                    desc: "Conveniently accessible for residents and visitors near Sakinaka Metro.",
                  },
                  {
                    title: "Great Dining Experience",
                    desc: "Excellent service combined with unforgettable flavours.",
                  },
                  {
                    title: "Healthy Food Options",
                    desc: "Fresh, wholesome Mediterranean ingredients for health-conscious guests.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border border-oasis-umber/12 rounded-2xl p-6 space-y-2 hover:border-oasis-accent/30 hover:bg-oasis-umber/[0.02] transition-all duration-300"
                  >
                    <h3 className="font-stylized text-oasis-umber text-lg leading-snug">{item.title}</h3>
                    <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                If you are searching for the <strong className="text-oasis-umber">Best Mediterranean restaurant</strong> or a premium <strong className="text-oasis-umber">Mediterranean food restaurant in Andheri</strong>, Opa Bar and Cafe is a destination worth experiencing.
              </p>
            </div>

            {/* Conclusion */}
            <div className="space-y-5 border-t border-oasis-umber/10 pt-10">
              <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                Conclusion
              </h2>
              <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Mediterranean cuisine is more than just food — it is a celebration of flavours, freshness, and culture. At Opa Bar and Cafe, guests can experience the authentic taste of Lebanese and Arabian cuisine in a vibrant and welcoming setting.
                </p>
                <p>
                  From flavour-packed platters to refreshing ambience and exceptional hospitality, everything about the restaurant is designed to create memorable dining experiences. Whether you are craving authentic Middle Eastern dishes or looking for the <strong className="text-oasis-umber">Best Lebanese restaurant in Andheri</strong>, Opa Bar and Cafe offers the perfect culinary escape.
                </p>
                <p>
                  Visit Opa Bar and Cafe today and discover why it is becoming one of Mumbai's favourite destinations for Mediterranean and Arabian cuisine.
                </p>
              </div>
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
                <div
                  key={i}
                  className="border border-sand-light/10 rounded-2xl p-7 space-y-3 hover:border-oasis-accent/30 transition-colors duration-300"
                >
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
            📍 Sakinaka Junction, Andheri East &nbsp;|&nbsp; 📞 +91 91676 66737 &nbsp;|&nbsp; 🕐 Open daily · Till late night
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
