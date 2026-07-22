import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import SignageHero from "@/components/SignageHero";
import ImageCarousel from "@/components/ImageCarousel";
import SignageServices from "@/components/SignageServices";
import ProjectGallery from "@/components/ProjectGallery";
import ProcessTimeline from "@/components/ProcessTimeline";
import QuoteCTA from "@/components/QuoteCTA";

export default function SignagePage() {
  return (
    <main className="min-h-screen bg-[#08141B] text-white">
      <Navbar />

      <SignageHero />

      <ImageCarousel />

      <SignageServices />

      <ProjectGallery />

      <ProcessTimeline />

      <QuoteCTA />

      <Footer />
    </main>
  );
}