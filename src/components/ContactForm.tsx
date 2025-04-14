'use client';
import { useState, useEffect, FormEvent, useRef } from 'react';
import { ApiResponse } from '@/types/contact';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const mounted = useRef(true); // Use useRef to persist the value

  useEffect(() => {
    mounted.current = true; // Set to true when the component mounts
    return () => {
      mounted.current = false; // Set to false when the component unmounts
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const form = e.currentTarget; // Store a reference to the form element
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result: ApiResponse = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      if (mounted.current) {
        setStatus('success');
        form.reset(); // Use the stored reference
      }
    } catch (error) {
      console.error('Submission error:', error);
      if (mounted.current) setStatus('error');
    } finally {
      if (mounted.current) setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
          aria-describedby="name-helper"
        />
        <p id="name-helper" className="mt-1 text-sm text-gray-500">
          Please enter your full name
        </p>
      </div>
  
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
          aria-describedby="email-helper"
        />
        <p id="email-helper" className="mt-1 text-sm text-gray-500">
          We&#39;ll never share your email
        </p>
      </div>
  
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          minLength={10}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
          aria-describedby="message-helper"
        ></textarea>
        <p id="message-helper" className="mt-1 text-sm text-gray-500">
          Please write your message (minimum 10 characters)
        </p>
      </div>
  
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center">Error sending message. Please try again.</p>
      )}
    </form>
  );
      
}