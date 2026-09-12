import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bauhinia Resort & Spa — Phu Quoc, 2027",
  description: "A warm, future-facing resort experience in the heart of Phu Quoc.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}