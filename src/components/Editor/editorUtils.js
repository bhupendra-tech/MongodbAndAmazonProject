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
    toggleNumberedList :(editor) => {
      const isActive = isNumberedListActive(editor);
      Transforms.unwrapNodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === ELEMENT_TYPES.NUMBERED_LIST,
        split: true,
      });
      const newType = isActive ? 'paragraph' : ELEMENT_TYPES.LIST_ITEM;
      Transforms.setNodes(editor, { type: newType });
    
      if (!isActive) {
        const block = { type: ELEMENT_TYPES.NUMBERED_LIST, children: [] };
        Transforms.wrapNodes(editor, block);
      }
    },
    isNumberedListActive : (editor) => {
      const [match] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === ELEMENT_TYPES.NUMBERED_LIST,
      });
      return !!match;
    }
  };
  

export const fontSizeList = [
  {
    icon : "T",
    name : "Text"
  },
  {
    icon : "CC",
    name : "Caption"
  },
  {
    icon : "H1",
    name : "Heading 1"
  },
  {
    icon : "H2",
    name : "Heading 2"
  },
  {
    icon : "H3",
    name : "Heading 3"
  },
  {
    icon : "H4",
    name : "Heading 4"
  },
  {
    icon : "H5",
    name : "Heading 5"
  },
  {
    icon : "H6",
    name : "Heading 6"
  },

]