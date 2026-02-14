import { EditorContext } from "../../context/EditorContext";
import { useEditorReducer } from "../../hooks/useEditorReducer";

import EditorToolbar from "./EditorToolbar";
import EditorContent from "./EditorContent";
import PresenceIndicators from "./PresenceIndicators";
import styles from "../../styles/Editor.module.css";

function RichTextEditor() {
  const [state, dispatch] = useEditorReducer();

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      <div className={styles.editorContainer}>
        <EditorToolbar />
        <EditorContent />
        <PresenceIndicators />
      </div>
    </EditorContext.Provider>
  );
}

export default RichTextEditor;