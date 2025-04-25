import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LoaderWrapper from "@/components/Loader";
import { TopNavbar } from "@/components/TopNabbar";
import Footer from "@/components/landingPage/Footer";
// import LoaderWrapper from "@/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealtyEase - Your Personal Real-Estate AI Helper",
  description:
    "Ask about Property value, Investment potential, or city insights - RealtyEase AI has your back. Available 24x7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:text-white transition-colors duration-300`}>
      <LoaderWrapper>
        <Toaster position="top-center" />
        <TopNavbar />
        {children}
        <Footer />
        </LoaderWrapper>
      </body>
      
    </html>
  );
}
