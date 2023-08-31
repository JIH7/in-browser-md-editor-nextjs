'use client'

import { useState } from 'react'
import Data from '../../../data.json'
import DataSet from './DataSetInterface'
import Header from './Header'
import TextEditor from './TextEditor'
import Sidebar from './Sidebar'

function app() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentFile, setCurrentFile] = useState(0)
  const [fileList, setFileList] = useState(Data);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
        <Header classes={hamburgerOpen ? 'pushed' : ''} hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} fileName={fileList[currentFile].name}/>
        <main className={`${hamburgerOpen ? 'pushed' : ''} ${darkMode ? 'dark' : ''}`}>
            {/* ToDo: Make default content last accessed file */}
            <TextEditor showPreview={showPreview} setShowPreview={setShowPreview} defaultContent={Data[currentFile].content} darkMode/>
        </main>
        <Sidebar classes={hamburgerOpen ? 'pushed' : ''} darkMode={darkMode} toggleDarkMode={toggleDarkMode} setCurrentFile={setCurrentFile} fileList={fileList}/>
    </>
  )
}

export default app
