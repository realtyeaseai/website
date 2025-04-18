// components/LoaderWrapper.tsx
"use client";
import { useState, useEffect } from "react";
import "../app/globals.css";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
        <p className="text-3xl italic font-light font-serif tracking-wide typewriter-effect">
          RealtyEase
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
