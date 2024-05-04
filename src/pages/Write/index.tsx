import { useCallback, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useRecoilState } from "recoil";
import { writeInitialState, writeState } from "../../store/write";
import { useNavigate } from "react-router-dom";

const TitleTextarea = () => {
  const [write, setWrite] = useRecoilState(writeState);

  function handleTitleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault();

    const title = event.target.value;

    setWrite((preValue) => ({ ...preValue, title }));
  }

  return (
    <textarea
      className="w-full h-20 max-h-20 px-3 pt-5 font-bold text-2xl placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      placeholder="Enter your blog title..."
      value={write.title}
      onChange={handleTitleChange}
    />
  );
};

export const Write = () => {
  const [write, setWrite] = useRecoilState(writeState);
  const navigate = useNavigate();
  const editorRef = useRef<any>(null);

  const handleSave = useCallback(() => {
    if (editorRef.current) {
      setWrite((preValue) => ({
        ...preValue,
        content: editorRef.current.getContent(),
      }));
    }
  }, [setWrite]);

  const handleCancel = () => {
    setWrite(writeInitialState);
    navigate("/");
  };

  useEffect(() => {
    function ctrlS(e: any) {
      if (e.ctrlKey && e.key === "s") {
        // Prevent the Save dialog to open
        e.preventDefault();
        // Place your code here
        console.log("CTRL + S");
        handleSave();
      }
    }

    document.addEventListener("keydown", ctrlS);

    return () => {
      document.removeEventListener("keydown", ctrlS);
    };
  }, [handleSave]);

  return (
    <div className="h-screen">
      <TitleTextarea />
      <Editor
        apiKey="g4zqmzvx4tx80ks3l9h784hvh9tkur5bi4zo4rf5f6p6xsw9"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={write.content || "<p>Press CTRL + S to save</p>"}
        init={{
          height: "100%",
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | styles | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="py-5">
        <button
          onClick={handleSave}
          className={`py-1 px-5 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 `}
        >
          Save
        </button>

        <button
          onClick={handleCancel}
          className={`py-1 px-5 mx-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 `}
        >
          Discard
        </button>
      </div>
    </div>
  );
};
