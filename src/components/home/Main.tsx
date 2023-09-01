'use client'

import { useState, useEffect } from 'react'
import Data from '../../../data.json'
import DataSet from './DataSetClass'
import Header from './Header'
import TextEditor from './TextEditor'
import Sidebar from './Sidebar'

function Main() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentFile, setCurrentFile] = useState(0)
  const [fileList, setFileList] = useState(Data);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    Data.forEach((el) => {
      setDate(el);
    })
  }, []);

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

  return (
    <>
        <Header classes={hamburgerOpen ? 'pushed' : ''} hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} fileName={fileList[currentFile].name}/>
        <main className={`${hamburgerOpen ? 'pushed' : ''} ${darkMode ? 'dark' : ''}`}>
            {/* ToDo: Make default content last accessed file */}
            <TextEditor showPreview={showPreview} setShowPreview={setShowPreview} content={Data[currentFile].content} darkMode={darkMode}/>
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
