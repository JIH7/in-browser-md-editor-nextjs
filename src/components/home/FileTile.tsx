import DataSet from "./DataSetInterface"
import FileIcon from '../../assets/icon-document.svg';

interface FileTileProps {
    file: DataSet;
    key: number;
    fileNum: number;
    setCurrentFile: Function;
}

function FileTile(props: FileTileProps) {
  const { file, key, fileNum , setCurrentFile } = props;

  return (
    <li onClick={() => setCurrentFile(fileNum)}>
      <FileIcon />
      <div>
        <h5>{file.createdAt}</h5>
        <h4>{file.name}</h4>
      </div>
    </li>
  )
}

export default FileTile
