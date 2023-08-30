'use client'

import { useState } from 'react'
import Data from '../../../data.json'
import Header from './header'
import TextEditor from './textEditor'

interface DataSet {
  createdAt: string;
  name: string;
  content: string;
}

function app() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
        <Header hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />
        <main>
            <TextEditor showPreview={showPreview} setShowPreview={setShowPreview} defaultContent={Data[1].content}/>
        </main>
    </>
  )
}

export default app
