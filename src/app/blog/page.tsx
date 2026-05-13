"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

const blogs = [
  {
    slug: "/blog/best-bar-in-andheri",
    category: "Nightlife",
    title: "Best Bar in Andheri for Nightlife",
    excerpt:
      "Looking for the best bar in Andheri? OPA Bar & Cafe is Andheri East's most iconic nightlife destination — LIT cocktails, live music, and open till late night.",
    image: "/lounge/DSC03303.jpg",
    tags: ["Best Bar in Andheri", "Pubs in Andheri East", "Nightlife Mumbai"],
  },
  {
    slug: "/blog/mediterranean-food-restaurant-in-andheri",
    category: "Dining",
    title: "Mediterranean Food Restaurant in Andheri",
    excerpt:
      "Discover authentic Lebanese, Arabian, and Mediterranean cuisine at OPA Bar & Cafe — the best Mediterranean food restaurant in Andheri East, Mumbai.",
    image: "/food/30 TEN --2.png",
    tags: ["Mediterranean Restaurant", "Best Lebanese Restaurant", "Arabic Food Andheri"],
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
      <Navbar />
      <StickyActions />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 md:pb-32 overflow-hidden bg-oasis-umber">
        <img
          src="/lounge/DSC03299.jpg"
          alt="OPA Bar & Cafe Blog — Andheri East Mumbai"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/60 to-transparent z-10" />
        <div className="container mx-auto px-6 relative z-20 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.8em] text-oasis-accent font-bold block">
            Stories · Insights · Experiences
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-stylized text-sand-light leading-none tracking-tight">
            The OPA <br /> Journal
          </h1>
          <p className="text-sand-light/60 max-w-xl font-light text-base md:text-xl leading-relaxed">
            Nightlife, cuisine, cocktails, and everything that makes Andheri East's most iconic bar &amp; cafe tick.
          </p>
        </div>
      </section>

      <Marquee text="NIGHTLIFE • MEDITERRANEAN • COCKTAILS • ANDHERI EAST" />

      {/* Blog Listing */}
      <section className="py-20 md:py-32 bg-sand-light">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 space-y-2">
              <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">
                All Articles
              </span>
              <h2 className="text-3xl md:text-5xl font-stylized text-oasis-umber">
                Latest from OPA
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <Link key={blog.slug} href={blog.slug} className="group block">
                  <article className="border border-oasis-umber/10 rounded-[2rem] overflow-hidden hover:border-oasis-accent/30 hover:shadow-xl transition-all duration-500">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-oasis-umber/20 group-hover:bg-oasis-umber/10 transition-colors duration-500" />
                      <span className="absolute top-5 left-5 bg-oasis-accent/90 text-oasis-umber text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                        {blog.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <h3 className="text-xl md:text-2xl font-stylized text-oasis-umber leading-snug group-hover:text-oasis-accent transition-colors duration-300">
                        {blog.title}
                      </h3>
                      <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-oasis-umber/12 text-oasis-umber/50 text-[10px] uppercase tracking-wider font-medium px-3 py-1.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 pt-2 text-oasis-accent text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                        <span>Read Article</span>
                        <span>→</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
