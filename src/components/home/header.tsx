import styles from "./header.module.css"

import Hamburger from "./Hamburger"
import FileIcon from "../../assets/icon-document.svg"

interface headerProps {
  hamburgerOpen: boolean;
  setHamburgerOpen: Function;
  classes: string;
  fileName: string;
}

function header(props: headerProps) {
  const { hamburgerOpen, setHamburgerOpen, classes, fileName } = props;

  return (
    <header className={classes}>
        <nav>
          <Hamburger open={hamburgerOpen} setOpen={setHamburgerOpen} />
          <h2 className={styles.h2}>MARKDOWN</h2>
          <h3 className={styles.h3}><FileIcon /> {fileName}</h3>
        </nav>
    </header>
    )
}

export default header
