'use client'

import { useState, useEffect } from 'react'
import Data from '../../../data.json'
import DataSet from './DataSetClass'
import ConfirmDelete from './ConfirmDelete'
import Header from './Header'
import TextEditor from './TextEditor'
import Sidebar from './Sidebar'

function Main() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentFile, setCurrentFile] = useState(0)
  const [fileList, setFileList] = useState(Data);
  const [currentContent, setCurrentContent] = useState('');
  const [deleteMenuOpen, setDeleteMenuOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    checkForLocalFiles();
   
  }, []);

  useEffect(() => {
    saveLocalFiles();
  }, [fileList])

  const toggleDeleteMenu = () => {
    setDeleteMenuOpen(!deleteMenuOpen);
  }

  const checkForLocalFiles = () => {
    if (localStorage.getItem('files') !== null) {
      const files = JSON.parse(localStorage.getItem('files') ?? "");
      setFileList(files);
    } else {
      Data.forEach((el) => {
        setDate(el);
      })
    }
  }

  const saveContent = () => {
    const tempFileList = [...fileList];
    tempFileList[currentFile].content = currentContent;
    setFileList(tempFileList);
  }

  const saveLocalFiles = () => {
    localStorage.setItem('files', JSON.stringify(fileList))
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const setDate = (data: DataSet) => {
    const now = new Date();
    let year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString();
    if (Number(month) < 10)
      month = '0' + month;

    let day = now.getDate().toString();
    if(Number(day) < 10)
      day = '0' + day;

    data.createdAt = `${month}-${day}-${year}`
  }

  const createFile = () => {
    const newFile = new DataSet('untitled')
    
    let tempFileList = [...fileList];
    setDate(newFile)
    tempFileList.push(newFile);

    setFileList(tempFileList);
  }

  const changeFileName = (newName: string) => {
    if (newName === "")
      return

    const tempFileList = [...fileList];
    
    if (newName.substring(newName.length - 3) !== '.md')
      newName += '.md';

    tempFileList[currentFile].name = newName;
    setFileList(tempFileList);
  }

  const deleteFile = () => {
    const tempFileList = [...fileList];
    tempFileList.splice(currentFile);

    if (tempFileList.length === 0){
      tempFileList.push(new DataSet('untitled'))
      setDate(tempFileList[0])
    } else {
      setCurrentFile(currentFile - 1)
    }

    setFileList(tempFileList);
  }

  return (
    <>
        {
          deleteMenuOpen ?
          <ConfirmDelete
          deleteFile={deleteFile}
          toggleMenu={toggleDeleteMenu}
          darkMode={darkMode}/>
          :
          ''
        }

        <Header
        classes={hamburgerOpen ? 'pushed' : ''}
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
        fileName={fileList[currentFile].name}
        changeFileName={changeFileName}
        deleteFile={toggleDeleteMenu}
        saveFile={saveContent}/>
        <main className={`${hamburgerOpen ? 'pushed' : ''} ${darkMode ? 'dark' : ''}`}>
            {/* ToDo: Make default content last accessed file */}
            <TextEditor showPreview={showPreview}
            setShowPreview={setShowPreview}
            content={fileList[currentFile].content}
            setCurrentContent={setCurrentContent}
            darkMode={darkMode}/>
        </main>
        <Sidebar
        classes={hamburgerOpen ? 'pushed' : ''}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        setCurrentFile={setCurrentFile}
        fileList={fileList}
        addFile={createFile}/>
    </>
  )
}

export default Main
