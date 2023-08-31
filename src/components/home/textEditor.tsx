import { useState } from "react"

import styles from "./textEditor.module.css"
import ShowPreview from "../../assets/icon-show-preview.svg"
import HidePreview from "../../assets/icon-hide-preview.svg"

import ReactMarkdown from 'react-markdown'

interface TextEditorProps {
  showPreview: boolean;
  setShowPreview: Function;
  defaultContent: string;
  darkMode: boolean;
}

function TextEditor(props: TextEditorProps) {
  const { showPreview, setShowPreview, defaultContent, darkMode } = props;
  const [ previewText, setPreviewText ] = useState(defaultContent);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    setPreviewText(inputText);
  }

  const handleTabKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
  
      const textarea = event.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
  
      const updatedText = previewText.substring(0, start) + '\t' + previewText.substring(end);
  
      // Update the textarea value directly
      textarea.value = updatedText;
  
      // Move the cursor position after the inserted tab character
      textarea.selectionStart = textarea.selectionEnd = start + 1;
  
      // Trigger the handleChange event manually to update the state
      handleChange({ target: textarea } as React.ChangeEvent<HTMLTextAreaElement>);
    }
  };

  return (
    <>
    <section className={`${showPreview ? styles.sharing : ""} ${darkMode ? styles.dark : ''} ${styles.section}`}>
      <div className={styles.header}>
        <h2 className={styles.h2}>
          Markdown
          <button className={`${styles.button} ${showPreview ? styles.hidden : ''}`} onClick={() => setShowPreview(!showPreview)}>
            <ShowPreview />
          </button>
        </h2>
      </div>
      <textarea
      id="input"
      className={styles.input}
      onChange={handleChange}
      onKeyDown={handleTabKeyPress}
      defaultValue={previewText}></textarea>
    </section>
    <section className={`${showPreview ? '' : styles.hidden} ${darkMode ? styles.dark : ''} ${styles.section}`}>
      <div className={styles.header}>
        <h2 className={styles.h2}>
          Preview
          <button className={`${styles.button} ${!showPreview ? styles.hidden : ''}`} onClick={() => setShowPreview(!showPreview)}>
            <HidePreview />
          </button>
        </h2>
      </div>
      <div id="preview" className={styles.preview}>
        <ReactMarkdown>{previewText}</ReactMarkdown>
      </div>
    </section>
    </>
  )
}

export default TextEditor
