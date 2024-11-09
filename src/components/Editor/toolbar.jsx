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
import { useState } from "react";
import { fontSizeList } from "./editorUtils";
import { AngleDownIcon } from "../../assets/icons";
function Toolbar({ editor }) {
  return (
    <div className="flex gap-3 rounded-md mb-4 ">
      <div className="flex gap-3 border-2 border-200 p-1 select-none">
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
        <TextSizeButton editor={editor} />
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
      <div className="border-2 border-200 flex gap-2">
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
  console.log(CustomEditor.isBlockActive({ editor, format }));
  return (
    <button
      onMouseDown={(event) => {
        event.preventDefault();
        CustomEditor.toggleBlock({ editor, format });
      }}
      className={`${
        CustomEditor.isBlockActive({ editor, format }) ? "bg-200" : "bg-500"
      }`}
    >
      {icon}
    </button>
  );
};

const TextSizeButton = ({ editor }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <div className="bg-200 rounded-md w-36">
      <div
        className="flex gap-2 justify-between cursor-pointer px-2 w-full items-center"
        onClick={() => {
          setIsMenuVisible(!isMenuVisible);
        }}
      >
        <div className="flex gap-2 cursor-pointer">
          <div className="font-bold">{fontSizeList?.[selectedItem]?.icon}</div>
          <div>{fontSizeList?.[selectedItem]?.name}</div>
        </div>
        <AngleDownIcon />
      </div>
      {isMenuVisible && (
        <div className="absolute rounded-md mt-1 bg-100 w-36 z-10">
          {fontSizeList.map((item, index) => {
            const { icon, name } = item;
            return (
              <div
                key={`${index}-toolbar-fontSize-element`}
                className={`${
                  selectedItem === index ? "bg-200" : ""
                } flex gap-2 align-baseline cursor-pointer px-2 `}
                onClick={() => {
                  setSelectedItem(index);
                  setIsMenuVisible(false);
                  CustomEditor.toggleBlock({ editor, format: name });
                }}
              >
                <div className="font-bold">{icon}</div>
                <div>{name}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
