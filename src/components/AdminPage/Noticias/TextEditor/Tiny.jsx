import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Tiny(props) {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      props.setHTML(editorRef.current.getContent());

      setTimeout(() => {
        props.setOpen(false);
      }, 500);
    }
  };

  const exit = () => {
    if (editorRef.current) {
      props.setOpen(false);
    }
  };

  return (
    <>
      <div className="mx-5">
        <div className="fixed inset-0 flex flex-col items-center justify-center transition-all duration-150 w-full bg-black bg-opacity-40 ">
          <div className="bg-white p-5 rounded-md">
            <Editor
              apiKey="0269xgl0sbtwgx6ffn0yjmhg0j8m3iadvk693tpihy1uej52"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
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
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            <div className="flex w-full items-center justify-between my-2">
              <button
                onClick={exit}
                className="bg-red-500 hover:bg-red-700 mx-auto text-center p-2 rounded-md text-white font-semibold mt-2 w-1/4"
              >
                Salir
              </button>

              <button
                onClick={log}
                className="bg-blue-600 hover:bg-blue-700 mx-auto text-center p-2 rounded-md text-white font-semibold mt-2 w-1/4"
              >
                Enviar contenido HTML
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
