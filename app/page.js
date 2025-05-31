import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <section className="min-h-screen max-w-screen relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </section>
  );
}
