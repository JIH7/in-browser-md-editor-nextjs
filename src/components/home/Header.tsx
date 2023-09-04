import styles from "./styles/Header.module.css"

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
  deleteFile: Function;
  saveFile: Function;
}

function Header(props: HeaderProps) {
  const { hamburgerOpen, setHamburgerOpen, classes, fileName, changeFileName, deleteFile, saveFile } = props;

  const attemptNameUpdate = (name: string, span: HTMLSpanElement) => {
    if (name !== ".md" && name !== "") {
      changeFileName(name);
    } else {
      span.textContent = fileName;
    }
  }

  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if(event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
  }

  const handleFocusOut = (event: React.FocusEvent<HTMLSpanElement>) => {
    const span = event.currentTarget;
    const newName = span.textContent ?? "";
    attemptNameUpdate(newName, span)
  }

  return (
    <header className={classes}>
        <nav>
          <Hamburger open={hamburgerOpen} setOpen={setHamburgerOpen} />
          <h2 className={styles.h2}>MARKDOWN</h2>
          <h3 className={styles.h3}><FileIcon /> <span
          contentEditable="true"
          onKeyDown={handleEnterKeyPress}
          onBlur={handleFocusOut}>{fileName}</span></h3>

          <div className={styles.right}>
            <TrashIcon onClick={deleteFile} />
            <button onClick={() => saveFile()}>
              <SaveIcon/>
              <span>Save Changes</span>
            </button>
          </div>
        </nav>
    </header>
    )
}

export default Header
