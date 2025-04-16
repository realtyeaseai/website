"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    reason: '',
  });

  const [loading, setLoading] = useState(false);

  const reasons = ['Agent', 'Property owners', 'Specialized Services', 'Others'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.message || !form.reason) {
      toast.error('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = res.headers.get('Content-Type');
      if (!res.ok || !contentType?.includes('application/json')) {
        console.error('❌ Unexpected response:', await res.text());
        toast.error('Something went wrong. Please try again.');
        return;
      }

      const data = await res.json();
      console.log('✅ Response:', data);

      toast.success('Message sent successfully!', {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#22c55e', // Tailwind green-500
          color: '#fff',
          fontWeight: '600',
        },
      });
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        reason: '',
      });
    } catch (err: unknown) {
      console.error('❌ Error:', err);
      toast.error('Failed to send. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-bl from-violet-500 via-purple-800 to-indigo-900 border border-[#ffffff50] min-h-[750px] w-full md:w-auto rounded-lg flex items-center justify-center flex-col p-6 text-white font-bold">
      <form onSubmit={handleSubmit} className="max-w-2xl w-full space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="input p-3 border rounded-2xl"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input p-3 border rounded-2xl"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            placeholder="Ex. john.doe@gmail.com"
            className="input p-3 border rounded-2xl"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="input w-full p-3 border rounded-2xl"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="text-sm text-white mb-2 block">Why are you contacting us?</label>
          <div className="flex gap-4 flex-wrap">
            {reasons.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={form.reason === item}
                className={`border px-4 py-2 rounded-md text-white ${
                  form.reason === item ? 'border-white bg-neutral-700' : 'border-neutral-700'
                }`}
                onClick={() => setForm({ ...form, reason: item })}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Type your message here.."
          className="input h-32 w-full border rounded-2xl p-2"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-neutral-900 px-6 py-3 rounded-md font-medium disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
