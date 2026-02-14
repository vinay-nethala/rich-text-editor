import { useReducer } from "react";

const initialState = {
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is predefined sample text for testing purposes. Feel free to edit and format this text using the toolbar above.",
  history: [],
  historyIndex: -1,
};

function editorReducer(state, action) {
  switch (action.type) {
    case "SET_CONTENT": {
      const newHistory = state.history.slice(0, state.historyIndex + 1);
      newHistory.push(action.payload);

      // keep only last 10 states
      if (newHistory.length > 10) {
        newHistory.shift();
      }

      return {
        content: action.payload,
        history: newHistory,
        historyIndex: newHistory.length - 1,
      };
    }

    case "UNDO": {
      if (state.historyIndex <= 0) return state;

      return {
        ...state,
        content: state.history[state.historyIndex - 1],
        historyIndex: state.historyIndex - 1,
      };
    }

    case "REDO": {
      if (state.historyIndex >= state.history.length - 1) return state;

      return {
        ...state,
        content: state.history[state.historyIndex + 1],
        historyIndex: state.historyIndex + 1,
      };
    }

    default:
      return state;
  }
}

export function useEditorReducer() {
  return useReducer(editorReducer, initialState);
}