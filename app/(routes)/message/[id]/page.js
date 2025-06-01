import SendMessageComponent from "../../_components/send-message";

export default async function SendMessage({ params }) {
  const { id } = await params;
  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden relative">
      <SendMessageComponent id={id} />
    </section>
  );
}
