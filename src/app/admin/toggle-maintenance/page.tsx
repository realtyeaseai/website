'use client';

import { useState } from 'react';

export default function ToggleMaintenancePage() {
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [secret, setSecret] = useState('');

  const fetchStatus = async () => {
    const res = await fetch(`/api/maintenance?secret=${secret}`);
    const data = await res.json();
    setEnabled(data.enabled);
  };

  const toggle = async () => {
    setLoading(true);
    const res = await fetch('/api/maintenance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ secret, toggle: !enabled }),
    });
    const data = await res.json();
    setEnabled(data.enabled);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-gray-100">
      <h1 className="text-3xl font-bold">Maintenance Mode Toggle</h1>
      <input
        type="password"
        placeholder="Enter Secret"
        className="border px-4 py-2 rounded"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />
      <button
        onClick={fetchStatus}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Check Status
      </button>
      {enabled !== null && (
        <div className="text-xl">
          Status:{" "}
          <span className={enabled ? 'text-red-600' : 'text-green-600'}>
            {enabled ? 'ON' : 'OFF'}
          </span>
        </div>
      )}
      {enabled !== null && (
        <button
          onClick={toggle}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          {loading ? 'Toggling...' : `Turn ${enabled ? 'OFF' : 'ON'}`}
        </button>
      )}
    </div>
  );
}
