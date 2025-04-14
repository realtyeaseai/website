// pages/contact.tsx
import React from 'react';

export default function ContactForm() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Submit error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <input type="text" name="name" placeholder="Name" required className="border p-2 rounded" />
      <input type="email" name="email" placeholder="Email" required className="border p-2 rounded" />
      <textarea name="message" placeholder="Message" required className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Send Message
      </button>
    </form>
  );
}
