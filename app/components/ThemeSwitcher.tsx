'use client'

import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Нужен только для корректной гидрации (next-themes рекомендует mounted guard)
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  if (!mounted) {
    return (
      <pre>
        ¯\_(ツ)_/¯ Your data will show up here when you&apos;ve configured everything correctly
      </pre>
    )
  }

  return (
    <div className="flex items-center justify-center group">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="flex items-center justify-center p-2 rounded-full focus:outline-none bg-secondaryBackground w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] group-hover:bg-primaryAccentColor group-hover:text-secondaryBackground"
      >
        {theme === 'dark' ? (
          <FiSun
            size={32}
            style={{ transition: 'fill 1s' }}
            className="text-iconColor icon-transition group-hover:text-secondaryBackground"
          />
        ) : (
          <FiMoon
            size={32}
            style={{ transition: 'fill 1s' }}
            className="text-iconColor icon-transition group-hover:text-secondaryBackground"
          />
        )}
      </button>
    </div>
  )
}

export default ThemeSwitcher