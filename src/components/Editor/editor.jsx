import { useCallback, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { initialValue } from "./editorUtils";
import renderEditorElement from "./editorBlock";
import Leaf from "./editorLeaf";
import { handleKeyDown } from "./editorEvents";
import Toolbar from "./toolbar";

function EditorBlock() {
  const [editor] = useState(() => withReact(createEditor()));
  const renderElement = useCallback(renderEditorElement, []);
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);
  return (
    <div className="pt-6 px-6 max-w-3xl h-full">
      <Slate editor={editor} initialValue={initialValue}>
        <Toolbar editor={editor} />
        <Editable
          className="outline-none max-w-3xl px-1"
          placeholder="Type something..."
          autoFocus
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(event) => handleKeyDown(event, editor)}
        />
      </Slate>
    </div>
  );
}

export default EditorBlock;
