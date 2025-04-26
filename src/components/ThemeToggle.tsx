'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // On first render, check for theme in localStorage or default to system preference
    const savedTheme = localStorage.getItem('theme') || 'light'
    const isDarkMode = savedTheme === 'dark' || 
      (savedTheme === 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    setIsDark(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // Toggle between dark and light theme
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark', !isDark)
    localStorage.setItem('theme', newTheme)
  }

  if (!mounted) return null // Prevent SSR mismatch

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 
        ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out 
          ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
      />
    </button>
  )
}
