import { CustomEditor } from "./editorUtils";
import {
  FormatBoldIcon,
  FormatItalicIcon,
  FormatUnderlinedIcon,
  FormatSuperScriptIcon,
  FormatSubScriptIcon,
  FormatCodeIcon,
  FormatBlockQuoteIcon,
  FormatNumberedList,
  FormatBulletedListIcon,
  FormatAlignLeftIcon,
  FormatAlignCenterIcon,
  FormatAlignRightIcon,
  FormatAlignJustifyIcon,
} from "../../assets/icons";

function Toolbar({ editor }) {
  return (
    <div className="flex bg-300 py-2 px-4 gap-2 rounded-md mb-4">
      <div className="flex gap-1 border-2 border-200 p-1">
        <MarkButton editor={editor} format="bold" icon={<FormatBoldIcon />} />
        <MarkButton
          editor={editor}
          format="italic"
          icon={<FormatItalicIcon />}
        />
        <MarkButton
          editor={editor}
          format="underline"
          icon={<FormatUnderlinedIcon />}
        />
        <MarkButton
          editor={editor}
          format="superScript"
          icon={<FormatSuperScriptIcon />}
        />
        <MarkButton
          editor={editor}
          format="subScript"
          icon={<FormatSubScriptIcon />}
        />
      </div>
      <BlockButton editor={editor} format={"code"} icon={<FormatCodeIcon />} />
      <BlockButton
        editor={editor}
        format={"blockQuote"}
        icon={<FormatBlockQuoteIcon />}
      />
      <BlockButton
        editor={editor}
        format={"numberedList"}
        icon={<FormatNumberedList />}
      />
      <BlockButton
        editor={editor}
        format={"bulletedList"}
        icon={<FormatBulletedListIcon />}
      />
      <div className="border-2 border-200 flex gap-1">
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleBlock({ editor, format: "left" });
          }}
        >
          <FormatAlignLeftIcon />
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleBlock({ editor, format: "center" });
          }}
        >
          <FormatAlignCenterIcon />
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleBlock({ editor, format: "right" });
          }}
        >
          <FormatAlignRightIcon />
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleBlock({ editor, format: "justify" });
          }}
        >
          <FormatAlignJustifyIcon />
        </button>
      </div>
    </div>
  );
}
export default Toolbar;

const MarkButton = ({ editor, format, icon }) => {
  return (
    <button
      onMouseDown={(event) => {
        event.preventDefault();
        CustomEditor.toggleMark({ editor, format });
      }}
    >
      {icon}
    </button>
  );
};
const BlockButton = ({ editor, format, icon }) => {
  return (
    <button
      onMouseDown={(event) => {
        event.preventDefault();
        CustomEditor.toggleBlock({ editor, format });
      }}
    >
      {icon}
    </button>
  );
};
