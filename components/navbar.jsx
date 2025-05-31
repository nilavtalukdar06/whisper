import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="px-5 md:px-10 py-3 w-full flex justify-between items-center border-b border-dashed">
      <div>
        <h1 className="font-mono text-2xl font-semibold text-slate-800">
          Whisper
        </h1>
      </div>
      <div>
        <Button>Login</Button>
      </div>
    </header>
  );
}
