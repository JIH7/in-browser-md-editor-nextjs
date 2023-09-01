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
  changeFileName: Function;
}

function Header(props: HeaderProps) {
  const { hamburgerOpen, setHamburgerOpen, classes, fileName, changeFileName } = props;

  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if(event.key === "Enter") {
      event.preventDefault();
      const newName = event.currentTarget.textContent ?? "";
      console.log(newName)

      if (newName !== ".md" && newName !== "") {
        changeFileName(newName);
      } else {
        event.currentTarget.textContent = fileName;
      }

      event.currentTarget.blur();
    }
  }

  return (
    <header className={classes}>
        <nav>
          <Hamburger open={hamburgerOpen} setOpen={setHamburgerOpen} />
          <h2 className={styles.h2}>MARKDOWN</h2>
          <h3 className={styles.h3}><FileIcon /> <span
          contentEditable="true"
          onKeyDown={handleEnterKeyPress}>{fileName}</span></h3>

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
