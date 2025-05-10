'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import LoaderWrapper from '@/components/Loader';
import { TopNavbar } from '@/components/TopNavbar';
import Footer from '@/components/landingPage/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import MaintenancePage from '@/app/Maintenance/page';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');
  const [isMaintenance, setIsMaintenance] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    const checkMaintenanceStatus = async () => {
      try {
        const response = await fetch('/api/maintenance');
        const data = await response.json();
        setIsMaintenance(data.enabled);
      } catch (error) {
        console.error('Error fetching maintenance status:', error);
        setIsMaintenance(false); // Fallback to off if error
      }
    };

    checkMaintenanceStatus();
  }, []);

  if (isMaintenance === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-xl">Checking maintenance status...</p>
      </div>
    );
  }

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
