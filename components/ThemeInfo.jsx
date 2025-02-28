import Image from "next/image"
import styles from "../styles/ThemeInfo.module.css"
import { useTheme } from "../context/ThemeContext"

const ThemeInfo = ({ icon, name, publisher, theme, description }) => {
  const { currentTheme, changeTheme } = useTheme()

  // Check if this theme is the active one
  const isActive = currentTheme === theme

  const handleSetTheme = () => {
    // Only change theme if it's not already active
    if (!isActive) {
      changeTheme(theme, name)
    }
  }

  return (
    <div className={`${styles.container} ${isActive ? styles.activeTheme : ""}`}>
      <div className={styles.iconWrapper}>
        <Image
          src={icon || "/placeholder.svg"}
          alt={`${name} theme icon`}
          height={80}
          width={80}
          className={styles.themeIcon}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.themeHeader}>
          <h3 className={styles.themeName}>{name}</h3>
          <h5 className={styles.themePublisher}>{publisher}</h5>
        </div>
        <p className={styles.themeDescription}>{description}</p>
        <button
          onClick={handleSetTheme}
          className={`${styles.themeButton} ${isActive ? styles.activeButton : ""}`}
          disabled={isActive}
        >
          {isActive ? "Current Theme" : "Set Color Theme"}
        </button>
      </div>
    </div>
  )
}

export default ThemeInfo

