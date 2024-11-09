import { Editor,Transforms,Element } from "slate";


export const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ];

export const CustomEditor = {
  isMarkActive({editor,format}){
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  },
  isBlockActive({editor,format}){
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === format,
    });
    return !!match;
  },
    toggleMark({editor,format}) {
      const isActive = CustomEditor.isMarkActive({editor,format});
      if (isActive) {
        Editor.removeMark(editor, format);
      } else {
        Editor.addMark(editor, format, true);
      }
    },
    toggleBlock({editor,format}) {

      const isActive = CustomEditor.isBlockActive({editor,format});
      Transforms.setNodes(
        editor,
        { type: isActive ? null : format },
        { match: (n) => Editor.isBlock(editor, n) && Element.isElement(n) }
      );
    },
  };
  