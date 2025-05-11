'use client';
import { InlineWidget } from 'react-calendly';

export default function BookingPage() {
  return (
    <div className="w-full h-[700px] rounded-lg overflow-hidden">
      <div className="w-full h-full md:-mt-16">
        <InlineWidget
          url="https://calendly.com/realtyease2025/30min?month=2025-05"
          styles={{
            width: '100%',
            height: '1000px', // hardcode a large height to reduce internal iframe scroll
            border: 'none',
          }}
        />
      </div>
    </div>
  );
}
