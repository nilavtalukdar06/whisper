import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Contact() {
  return (
    <section className="min-h-screen max-w-screen relative overflow-x-hidden bg-gray-50/20">
      <div className="max-w-sm sm:max-w-md mx-auto my-24">
        <TextAnimate className="text-3xl sm:text-4xl font-medium text-center">
          Contact Us
        </TextAnimate>
        <form
          className="my-10 w-full p-6 flex flex-col gap-y-6"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value={process.env.CONTACT_FORM_ACCESS_KEY}
          />
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="rounded shadow-none placeholder:text-sm"
              required={true}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="rounded shadow-none placeholder:text-sm"
              required={true}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="rounded shadow-none placeholder:text-sm"
              required={true}
            />
          </div>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />
          <Button type="submit" className="w-full rounded my-4 py-6 text-lg">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
}
