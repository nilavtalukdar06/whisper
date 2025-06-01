"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { authClient } from "@/utils/auth-client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FadeLoader } from "react-spinners";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Switch } from "@/components/ui/switch";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();
  const [url, setUrl] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Copied!");
    } catch (err) {
      toast.error("Failed to copy");
      console.error("Failed to copy text: ", err);
    }
  };

  const createSettings = async (user_id) => {
    try {
      const result = await axios.post("/api/create-settings", {
        user_id: user_id,
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create settings");
    }
  };

  const updateSettings = async () => {
    try {
      const response = await axios.put("/api/update-settings", {
        user_id: session?.user?.id,
        accept_messages: toggle,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update settings");
    }
  };

  const handleChange = (checked) => {
    updateSettings();
    setToggle(checked);
  };

  useEffect(() => {
    session?.user?.id &&
      setUrl(`http://localhost:3000/message/${session?.user?.id}`);
    session?.user?.id && createSettings(session?.user?.id);
  }, [session]);

  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden relative">
      <Navbar />
      {isPending ? (
        <div className="w-full my-24 flex justify-center items-center">
          <FadeLoader />
        </div>
      ) : (
        <div className="px-5 md:px-24 py-8 w-full">
          <h1 className="text-2xl md:text-3xl font-medium text-center sm:text-start">
            Hello {session?.user?.name || "Guest"}
          </h1>
          <div className="w-full flex flex-col gap-y-2 justify-center items-center sm:items-start my-5">
            <TextAnimate className="text-lg sm:text-xl text-center">
              Copy your unique link
            </TextAnimate>
            <div className="flex gap-x-2 justify-center items-center my-2 flex-wrap">
              <p className="px-5 py-2 bg-gray-100 rounded hidden sm:flex">
                {url}
              </p>
              <Button className="h-full" onClick={handleCopy}>
                Copy
              </Button>
            </div>
            <div className="my-4 flex justify-center items-center gap-x-2">
              <Switch checked={toggle} onCheckedChange={handleChange} />
              <p>Accept messages : {toggle ? "on" : "off"}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
