// app/theme-context.tsx
'use client'

import { createContext, useState, useEffect, useContext } from 'react'

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check the saved theme preference from localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.body.style.backgroundColor = '#2E2E2E'
    } else {
      document.body.style.backgroundColor = 'white'
    }
  }, [])

  useEffect(() => {
    // Update the theme and save the preference to localStorage
    document.body.style.backgroundColor = isDarkMode ? '#2E2E2E' : 'white'
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext)
