import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Rooftop Cafe in Andheri | Opa Bar & Cafe Blogs",
  description:
    "Searching for a rooftop cafe in Andheri? Explore Opa Bar & Cafe blogs for insights, vibes, food & drinks. Visit now and experience the best!",
};

const breadcrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://opabarandcafe.in/" },
    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://opabarandcafe.in/blog" },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
