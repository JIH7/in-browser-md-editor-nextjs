'use client'

import { useState } from 'react'
import Data from '../../../data.json'
import Header from './header'
import TextEditor from './textEditor'
import Sidebar from './sidebar'

interface DataSet {
  createdAt: string;
  name: string;
  content: string;
}

function app() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
        <Header classes={hamburgerOpen ? 'pushed' : ''} hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />
        <main className={`${hamburgerOpen ? 'pushed' : ''} ${darkMode ? 'dark' : ''}`}>
            <TextEditor showPreview={showPreview} setShowPreview={setShowPreview} defaultContent={Data[1].content}/>
        </main>
        <Sidebar classes={hamburgerOpen ? 'pushed' : ''} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  )
}

export default app
