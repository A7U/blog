import React, { useState } from "react";
// import hljs from 'highlight.js';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

function createPost() {
  const [value, setValue] = useState("");

  // hljs.configure({
  //   languages: ['javascript', 'ruby', 'python']
  // });

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
    
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }], 
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']   
    ],
    clipboard: {
      matchVisual: false,
    },
    // syntax: true
  }

  let formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', 'color', 'code', 'background',
    'link', 'syntax', 'highlight', 'code-block', 'align', 'clean'
  ]

  return (
            <form action="/api/post" method="POST">
              <div className={"grid grid-cols-1 gap-4"}>
              <label htmlFor="username" className={"text-white"}>Username</label>
              <input type="text" id="username" name="username" className={"rounded-lg text-center transition duration-200 ease-in-out transform hover:scale-105"} autoComplete={"off"} placeholder={"My name is Jeff"}></input>

              <label htmlFor="title" className={"text-white"}>Title</label>
              <input type="text" id="title" name="title" className={"rounded-lg text-center transition duration-200 ease-in-out transform hover:scale-105"} autoComplete={"off"} placeholder={"Interesting title"}></input>

              <div className={"grid grid-cols-1 gap-4"}>
                <label htmlFor="message" className={"text-white"}>Message</label>
                <div className={"bg-white flex"}>
                  {/* <ReactQuill value={value} onChange={setValue} placeholder={"Write something..."} modules={modules} formats={formats} /> */}
                  <SimpleMDE value={value} onChange={setValue} placeholder={"Write something..."} />
                </div>
                <input type="hidden" name="message" id="message" value={value}></input>
              </div>

              <div className={"p-8"}>
                <label htmlFor="img" className={'px-3 text-white'}>Image:</label>
                <input type="file" id="img" name="img" className={"text-white"}></input>
                
              </div>
              </div>

              <div className={"text-white p-4"}>
                <button type="submit" className={"bg-gray-700 w-32 h-10 rounded-3xl hover:bg-gray-800 transform transition duration-300 hover:scale-110"}>Post</button>
              </div>
            </form>
  );
}

export default createPost