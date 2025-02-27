"use client"

import { useState, useEffect } from "react"
import ThemeInfo from "../components/ThemeInfo"
import styles from "../styles/SettingsPage.module.css"

const SettingsPage = () => {
  // Client-side state initialization
  const [filter, setFilter] = useState("all")
  const [mounted, setMounted] = useState(false)

  // Use useEffect to mark when component is mounted client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Expanded theme collection
  const themes = [
    {
      name: "GitHub Dark",
      icon: "/github-dark.png",
      publisher: "GitHub",
      theme: "github-dark",
      description: "GitHub theme for VS Code with syntax highlighting that matches github.com",
      category: "dark",
    },
    {
      name: "Dracula",
      icon: "/dracula.png",
      publisher: "Dracula Theme",
      theme: "dracula",
      description: "Official Dracula Theme. A dark theme for many editors, shells, and more.",
      category: "dark",
    },
    {
      name: "Ayu Dark",
      icon: "/ayu.png",
      publisher: "teabyii",
      theme: "ayu-dark",
      description: "A simple theme with bright colors and a dark background.",
      category: "dark",
    },
    {
      name: "Ayu Mirage",
      icon: "/ayu.png",
      publisher: "teabyii",
      theme: "ayu-mirage",
      description: "A simple theme with bright colors and a medium-dark background.",
      category: "dark",
    },
    {
      name: "Nord",
      icon: "/nord.png",
      publisher: "arcticicestudio",
      theme: "nord",
      description: "An arctic, north-bluish clean and elegant Visual Studio Code theme.",
      category: "dark",
    },
    {
      name: "Night Owl",
      icon: "/night-owl.png",
      publisher: "sarah.drasner",
      theme: "night-owl",
      description: "A VS Code theme for the night owls out there.",
      category: "dark",
    },
    // Uncommented the additional themes
    {
      name: "Monokai Pro",
      icon: "/monokai.png",
      publisher: "monokai",
      theme: "monokai-pro",
      description: "Professional theme with beautiful colors and fluid design.",
      category: "dark",
    },
    {
      name: "Synthwave '84",
      icon: "/synthwave.png",
      publisher: "RobbOwen",
      theme: "synthwave-84",
      description: "A neon-soaked theme to bring the 80s into your editor.",
      category: "dark",
    },
    {
      name: "GitHub Light",
      icon: "/github-light.png",
      publisher: "GitHub",
      theme: "github-light",
      description: "Light GitHub theme for VS Code",
      category: "light",
    },
    {
      name: "Solarized Light",
      icon: "/solarized.png",
      publisher: "Ethan Schoonover",
      theme: "solarized-light",
      description: "A carefully designed color scheme with high readability.",
      category: "light",
    },
    {
      name: "Winter is Coming",
      icon: "/winter.png",
      publisher: "John Papa",
      theme: "winter-is-coming",
      description: "A dark blue theme with a touch of red.",
      category: "dark",
    },
    {
      name: "Material Theme",
      icon: "/material.png",
      publisher: "Mattia Astorino",
      theme: "material-theme",
      description: "Material Theme, the most epic theme for Visual Studio Code.",
      category: "dark",
    },
  ]

  // Filter themes based on selected category
  const filteredThemes = filter === "all" ? themes : themes.filter((theme) => theme.category === filter)

  // Only render client-specific content after mounting
  if (!mounted) {
    return (
      <div className={styles.settingsContainer}>
        <div className={styles.headerSection}>
          <h2 className={styles.settingsTitle}>Manage Themes</h2>
        </div>
        <div className={styles.themeContainer}>
          {themes.map((theme, index) => (
            <ThemeInfo
              key={`${theme.theme}-${index}`}
              name={theme.name}
              icon={theme.icon}
              publisher={theme.publisher}
              theme={theme.theme}
              description={theme.description}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.settingsTitle}>Manage Themes</h2>

        <div className={styles.filterControls}>
          <button
            className={`${styles.filterButton} ${filter === "all" ? styles.activeFilter : ""}`}
            onClick={() => setFilter("all")}
          >
            All Themes
          </button>
          <button
            className={`${styles.filterButton} ${filter === "dark" ? styles.activeFilter : ""}`}
            onClick={() => setFilter("dark")}
          >
            Dark Themes
          </button>
          <button
            className={`${styles.filterButton} ${filter === "light" ? styles.activeFilter : ""}`}
            onClick={() => setFilter("light")}
          >
            Light Themes
          </button>
        </div>
      </div>

      <div className={styles.themeContainer}>
        {filteredThemes.map((theme, index) => (
          <ThemeInfo
            key={`${theme.theme}-${index}`}
            name={theme.name}
            icon={theme.icon}
            publisher={theme.publisher}
            theme={theme.theme}
            description={theme.description}
          />
        ))}
      </div>

      {/* Toast notification for theme changes */}
      <div id="theme-toast" className={styles.toast}>
        Theme changed
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { title: "Settings" },
  }
}

export default SettingsPage

