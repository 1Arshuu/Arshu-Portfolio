import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Timeline from "@/components/sections/Timeline";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import MarqueeDivider from "@/components/ui/MarqueeDivider";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <Hero />

      <MarqueeDivider direction="left" />

      <About />

      {/* 2nd marquee — slower */}
      <MarqueeDivider direction="right" durationSec={55} />

      <Services />

      <MarqueeDivider direction="left" />

      <Work />

      <MarqueeDivider direction="right" />

      <Timeline />

      <MarqueeDivider direction="left" />

      <Testimonials />

      <CTA />

      <Footer />

      {/* Floating, always-visible element */}
      <FloatingWhatsApp />
    </main>
  );
}
