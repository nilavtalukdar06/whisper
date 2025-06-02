import { ChevronRight } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";
import Testimonial from "./testimonial";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-4xl my-8 mx-auto p-10">
      <TextAnimate className="text-center text-4xl lg:text-6xl leading-[54px] md:leading-[72px]">
        Dive into the world of Anonymous Feedback
      </TextAnimate>
      <TextAnimate className="text-center my-3 text-gray-500 text-sm lg:text-base">
        True Feedback - Where your identity remains a secret
      </TextAnimate>
      <Testimonial />
      <Link
        className="my-2.5 w-full flex justify-center items-center"
        href="/login"
      >
        <Button className="w-[180px] h-[50px] rounded-full flex justify-center items-center gap-x-2">
          <span>Get Started</span>
          <ChevronRight />
        </Button>
      </Link>
    </section>
  );
}
