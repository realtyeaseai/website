'use client'

import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  if (!resolvedTheme) return null; // avoid hydration mismatch on SSR

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300
        bg-red-100 dark:bg-gray-700"
      aria-label="Toggle Theme"
    >
      <div
        className={`text-yellow-500 dark:text-white w-6 h-6 flex items-center justify-center transform duration-300
          ${resolvedTheme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
      >
        {resolvedTheme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
      </div>
    </button>
  )
}
