'use client'

import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevent hydration mismatch

  const isDark = resolvedTheme === 'dark'

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle Theme"
      className="w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300
        bg-gray-300 dark:bg-gray-700"
    >
      <div
        className={`text-yellow-900 dark:text-white w-6 h-6 flex items-center justify-center transform transition-transform duration-300 ease-in-out
          ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
      >
        {isDark ? <FiMoon size={18} /> : <FiSun size={18} />}
      </div>
    </button>
  )
}
