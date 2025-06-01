"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return;
      }
      await authClient.signUp.email(
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          callbackURL: "/dashboard",
        },
        {
          onRequest: (ctx) => {
            setIsLoading(true);
          },
          onSuccess: (ctx) => {
            setIsLoading(false);
            setFormData({ ...formData, name: "", email: "", password: "" });
            router.push("/dashboard");
          },
          onError: (ctx) => {
            setIsLoading(false);
            setFormData({ ...formData, name: "", email: "", password: "" });
            toast.error("Some error occured");
          },
        }
      );
    } catch (error) {
      console.error(error);
      toast.error("Some error occured");
    }
  };

  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden">
      <div className="max-w-sm md:max-w-md mx-auto my-16 p-6">
        <TextAnimate className="text-3xl md:text-4xl font-normal text-center">
          Signup to Whisper
        </TextAnimate>
        <form
          className="my-12 flex flex-col gap-y-6 justify-center items-center w-full"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2 w-full flex flex-col">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              placeholder="Enter your name"
              className={`px-3 py-2 border border-gray-200 rounded ${
                isLoading && "opacity-75"
              }`}
              disabled={isLoading}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required={true}
            />
          </div>
          <div className="space-y-2 w-full flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Enter your email"
              className={`px-3 py-2 border border-gray-200 rounded ${
                isLoading && "opacity-75"
              }`}
              disabled={isLoading}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required={true}
            />
          </div>
          <div className="space-y-2 w-full flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              value={formData.password}
              type="password"
              placeholder="Enter your password"
              className={`px-3 py-2 border border-gray-200 rounded ${
                isLoading && "opacity-75"
              }`}
              disabled={isLoading}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required={true}
            />
          </div>
          <div className="w-full my-4">
            <Button
              className="rounded w-full py-6 text-lg"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex gap-x-2 justify-center items-center">
                  <Spinner />
                  <p>Signing up...</p>
                </div>
              ) : (
                "Signup"
              )}
            </Button>
          </div>
          <div>
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500">
                login now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
