import { useEffect, useRef, useState } from "react";
import BookOpenIcon from "../assets/icons/bookOpenIcon";

function DragDropZone() {
  const dropZoneRef = useRef(null);
  const userFileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState([]);
  const getSetFilesFromFileListObject = (files) => {
    setSelectedFileName(
      Object.keys(files).map((key) => files[key]?.name || null)
    );
  };
  useEffect(() => {
    const dropArea = dropZoneRef.current;
    if (dropArea) {
      dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.classList.add("border-950");
        dropArea.classList.add("bg-200");
        dropArea.classList.remove("border-300");
      });
      dropArea.addEventListener("dragleave", (e) => {
        dropArea.classList.remove("border-950");
        dropArea.classList.remove("bg-200");
        dropArea.classList.add("border-300");
      });
      dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dropArea.classList.remove("border-950");
        dropArea.classList.remove("bg-200");
        dropArea.classList.add("border-300");
        const files = e.dataTransfer.files;
        getSetFilesFromFileListObject(files);
      });
      return () => {
        if (dropArea) {
          dropArea.removeEventListener("dragover", () => {});
          dropArea.removeEventListener("dragleave", () => {});
          dropArea.removeEventListener("drop", () => {});
        }
      };
    }
  }, []);
  return (
    <div>
      <div
        ref={dropZoneRef}
        className=" border-dashed border-300 rounded-xl p-10 flex flex-col justify-center items-center border-2"
      >
        <BookOpenIcon width="60px" height="60px" className="text-400" />
        <h5 className="text-400 text-lg font-semibold">
          + Drop you files here
        </h5>
      </div>
      <div className="flex-col flex items-center mt-2 gap-2">
        <h5 className="text-lg">Or</h5>
        <div
          className="text-700 bg-200 py-2 font-semibold px-4 rounded-full cursor-pointer"
          onClick={() => {
            if (userFileInputRef?.current) {
              userFileInputRef?.current.click();
            }
          }}
        >
          Choose File
        </div>
        <input
          ref={userFileInputRef}
          id="userFileInput"
          type="file"
          multiple
          onChange={(e) => {
            getSetFilesFromFileListObject(e.target.files);
          }}
          hidden
        />
      </div>
      <div className="mt-2 max-h-14 overflow-y-auto">
        {selectedFileName.map((value) => {
          return (
            <div
              key={`${value} file-item`}
              className="p-2 bg-200 flex gap-2 items-center rounded-md justify-between mt-2"
            >
              <p className="text-xs text-700">{value}</p>
              <button
                className="text-xs bg-red-300 py-1 px-2 rounded-full"
                onClick={() => {
                  const newList = selectedFileName.filter(
                    (item) => item !== value
                  );
                  setSelectedFileName(newList);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DragDropZone;
