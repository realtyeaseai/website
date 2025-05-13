'use client';
import React from 'react';
// import { InlineWidget } from 'react-calendly';

export default function BookingPage() {
  const [loading, setLoading] = React.useState(true); // Set initial state to true for loading

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border border-neutral-200 relative">
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black z-10">
          <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {/* Calendly Widget */}
      <div className="w-full h-full md:-mt-16">
        <div className="w-full h-full">
          <iframe
            src="https://calendly.com/realtyease2025/30min?month=2025-05"
            style={{
              width: '100%',
              height: '1000px', // Hardcode a large height to reduce internal iframe scroll
              border: 'none',
            }}
            onLoad={() => setLoading(false)} // Hide loader when Calendly is loaded
          />
        </div>
      </div>
    </div>
  );
}
