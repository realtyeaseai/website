import { InlineWidget } from 'react-calendly';

export default function BookingPage() {
  return (
    <div className="w-full min-h-[650px] rounded-lg text-white font-bold overflow-hidden">
      <InlineWidget
        url="https://calendly.com/realtyease2025/30min"
        styles={{
          height: '100%',
          minHeight: '100%',
          width: '100%',
          overflow: 'hidden', // hides internal scrolling
        }}
      />
    </div>
  );
}
