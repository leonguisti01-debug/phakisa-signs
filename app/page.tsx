import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBar from "@/components/FeatureBar";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureBar />
      <Services />
      <ContactCTA />
      <Footer />
    </main>
  );
}