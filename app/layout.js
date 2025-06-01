import "./globals.css";

export const metadata = {
  title: "Whisper",
  description: "Unfiltered Thoughts. Zero Judgment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
