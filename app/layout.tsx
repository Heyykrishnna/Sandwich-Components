import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../frontend/home/navbar";

export const metadata: Metadata = {
  title: "Sandwich",
  description: "A premium dark editorial component website for Sandwich.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-bg antialiased">
      <body className="min-h-full bg-bg text-text flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
