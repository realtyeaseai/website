'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import LoaderWrapper from "@/components/Loader";
import { TopNavbar } from "@/components/TopNavbar";
import Footer from "@/components/landingPage/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MaintenancePage from "@/app/Maintenance/page";  // Import the MaintenancePage component

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');
  const [isMaintenance, setIsMaintenance] = useState(false);

  // Fetch maintenance status when the component mounts
  useEffect(() => {
    const checkMaintenanceStatus = async () => {
      try {
        const response = await fetch('/api/maintenance?secret=supersecret');  // Fetch maintenance status
        const data = await response.json();
        setIsMaintenance(data.enabled);
      } catch (error) {
        console.error('Error fetching maintenance status:', error);
      }
    };

    checkMaintenanceStatus();
  }, []);  // Run once on component mount

  // If in maintenance mode, render the maintenance page, unless it's an admin page
  if (isMaintenance && !isAdminPage) {
    return <MaintenancePage />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LoaderWrapper>
        <Toaster position="top-center" />
        {!isAdminPage && <TopNavbar />}
        {children}
        <ScrollToTop />
        {!isAdminPage && <Footer />}
      </LoaderWrapper>
    </ThemeProvider>
  );
}
