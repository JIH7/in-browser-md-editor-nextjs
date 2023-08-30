import styles from "./header.module.css"
import ShowPreview from "../../assets/icon-show-preview.svg"
import HidePreview from "../../assets/icon-hide-preview.svg"

import Hamburger from "./hamburger"

interface headerProps {
  hamburgerOpen: boolean;
  setHamburgerOpen: Function;
  showPreview: boolean;
  setShowPreview: Function;
}

function header(props: headerProps) {
  const { hamburgerOpen, setHamburgerOpen, showPreview, setShowPreview } = props;

  return (
    <header>
        <nav>
          <Hamburger open={hamburgerOpen} setOpen={setHamburgerOpen} />
        </nav>
        <h2 className={styles.h2}>
          {showPreview ? "Preview" : "Markdown"}

          <button className={styles.button} onClick={() => setShowPreview(!showPreview)}>
            {
              showPreview ?
              <HidePreview />
              :
              <ShowPreview />
            }
          </button>
        </h2>
    </header>
    )
}

export default header
