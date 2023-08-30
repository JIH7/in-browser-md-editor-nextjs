import styles from "./hamburger.module.css"

interface hamburgerProps {
  open: boolean;
  setOpen: Function;
}

function hamburger(props: hamburgerProps) {
  const {open, setOpen} = props;

  return (
    <button className={styles.button} onClick={() => setOpen(!open)}>
        <div className={styles.hamburger}>
            <div className={`${styles.top} ${open ? styles.open : ''}`}></div>
            <div className={`${styles.middle} ${open ? styles.open : ''}`}></div>
            <div className={`${styles.bottom} ${open ? styles.open : ''}`}></div>
        </div>
    </button>
  )
}

export default hamburger
