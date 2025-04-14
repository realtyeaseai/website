// src/app/admin/login/page.tsx
"use client"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('admin-auth') === 'true') {
      router.push('/admin/dashboard')
    }
  }, [router])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'godmode') {
      localStorage.setItem('admin-auth', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <form onSubmit={handleLogin} className="bg-neutral-900 p-8 rounded-lg w-full max-w-sm shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter admin password"
          className="w-full p-2 mb-4 bg-neutral-800 rounded border border-neutral-700 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  )
}
