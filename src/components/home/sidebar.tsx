import styles from './sidebar.module.css'

interface sidebarProps {
    classes: string;
}

function sidebar(props : sidebarProps) {
    const { classes } = props;

  return (
    <aside className={classes}>
      <h2 className={styles.h2}>MARKDOWN</h2>
      <h3 className={styles.h3}>MY DOCUMENTS</h3>
      <button className={styles.button}>+ New Document</button>
    </aside>
  )
}

export default sidebar
