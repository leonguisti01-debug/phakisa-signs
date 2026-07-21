import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PrintingHero from "@/components/PrintingHero";
import ImageCarousel from "@/components/ImageCarousel";
import PrintingServices from "@/components/PrintingServices";
import ProjectGallery from "@/components/ProjectGallery";
import ProcessTimeline from "@/components/ProcessTimeline";
import QuoteCTA from "@/components/QuoteCTA";

export default function PrintingPage() {
  return (
    <main className="bg-[#08141B] min-h-screen text-white">

      <Navbar />

      <PrintingHero />

      <ImageCarousel />

      <PrintingServices />

      <ProjectGallery />

      <ProcessTimeline />

      <QuoteCTA />

      <Footer />

    </main>
  );
}