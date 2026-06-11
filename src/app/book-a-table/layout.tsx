import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table | OPA Bar & Cafe | Andheri East Mumbai",
  description:
    "Reserve your table at OPA Bar & Cafe in Andheri East, Mumbai. Book online for fine dining, cocktails, and nightlife. Open till late night near Sakinaka Metro Station.",
};

const breadcrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://opabarandcafe.in/" },
    { "@type": "ListItem", "position": 2, "name": "Book a Table", "item": "https://opabarandcafe.in/book-a-table" },
  ],
};

export default function BookATableLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
