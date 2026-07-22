import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ShopfittingHero from "@/components/ShopfittingHero";
import ImageCarousel from "@/components/ImageCarousel";
import ShopfittingServices from "@/components/ShopfittingServices";
import ProjectGallery from "@/components/ProjectGallery";
import ProcessTimeline from "@/components/ProcessTimeline";
import QuoteCTA from "@/components/QuoteCTA";

export default function ShopfittingPage() {
  return (
    <main className="min-h-screen bg-[#08141B] text-white">
      <Navbar />

      <ShopfittingHero />

      <ImageCarousel />

      <ShopfittingServices />

      <ProjectGallery />

      <ProcessTimeline />

      <QuoteCTA />

      <Footer />
    </main>
  );
}