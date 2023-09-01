'use client'

import { useState, useEffect } from 'react'
import Data from '../../../data.json'
import DataSet from './DataSetInterface'
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
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
        <Header classes={hamburgerOpen ? 'pushed' : ''} hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} fileName={fileList[currentFile].name}/>
        <main className={`${hamburgerOpen ? 'pushed' : ''} ${darkMode ? 'dark' : ''}`}>
            {/* ToDo: Make default content last accessed file */}
            <TextEditor showPreview={showPreview} setShowPreview={setShowPreview} content={Data[currentFile].content} darkMode={darkMode}/>
        </main>
        <Sidebar classes={hamburgerOpen ? 'pushed' : ''} darkMode={darkMode} toggleDarkMode={toggleDarkMode} setCurrentFile={setCurrentFile} fileList={fileList} setFileList={setFileList}/>
    </>
  )
}

export default Main
