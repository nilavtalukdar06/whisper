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
import { RefreshCcw } from "lucide-react";
import MessageCard from "../_components/message-card";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();
  const [url, setUrl] = useState("");
  const [toggle, setToggle] = useState(true);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const updateSettings = async (checked) => {
    try {
      if (!session?.user?.id) {
        toast.error("User session not found");
        return;
      }
      const response = await axios.put("/api/update-settings", {
        user_id: session.user.id,
        accept_messages: checked,
      });
      if (response.data) {
        setToggle(checked);
        toast.success("Settings updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to update settings");
      setToggle(!checked); // Revert the toggle state on error
    }
  };

  const getMessages = async (user_id) => {
    if (!user_id) {
      toast.error("User ID is required");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(`/api/get-messages?user_id=${user_id}`);
      if (response.data && Array.isArray(response.data.message)) {
        setMessages(response.data.message);
      } else {
        setMessages([]);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to get messages");
      setMessages([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (checked) => {
    updateSettings(checked);
  };

  useEffect(() => {
    session?.user?.id &&
      setUrl(`https://whisper-xuwf.vercel.app/message/${session?.user?.id}`);
    session?.user?.id && createSettings(session?.user?.id);
    session?.user?.id && getMessages(session?.user?.id);
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
            <div className="flex gap-2 justify-center items-center my-2 flex-wrap">
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
            <div>
              <Button
                variant="outline"
                onClick={() => getMessages(session?.user?.id)}
              >
                <RefreshCcw />
              </Button>
            </div>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <FadeLoader />
            ) : !messages.length ? (
              <p className="text-sm text-gray-600 text-center sm:text-start">
                No messages are present at this moment
              </p>
            ) : (
              messages.map((item) => (
                <MessageCard
                  key={item._id}
                  content={item.content}
                  time={item.createdAt}
                  message_id={item._id}
                  messages={messages}
                  setMessages={setMessages}
                />
              ))
            )}
          </section>
        </div>
      )}
    </section>
  );
}
