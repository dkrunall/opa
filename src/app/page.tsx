import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/About";
import { Marquee } from "@/components/Marquee";
import { Experiences } from "@/components/Experiences";
import { CulinaryShowcase } from "@/components/CulinaryShowcase";
import { FullMenu } from "@/components/FullMenu";
import { WeeklyBeats } from "@/components/WeeklyBeats";
import { TheSpaces } from "@/components/TheSpaces";
import { SocialGallery } from "@/components/SocialGallery";
import { GreatArch } from "@/components/GreatArch";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
      <Navbar />
      <Hero />
      <StickyActions />
      <Introduction />
      <CulinaryShowcase />
      <FullMenu />
      <Marquee text="THE OASIS EXPERIENCE" />
      <Experiences />
      <WeeklyBeats />
      <Marquee text="MENU • VIBES • NIGHTLIFE" />
      <TheSpaces />
      <SocialGallery />
      <GreatArch />
      <Footer />
    </main>
  );
}
