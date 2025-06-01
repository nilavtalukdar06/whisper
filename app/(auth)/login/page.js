"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden">
      <div className="max-w-sm md:max-w-md mx-auto my-24 p-6">
        <TextAnimate className="text-3xl md:text-4xl font-normal text-center">
          Login to Whisper
        </TextAnimate>
        <form className="my-12 flex flex-col gap-y-6 justify-center items-center w-full">
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
            <Button className="rounded w-full py-6 text-lg">Login</Button>
          </div>
          <div>
            <p className="text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-500">
                sign up now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
