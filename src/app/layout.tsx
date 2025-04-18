import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global metadata that will apply to the entire app
export const metadata: Metadata = {
  title: "RealtyEase - Your Personal Real-Estate AI Helper", // Default title
  description:
    "Ask about Property value, Investment potential, or city insights - RealtyEase AI has your backs. Available 24 X 7",
  // Add more metadata if needed, like Open Graph or Twitter card meta tags
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
