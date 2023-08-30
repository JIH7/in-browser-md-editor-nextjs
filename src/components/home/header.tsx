import styles from "./header.module.css"


import Hamburger from "./hamburger"

interface headerProps {
  hamburgerOpen: boolean;
  setHamburgerOpen: Function;

}

function header(props: headerProps) {
  const { hamburgerOpen, setHamburgerOpen } = props;

  return (
    <header>
        <nav>
          <Hamburger open={hamburgerOpen} setOpen={setHamburgerOpen} />
        </nav>
    </header>
    )
}

export default header
