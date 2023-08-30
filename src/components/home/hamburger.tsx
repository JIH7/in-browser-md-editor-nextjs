import styles from "./hamburger.module.css"

function hamburger() {
  return (
    <button className={styles.button}>
        <div className={styles.hamburger}>
            <div className={styles.top}></div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}></div>
        </div>
    </button>
  )
}

export default hamburger
