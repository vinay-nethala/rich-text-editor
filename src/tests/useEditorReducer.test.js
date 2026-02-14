import { describe, it, expect } from "vitest";
import { useEditorReducer } from "../hooks/useEditorReducer";
import { renderHook, act } from "@testing-library/react";

describe("useEditorReducer", () => {
  it("should set content", () => {
    const { result } = renderHook(() => useEditorReducer());

    act(() => {
      result.current[1]({
        type: "SET_CONTENT",
        payload: "<p>Hello</p>",
      });
    });

    expect(result.current[0].content).toBe("<p>Hello</p>");
  });

  it("should undo content", () => {
    const { result } = renderHook(() => useEditorReducer());

    act(() => {
      result.current[1]({ type: "SET_CONTENT", payload: "A" });
      result.current[1]({ type: "SET_CONTENT", payload: "B" });
      result.current[1]({ type: "UNDO" });
    });

    expect(result.current[0].content).toBe("A");
  });

  it("should redo content", () => {
    const { result } = renderHook(() => useEditorReducer());

    act(() => {
      result.current[1]({ type: "SET_CONTENT", payload: "A" });
      result.current[1]({ type: "SET_CONTENT", payload: "B" });
      result.current[1]({ type: "UNDO" });
      result.current[1]({ type: "REDO" });
    });

    expect(result.current[0].content).toBe("B");
  });
});