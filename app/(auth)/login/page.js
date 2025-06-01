"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Spinner from "@/components/spinner";
import Link from "next/link";
import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await authClient.signIn.email(
        {
          email: formData.email,
          password: formData.password,
          callbackURL: "/dashboard",
          rememberMe: true,
        },
        {
          onRequest: (ctx) => {
            setIsLoading(true);
          },
          onSuccess: (ctx) => {
            setIsLoading(false);
            setFormData({ ...formData, email: "", password: "" });
            router.push("/dashboard");
          },
          onError: (ctx) => {
            setIsLoading(false);
            setFormData({ ...formData, email: "", password: "" });
            toast.error("Invalid credentials");
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
      <div className="max-w-sm md:max-w-md mx-auto my-24 p-6">
        <TextAnimate className="text-3xl md:text-4xl font-normal text-center">
          Login to Whisper
        </TextAnimate>
        <form
          className="my-12 flex flex-col gap-y-6 justify-center items-center w-full"
          onSubmit={handleSubmit}
        >
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
              type="password"
              value={formData.password}
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
                  <p>Logging in...</p>
                </div>
              ) : (
                "Login"
              )}
            </Button>
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
