'use client';

import { useState } from 'react';

export default function ToggleMaintenancePage() {
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [secret, setSecret] = useState('');
  const [message, setMessage] = useState('');

  const fetchStatus = async () => {
    if (!secret) {
      setMessage('Secret is required to check status.');
      return;
    }
    setMessage('');
    setLoading(true);
    try {
      const res = await fetch(`/api/maintenance?secret=${secret}`);
      const data = await res.json();
      if (res.ok) {
        setEnabled(data.enabled);
        setMessage('Status fetched successfully.');
      } else {
        setMessage(data.error || 'Failed to fetch status.');
      }
    } catch {
      setMessage('An error occurred while fetching status.');
    }
    setLoading(false);
  };

  const toggle = async () => {
    if (!secret) {
      setMessage('Secret is required to toggle.');
      return;
    }
    setMessage('');
    setLoading(true);
    try {
      const res = await fetch('/api/maintenance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ secret, toggle: !enabled }),
      });
      const data = await res.json();
      if (res.ok) {
        setEnabled(data.enabled);
        setMessage(`Maintenance mode is now ${data.enabled ? 'ON' : 'OFF'}.`);
      } else {
        setMessage(data.error || 'Failed to toggle maintenance.');
      }
    } catch {
      setMessage('An error occurred while toggling.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-gray-100">
      <h1 className="text-3xl font-bold">Maintenance Mode Toggle</h1>

      <input
        type="password"
        placeholder="Enter Secret"
        className="border px-4 py-2 rounded w-full max-w-sm"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />

      <button
        onClick={fetchStatus}
        disabled={loading || !secret}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Checking...' : 'Check Status'}
      </button>

      {enabled !== null && (
        <div className="text-xl">
          Status:{' '}
          <span className={enabled ? 'text-red-600' : 'text-green-600'}>
            {enabled ? 'ON (Maintenance Mode)' : 'OFF (Live)'}
          </span>
        </div>
      )}

      {enabled !== null && (
        <button
          onClick={toggle}
          disabled={loading || !secret}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? 'Toggling...' : `Turn ${enabled ? 'OFF' : 'ON'}`}
        </button>
      )}

      {message && (
        <p className="mt-4 text-sm text-gray-700 text-center max-w-sm">{message}</p>
      )}
    </div>
  );
}
