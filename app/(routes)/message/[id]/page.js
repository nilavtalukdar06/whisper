import { TextAnimate } from "@/components/magicui/text-animate";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default async function SendMessage({ params }) {
  const { id } = await params;
  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto my-6 p-6">
        <TextAnimate className="text-center text-3xl md:text-4xl font-semibold">
          Public profile link
        </TextAnimate>
        <div className="max-w-5xl mx-auto my-10">
          <Label htmlFor="message" className="mb-2 text-lg">
            Send anonymous message {id}
          </Label>
          <Textarea
            id="message"
            className="rounded shadow-none"
            placeholder="Enter your anonymous message here"
          />
        </div>
      </div>
    </section>
  );
}
