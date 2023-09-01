import styles from './sidebar.module.css';
import FileTile from './FileTile';
import DarkModeToggle from './DarkModeToggle';
import DataSet from './DataSetInterface';

interface SidebarProps {
    classes: string;
    darkMode: boolean;
    toggleDarkMode: Function;
    setCurrentFile: Function;
    fileList: Array<DataSet>;
    addFile: Function;
}

function Sidebar(props : SidebarProps) {
    const { classes, darkMode, toggleDarkMode, setCurrentFile, fileList, addFile } = props;

  return (
    <aside className={`${classes}`}>
      <h2 className={styles.h2}>MARKDOWN</h2>
      <h3 className={styles.h3}>MY DOCUMENTS</h3>
      <button className={styles.button} onClick={() => addFile()}>+ New Document</button>

      <ul className={styles.files}>
        {
          fileList.map((el, i) => (
            <FileTile file={el} key={i} fileNum={i} setCurrentFile={setCurrentFile} />
          ))
        }
      </ul>

      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </aside>
  )
}

export default Sidebar
