import type { Metadata } from "next";
import { Inter, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { BookingProvider } from "@/components/BookingContext";
import { BookingModal } from "@/components/BookingModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const stylized = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-stylized",
});

export const metadata: Metadata = {
  title: "Opa Bar & Cafe | The Oasis Sanctuary",
  description: "Experience modern Mediterranean cuisine and vibrant luxury at Opa Bar & Cafe, Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${stylized.variable} antialiased bg-sand-light text-oasis-umber`}
      >
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
