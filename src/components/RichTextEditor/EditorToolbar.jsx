import { useContext } from "react";
import { EditorContext } from "../../context/EditorContext";
import styles from "../../styles/Editor.module.css";

function EditorToolbar() {
  const { dispatch } = useContext(EditorContext);

  const applyCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className={styles.toolbar} role="toolbar" aria-label="Text formatting toolbar">
      <button type="button" className={styles.toolbarButton} aria-label="Bold" onClick={() => applyCommand("bold")}>B</button>
      <button type="button" className={styles.toolbarButton} aria-label="Italic" onClick={() => applyCommand("italic")}>I</button>
      <button type="button" className={styles.toolbarButton} aria-label="Underline" onClick={() => applyCommand("underline")}>U</button>

      <button type="button" className={styles.toolbarButton} aria-label="Heading 1" onClick={() => applyCommand("formatBlock", "h1")}>H1</button>
      <button type="button" className={styles.toolbarButton} aria-label="Heading 2" onClick={() => applyCommand("formatBlock", "h2")}>H2</button>
      <button type="button" className={styles.toolbarButton} aria-label="Heading 3" onClick={() => applyCommand("formatBlock", "h3")}>H3</button>

      <button type="button" className={styles.toolbarButton} aria-label="Undo" onClick={() => dispatch({ type: "UNDO" })}>Undo</button>
      <button type="button" className={styles.toolbarButton} aria-label="Redo" onClick={() => dispatch({ type: "REDO" })}>Redo</button>
    </div>
  );
}

export default EditorToolbar;