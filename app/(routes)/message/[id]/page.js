export default async function SendMessage({ params }) {
  const { id } = await params;
  return (
    <section className="min-h-screen max-w-screen overflow-x-hidden relative">
      <h1>{id}</h1>
    </section>
  );
}
