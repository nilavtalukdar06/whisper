"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden">
      <div className="max-w-sm md:max-w-md mx-auto my-16 p-6">
        <TextAnimate className="text-3xl md:text-4xl font-normal text-center">
          Signup to Whisper
        </TextAnimate>
        <form className="my-12 flex flex-col gap-y-6 justify-center items-center w-full">
          <div className="space-y-2 w-full flex flex-col">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              className="px-3 py-2 border border-gray-200 rounded"
            />
          </div>
          <div className="space-y-2 w-full flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              className="px-3 py-2 border border-gray-200 rounded"
            />
          </div>
          <div className="space-y-2 w-full flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              placeholder="Enter your password"
              className="px-3 py-2 border border-gray-200 rounded"
            />
          </div>
          <div className="w-full my-4">
            <Button className="rounded w-full py-6 text-lg">Signup</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
