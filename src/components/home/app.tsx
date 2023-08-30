'use client'

import { useState } from 'react'
import Header from './header'
import TextEditor from './textEditor'

function app() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
        <Header hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} showPreview={showPreview} setShowPreview={setShowPreview} />
        <main>
            <TextEditor />
        </main>
    </>
  )
}

export default app
