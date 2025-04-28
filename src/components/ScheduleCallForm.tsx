// app/components/ScheduleCallForm.tsx
"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function ScheduleCallForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
    timezone: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.phone || !form.date || !form.time || !form.message) {
      toast.error('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/schedule-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = res.headers.get('Content-Type');
      if (!res.ok || !contentType?.includes('application/json')) {
        console.error(await res.text());
        toast.error('Something went wrong.');
        return;
      }

      toast.success('Call Scheduled Successfully!');
      setForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
        timezone: '',
      });
    } catch (err) {
      console.error(err);
      toast.error('Error submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[radial-gradient(circle_at_top_right,_#8e2de2,_#4a00e0aa,_#2c006aaa,_#000)]

 border border-[#ffffff50] min-h-[750px] w-full md:w-auto rounded-lg flex items-center justify-center flex-col p-6 text-white font-bold">
    <h1 className='text-whitet mb-10 text-center w-[70%] md:w-[90%] text-3xl'>Schedule a Call With Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full p-3 border rounded-md" />
        <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="w-full p-3 border rounded-md" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required className="w-full p-3 border rounded-md" />
          <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required className="w-full p-3 border rounded-md" />
        </div>

        <input type="text" placeholder="Timezone (optional)" value={form.timezone} onChange={(e) => setForm({ ...form, timezone: e.target.value })} className="w-full p-3 border rounded-md" />
        <textarea placeholder="What would you like to discuss?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="w-full min-h-[120px] p-3 border rounded-md" />

        <button type="submit" disabled={loading} className="w-full p-3 rounded-md bg-[#0073ffb2] hover:bg-[#0073ff80] text-white font-semibold cursor-pointer transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? 'Scheduling...' : 'Schedule Call'}
        </button>
      </form>
    </div>
  );
}
