import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <section className="min-h-screen max-w-screen relative overflow-x-hidden bg-gray-50/20">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </section>
  );
}
