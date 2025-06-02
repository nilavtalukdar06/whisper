"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SendMessageComponent({ id }) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestedMessages, setSuggestedMessages] = useState({
    message_1: "What's your favourite movie?",
    message_2: "Do you have any pets?",
    message_3: "What's your dream job?",
  });

  const handleSubmit = async () => {
    try {
      if (!message.trim()) {
        toast.error("Enter a message first!");
        return;
      }
      if (message.length > 1000) {
        toast.error("Message is too long. Maximum 1000 characters allowed.");
        return;
      }
      setIsSubmitting(true);
      const result = await axios.post(`/api/send-message`, {
        message: message.trim(),
        user_id: id,
      });
      if (result.data.can_send_message === "no") {
        toast.error("User is no longer accepting responses");
        setMessage("");
        return;
      }
      toast.success("Message has been sent");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateContent = async () => {
    try {
      setIsGenerating(true);
      const response = await axios.get("/api/generate-content");
      const results = response.data.message.split("|");
      setSuggestedMessages({
        ...suggestedMessages,
        message_1: results[0],
        message_2: results[1],
        message_3: results[2],
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate content");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-6 p-6">
      <TextAnimate className="text-center text-3xl md:text-4xl font-semibold">
        Public profile link
      </TextAnimate>
      <div className="max-w-5xl mx-auto my-10">
        <Label htmlFor="message" className="mb-2 text-lg">
          Send anonymous message
        </Label>
        <Textarea
          id="message"
          className="rounded shadow-none"
          placeholder="Enter your anonymous message here"
          value={message}
          disabled={isSubmitting}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="my-5 w-full flex justify-center items-center">
          <Button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            {isSubmitting ? (
              <div className="flex justify-center items-center gap-x-2">
                <Spinner />
                <p>Sending...</p>
              </div>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
        <div className="my-10 flex flex-col justify-center items-center sm:items-start gap-y-6">
          <Button disabled={isGenerating} onClick={generateContent}>
            {isGenerating ? (
              <div className="flex justify-center items-center gap-x-2">
                <Spinner />
                <p>Generating with AI...</p>
              </div>
            ) : (
              "Suggest Messages"
            )}
          </Button>
          <div className="my-5 w-full flex flex-col justify-center items-center sm:items-start gap-y-6">
            <p className="text-slate-700 text-center sm:text-start">
              Click on any message below to select it
            </p>
            <div className="p-5 border rounded w-full">
              <h2 className="text-2xl">Messages</h2>
              <div className="flex flex-col gap-y-4 my-4">
                <button
                  className="px-2 py-2 border rounded text-center cursor-pointer hover:bg-gray-100/80 transition-colors ease-in-out duration-200"
                  disabled={isGenerating}
                  onClick={() => setMessage(suggestedMessages.message_1)}
                >
                  {isGenerating
                    ? "Generating with AI..."
                    : `${suggestedMessages.message_1}`}
                </button>
                <button
                  className="px-2 py-2 border rounded text-center cursor-pointer hover:bg-gray-100/80 transition-colors ease-in-out duration-200"
                  disabled={isGenerating}
                  onClick={() => setMessage(suggestedMessages.message_2)}
                >
                  {isGenerating
                    ? "Generating with AI..."
                    : `${suggestedMessages.message_2}`}
                </button>
                <button
                  className="px-2 py-2 border rounded text-center cursor-pointer hover:bg-gray-100/80 transition-colors ease-in-out duration-200"
                  disabled={isGenerating}
                  onClick={() => setMessage(suggestedMessages.message_3)}
                >
                  {isGenerating
                    ? "Generating with AI..."
                    : `${suggestedMessages.message_3}`}
                </button>
              </div>
            </div>
          </div>
          <div className="my-5 flex flex-col w-full gap-y-4 justify-center items-center">
            <p>Get your message board</p>
            <Link href="/signup">
              <Button>Create Your Account</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
