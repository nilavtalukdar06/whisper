import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <section className="min-h-screen max-w-screen relative overflow-x-hidden bg-gray-50/20">
      <Navbar />
      <HeroSection />
      <CTA />
      <FeaturesSection />
      <div className="my-10 flex flex-col justify-center items-center gap-y-8">
        <TextAnimate className="text-3xl sm:text-5xl font-medium text-center">
          Speak Freely Stay Anonymous
        </TextAnimate>
        <Link
          className="w-full flex justify-center items-center"
          href="/contact"
        >
          <Button className="w-[180px] h-[50px] rounded-none shadow-none flex justify-center items-center">
            <span>Contact Us</span>
          </Button>
        </Link>
      </div>
      <Footer />
    </section>
  );
}
