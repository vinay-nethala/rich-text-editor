import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RichTextEditor from "../components/RichTextEditor/RichTextEditor.jsx";

describe("RichTextEditor", () => {
  it("renders the editor textbox", () => {
    render(<RichTextEditor />);

    const editor = screen.getByRole("textbox", {
      name: /rich text editor/i
    });

    expect(editor).toBeInTheDocument();
  });

  it("has accessible rich text editor", () => {
    render(<RichTextEditor />);

    const editor = screen.getByRole("textbox", {
      name: /rich text editor/i
    });

    expect(editor).toHaveAttribute("contenteditable", "true");
  });
});