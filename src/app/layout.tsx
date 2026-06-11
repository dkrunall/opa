import type { Metadata } from "next";
import { Inter, Cinzel_Decorative } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { BookingProvider } from "@/components/BookingContext";
import { BookingModal } from "@/components/BookingModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const stylized = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-stylized",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Opa Bar & Cafe | The Oasis Sanctuary",
  description: "Experience modern Mediterranean cuisine and vibrant luxury at Opa Bar & Cafe, Mumbai.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Opa! Bar & Cafe",
  "url": "https://opabarandcafe.in/",
  "logo": "https://opabarandcafe.in/wp-content/uploads/2024/09/Design-PNGS_OPA-Logo-Brown.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "081049 61636",
    "contactType": "reservations",
    "areaServed": "IN",
    "availableLanguage": "en",
  },
  "sameAs": [
    "https://www.facebook.com/OpaBarAndCafe/",
    "https://x.com/opabarandcafe",
    "https://www.instagram.com/opabarandcafe/",
    "https://opabarandcafe.in/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M4JKDWML');`}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${stylized.variable} antialiased bg-sand-light text-oasis-umber`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4JKDWML"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3G9YYW0TNZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3G9YYW0TNZ');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <BookingProvider>
          <div className="grainy-overlay" />
          <Preloader />
          {/* <CustomCursor /> */}
          <BookingModal />
          <SmoothScroll>{children}</SmoothScroll>
        </BookingProvider>
      </body>
    </html>
  );
}
