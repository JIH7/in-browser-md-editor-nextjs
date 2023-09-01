import styles from './darkModeToggle.module.css'

import MoonIcon from '../../assets/icon-dark-mode.svg'
import SunIcon from '../../assets/icon-light-mode.svg'

interface DarkModeToggleProps {
    darkMode: boolean;
    toggleDarkMode: Function;
}

function DarkModeToggle(props: DarkModeToggleProps) {
    const { darkMode, toggleDarkMode } = props;

  return (
    <div className={styles.component}>
      <MoonIcon />
      <button className={styles.button} onClick={() => toggleDarkMode()}>
        <div className={`${styles.knob} ${darkMode ? styles.active : ''}`}></div>
      </button>
      <SunIcon />
    </div>
  )
}

export default DarkModeToggle
