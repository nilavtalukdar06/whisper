"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function SendMessageComponent({ id }) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          <Button type="submit" disabled={isSubmitting}>
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
      </div>
    </div>
  );
}
