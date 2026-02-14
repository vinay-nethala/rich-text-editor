import { useContext, useRef, useEffect } from "react";
import { EditorContext } from "../../context/EditorContext";
import styles from "../../styles/Editor.module.css";

function EditorContent() {
  const { state, dispatch } = useContext(EditorContext);
  const editorRef = useRef(null);

  // When undo/redo happens, update editor content
  useEffect(() => {
    if (
      editorRef.current &&
      editorRef.current.innerHTML !== state.content
    ) {
      editorRef.current.innerHTML = state.content;
    }
  }, [state.content]);

  // Save content on typing
  const handleInput = () => {
    dispatch({
      type: "SET_CONTENT",
      payload: editorRef.current.innerHTML,
    });
  };

  return (
    <div
      ref={editorRef}
      className={styles.editor}
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      aria-label="Rich text editor"
      aria-multiline="true"
      tabIndex={0}
      onInput={handleInput}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is predefined sample text for testing purposes. Feel free to edit and format this text using the toolbar above.
    </div>
  );
}

export default EditorContent;