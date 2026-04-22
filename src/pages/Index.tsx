import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { StickyButtons } from "@/components/StickyButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Trust />
        <About />
        <Programs />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
};

export default Index;
