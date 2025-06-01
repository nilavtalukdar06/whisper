"use client";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "./spinner";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    try {
      const { error } = await authClient.signOut({
        fetchOptions: {
          onRequest: (ctx) => {
            setIsLoading(true);
          },
          onSuccess: (ctx) => {
            setIsLoading(false);
            router.push("/");
          },
        },
      });
      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to logout");
    }
  };

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <header className="px-5 md:px-24 py-8 w-full flex justify-between items-center">
      <div>
        <h1 className="font-mono text-2xl font-semibold text-slate-800">
          Whisper
        </h1>
      </div>
      <div>
        {isPending ? (
          <p className="text-xl font-medium">Loading...</p>
        ) : session ? (
          <Button disabled={isLoading} onClick={logout}>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Spinner />
                <p>Logging out...</p>
              </div>
            ) : (
              "Logout"
            )}
          </Button>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
