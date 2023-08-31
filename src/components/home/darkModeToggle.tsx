import styles from './darkModeToggle.module.css'

import MoonIcon from '../../assets/icon-dark-mode.svg'
import SunIcon from '../../assets/icon-light-mode.svg'

interface darkModeToggleProps {
    darkMode: boolean;
    toggleDarkMode: Function;
}

function darkModeToggle(props: darkModeToggleProps) {
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

export default darkModeToggle
