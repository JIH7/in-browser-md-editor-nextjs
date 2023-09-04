import styles from './styles/ConfirmDelete.module.css'

interface ConfirmDeleteProps {
  deleteFile: Function;
  toggleMenu: Function;
  darkMode: boolean;
}

function ConfirmDelete(props: ConfirmDeleteProps) {
  const { deleteFile, toggleMenu, darkMode } = props;

  return (
    <div className={`${styles.deletebox} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.bg}></div>
      <section>
        <h4>Delete this document?</h4>
        <p>Are you sure you want to delete the '{'welcome.md'}' document and it's contents? This action cannot be reversed.</p>
        <button onClick={() => {
          toggleMenu();
          deleteFile();
        }}>Confirm & Delete</button>
        <button onClick={() => {toggleMenu()}}>Go back</button>
      </section>
    </div>
  )
}

export default ConfirmDelete
