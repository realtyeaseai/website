import { InlineWidget } from 'react-calendly';

export default function BookingPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Book a Call with Us</h1>
      <InlineWidget url="https://calendly.com/vishwamshah007" />
    </div>
  );
}
