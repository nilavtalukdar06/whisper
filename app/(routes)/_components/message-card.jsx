import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

export default function MessageCard() {
  return (
    <section className="p-6 rounded-md border">
      <div className="flex justify-between itmes-start gap-x-4">
        <div className="flex flex-col gap-y-2 justify-center items-start">
          <h3 className="text-2xl">Hey, How are you?</h3>
          <p className="text-sm text-gray-600">May 31, 2025 8:10 P.M</p>
        </div>
        <Button variant="destructive">
          <XIcon />
        </Button>
      </div>
    </section>
  );
}
