// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from "./LayoutClient"; // 👈 new client-side wrapper

export const metadata: Metadata = {
  title: "RealtyEase - Your Personal Real-Estate AI Helper",
  description: "Ask about Property value, Investment potential, or city insights - RealtyEase AI has your back. Available 24x7.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:text-white transition-colors duration-300`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
