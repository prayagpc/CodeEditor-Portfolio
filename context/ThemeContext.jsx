"use client"

import { createContext, useState, useEffect, useContext } from "react"

// Create a context for theme management
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(null)

  useEffect(() => {
    // Initialize theme from localStorage or set default
    const savedTheme = localStorage.getItem("theme") || "github-dark"
    setCurrentTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  const changeTheme = (newTheme, themeName) => {
    // Update theme in localStorage and DOM
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    setCurrentTheme(newTheme)

    // Show toast notification
    const toast = document.getElementById("theme-toast")
    if (toast) {
      toast.textContent = `Theme changed to ${themeName}`
      toast.classList.add("show-toast")

      setTimeout(() => {
        toast.classList.remove("show-toast")
      }, 2000)
    }
  }

  return <ThemeContext.Provider value={{ currentTheme, changeTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export function useTheme() {
  return useContext(ThemeContext)
}

