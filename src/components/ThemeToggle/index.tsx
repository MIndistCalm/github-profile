import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false
  if (localStorage.getItem('theme') === 'dark') return true
  if (localStorage.getItem('theme') === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const ThemeToggle = () => {
  const [dark, setDark] = useState(getInitialTheme)

  useEffect(() => {
    const root = window.document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  const handleToggle = () => {
    setDark(!dark)
  }

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <FaSun
          className={`absolute cursor-pointer left-0 top-0 w-8 h-8 transition-all duration-300 ${dark ? 'opacity-0 scale-75 rotate-45' : 'opacity-100 scale-100 rotate-0'} text-amber-400`}
          onClick={handleToggle}
        />
        <FaMoon
          className={`absolute cursor-pointer left-0 top-0 w-8 h-8 transition-all duration-300 ${dark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-45'} text-stone-600`}
          onClick={handleToggle}
        />
      </div>
    </div>
  )
}
