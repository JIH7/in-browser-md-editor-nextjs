import styles from './sidebar.module.css'
import DarkModeToggle from './darkModeToggle'

interface sidebarProps {
    classes: string;
    darkMode: boolean;
    toggleDarkMode: Function;
}

function sidebar(props : sidebarProps) {
    const { classes, darkMode, toggleDarkMode } = props;

  return (
    <aside className={`${classes}`}>
      <h2 className={styles.h2}>MARKDOWN</h2>
      <h3 className={styles.h3}>MY DOCUMENTS</h3>
      <button className={styles.button}>+ New Document</button>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </aside>
  )
}

export default sidebar
