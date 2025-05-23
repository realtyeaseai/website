// components/LoaderWrapper.tsx
"use client";
import { useState, useEffect } from "react";
import "../app/globals.css";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white space-y-4">
  <p className="text-3xl font-light font-sans">
    RealtyEaseAI
  </p>
  <p className="text-lg text-cyan-200 font-semibold tracking-wide typewriter-effect italic">
    Welcome to the Network
  </p>
</div>

    );
  }

  return <>{children}</>;
}
