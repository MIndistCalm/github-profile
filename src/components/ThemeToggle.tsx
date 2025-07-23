import { useEffect, useState } from 'react'
import { Switch } from '@/components/ui/switch'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false
  if (localStorage.getItem('theme') === 'dark') return true
  if (localStorage.getItem('theme') === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function ThemeToggle() {
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

  return (
    <div className="flex items-center gap-4 justify-end mb-8 bg-gray-900 transition-all w-fit rounded-xl dark:bg-gray-100">
      <span className="text-2xl text-stone-500 dark:text-stone-300">🌞</span>
      <Switch checked={dark} onCheckedChange={setDark} className="scale-150" />
      <span className="text-2xl text-stone-500 dark:text-stone-300">🌙</span>
    </div>
  )
}
