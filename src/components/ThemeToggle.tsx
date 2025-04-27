'use client'

import { useTheme } from 'next-themes'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  console.log('resolvedTheme:', resolvedTheme); // <-- ADD THIS

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark')
    console.log('Theme changed to:', isDark ? 'light' : 'dark'); // <-- ADD THIS
  }


  return (
    <button
  onClick={handleToggle}
  aria-label="Toggle Theme"
  title="Toggle Theme" 
  className="cursor-pointer p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300 z-100"
>
  {isDark ? <HiSun size={24} className="text-yellow-400 hover:text-yellow-100" /> : <HiMoon size={24} className="text-blue-400 hover:bg-blue-100" />}
</button>

  )
}
