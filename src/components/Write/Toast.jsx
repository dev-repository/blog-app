import React, { useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const TuiEditor = ({ content = "" }) => {
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const handResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handResize);
    return () => {
      window.removeEventListener("resize", handResize);
    };
  }, []);

  return (
    <>
      <Editor
        initialValue={content || " "} // 글 수정 시 사용
        initialEditType="markdown" // wysiwyg & markdown
        previewStyle={windowSize.width < 768 ? "tab" : "vertical"} // tab, vertical
        hideModeSwitch={true}
        height="calc(100% - 8.1rem)"
        theme={""} // '' & 'dark'
        usageStatistics={false}
        toolbarItems={toolbarItems}
        useCommandShortcut={true}
      />
    </>
  );
};

export default TuiEditor;
