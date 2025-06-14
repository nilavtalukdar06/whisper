"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { XIcon } from "lucide-react";
import { toast } from "react-hot-toast";

export default function MessageCard({
  content,
  time,
  message_id,
  messages,
  setMessages,
}) {
  const deleteMessage = async () => {
    try {
      await axios.delete("/api/delete-message", {
        data: { message_id: message_id },
      });
      setMessages(messages.filter((message) => message._id != message_id));
      toast.success("Message deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete message");
    }
  };

  const date = new Date(time);
  return (
    <section className="p-6 rounded-none border border-gray-400">
      <div className="flex justify-between itmes-start gap-x-4">
        <div className="flex flex-col gap-y-2 justify-center items-start">
          <h3 className="text-2xl">{content}</h3>
          <p className="text-sm text-gray-600">{date.toString()}</p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="rounded-none">
              <XIcon />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete this message
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="rounded-none border-gray-400">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 hover:bg-red-600 rounded-none"
                onClick={deleteMessage}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}
