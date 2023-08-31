import styles from "./header.module.css"


import Hamburger from "./hamburger"

interface headerProps {
  hamburgerOpen: boolean;
  setHamburgerOpen: Function;
  classes: string;
}

function header(props: headerProps) {
  const { hamburgerOpen, setHamburgerOpen, classes } = props;

  return (
    <header className={classes}>
        <nav>
          <Hamburger open={hamburgerOpen} setOpen={setHamburgerOpen} />
        </nav>
    </header>
    )
}

export default header
