// src/app/layoutClient.tsx
// 'use client'

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import LoaderWrapper from "@/components/Loader";
import { TopNavbar } from "@/components/TopNavbar";
import Footer from "@/components/landingPage/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LoaderWrapper>
        <Toaster position="top-center" />
        <TopNavbar />
        {children}
        <ScrollToTop />
        <Footer />
      </LoaderWrapper>
    </ThemeProvider>
  )
}
