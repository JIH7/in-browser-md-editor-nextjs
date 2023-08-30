import { useState } from 'react'
import Header from './header'
import TextEditor from './textEditor'

function app() {
  return (
    <>
        <Header />
        <main>
            <TextEditor />
        </main>
    </>
  )
}

export default app
