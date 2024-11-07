import sideMenuList from "../utils/dummyData";
import AngleDownIcon from "../assets/icons/angleDownIcon";
import { useState } from "react";
import AngleUpIcon from "../assets/icons/angleUpIcon";

function TopicList({ topics }) {
  return (
    <div className="ml-2 mt-1">
      <p className="text-xs text-300 font-semibold">Topics</p>
      <div className="flex flex-col gap-3 mt-2">
        {Object.keys(topics).map((topicKey) => (
          <div
            key={topicKey}
            className="flex justify-between bg-100 py-1 px-2 rounded-lg"
          >
            <p>{topicKey}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChapterList({ chapters }) {
  const [whichChapterTopicVisible, setWhichChapterTopicVisible] = useState("");
  return (
    <div className="ml-2 mt-1">
      <p className="text-xs text-300 font-semibold">Chapters</p>
      <div className="flex flex-col gap-3 mt-2">
        {Object.keys(chapters).map((chapterKey) => (
          <div key={chapterKey}>
            <div className="flex justify-between bg-100 py-1 px-2 rounded-lg items-center "onClick={() => {
                  whichChapterTopicVisible === chapterKey
                    ? setWhichChapterTopicVisible("")
                    : setWhichChapterTopicVisible(chapterKey);
                }}>
              <p>{chapterKey}</p>
 
                {whichChapterTopicVisible === chapterKey ? (
                  <AngleUpIcon width="16px" height="16px" />
                ) : (
                  <AngleDownIcon width="16px" height="16px" />
                )}
            </div>
            {whichChapterTopicVisible === chapterKey && (
              <TopicList topics={chapters[chapterKey]} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuList() {
  const { listItems } = sideMenuList;
  const [whichSubjectChapterVisible, setWhichSubjectChapterVisible] =
    useState("");
  return (
    <div className="menuList mt-3">
      <p className="text-xs text-300 font-semibold">Subjects</p>
      <div className="flex flex-col gap-3 mt-2">
        {Object.keys(listItems).map((subjectKey) => (
          <div key={subjectKey}>
            <div
              className="flex justify-between bg-100 py-1 px-2 rounded-lg items-center"
              onClick={() => {
                whichSubjectChapterVisible === subjectKey
                  ? setWhichSubjectChapterVisible("")
                  : setWhichSubjectChapterVisible(subjectKey);
              }}
            >
              <p>{subjectKey}</p>
                {whichSubjectChapterVisible === subjectKey ? (
                  <AngleUpIcon width="16px" height="16px" />
                ) : (
                  <AngleDownIcon width="16px" height="16px" />
                )}
            </div>
            {whichSubjectChapterVisible === subjectKey && (
              <ChapterList chapters={listItems[subjectKey]} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
