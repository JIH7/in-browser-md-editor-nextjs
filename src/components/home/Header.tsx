import styles from "./header.module.css"

import Hamburger from "./Hamburger"
import FileIcon from "../../assets/icon-document.svg"
import TrashIcon from "../../assets/icon-delete.svg"
import SaveIcon from "../../assets/icon-save.svg"

interface HeaderProps {
  hamburgerOpen: boolean;
  setHamburgerOpen: Function;
  classes: string;
  fileName: string;
}

function Header(props: HeaderProps) {
  const { hamburgerOpen, setHamburgerOpen, classes, fileName } = props;

  return (
    <header className={classes}>
        <nav>
          <Hamburger open={hamburgerOpen} setOpen={setHamburgerOpen} />
          <h2 className={styles.h2}>MARKDOWN</h2>
          <h3 className={styles.h3}><FileIcon /> {fileName}</h3>

          <div className={styles.right}>
            <TrashIcon />
            <button>
              <SaveIcon />
              <span>Save Changes</span>
            </button>
          </div>
        </nav>
    </header>
    )
}

export default Header
