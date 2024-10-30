// src/components/Layout.js
import React, { useState } from 'react';

const TextEditor = () => {
  // Text uppercase useState

  const [Text, setText] = useState('');
  // covert Uppercase
  const handleUpclick = () => {
    console.log('Uppercase was clicked');
    let newText = Text.toUpperCase();
    setText(newText);
  };
  // covert Lowercase
  const handleLoclick = () => {
    console.log('Lowercase was clicked');
    let newText = Text.toLowerCase();
    setText(newText);
  };
  //Clear Text
  const handleClearclick = () => {
    console.log('Clear Text was clicked');
    let newText = '';
    setText(newText);
  };
  const handleonChange = (e) => {
    setText(e.target.value);
  };
  // Copy Text
  const handleCopy = () => {
    console.log('I am copy');
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  // Remove Extra spaces
  const handleExtraSpaces = () => {
    console.log('I am Extra Spaces');
    let newText = Text.split(/[ ]+/);
    setText(newText.join(' '));
  };

  // Dark MOde
  // const [myStyle, setMyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white',
  // })
  // const [btnText, setBtnText] = useState("Dark Mode")
  // const  tougleStyle = () => {
  //   if(myStyle.color === 'black'){
  //     setMyStyle({
  //       color:'white',
  //       backgroundColor:'black',

  //     })
  //     setBtnText("Dark Mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color:'black',
  //       backgroundColor:'white',

  //     })
  //     setBtnText("Light Mode");
  //   }
  // }

  return (
    <div className="flex h-full ">
      {/* style={myStyle} */}
      <div className="flex-1 ml-0 md:mt-28 lg:mt-20 ">
        <div className="p-4">
          {/* Dark mode button */}
          {/* <div className="flex justify-center  ">
                  <button onClick={tougleStyle} className="neon bg-white text-[#0b0b0b] font-semibold py-2 px-4 rounded-lg fixed transition duration-300 ease-in-out hover:text-green-500 focus:outline-none" > {btnText} </button>
                  </div> */}

          {/* HOME DIV    style={myStyle} */}
          <div id="home" className="h-screen bg-white shadow-md mb-6 p-4 ">
            <div className="mx-12 my-9 ">
              <h1 className="text-3xl font-bold mb-2">Text Editor</h1>
              <p>This is the Text Editor content.</p>
            </div>
            {/* text written div */}
            {/* style={myStyle} */}
            <div className="min-h-50 flex items-center justify-center bg-gray-100 p-4">
              <div className="bg-white p-2.5 rounded-lg shadow-lg w-full sm:w-full md:w-full lg:w-full  overflow-y-auto">
                <textarea
                  id="myBox" //style={myStyle}
                  className="w-full p-4 bg-gray-100 rounded-lg mt-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Write something here..."
                  rows="4"
                  value={Text}
                  onChange={handleonChange}
                ></textarea>
              </div>
            </div>
            {/* button for  Uppercase */}
            <button
              className="border-2 border-sky-500  text-white p-1.5 rounded-lg bg-sky-400 mx-3 my-2"
              onClick={handleUpclick}
            >
              Uppercase
            </button>
            {/* button for  Lowercase */}
            <button
              className="border-2 border-sky-500  text-white p-1.5 rounded-lg bg-sky-400 mx-3 my-2"
              onClick={handleLoclick}
            >
              Lowercase
            </button>

            {/* button for  Remove Extra Spaces */}
            <button
              className="border-2 border-sky-500  text-white p-1.5 rounded-lg bg-sky-400 mx-3 my-2"
              onClick={handleExtraSpaces}
            >
              Extra Space Remove
            </button>

            {/* button for  Copy Text */}
            <button
              className="border-2 border-sky-500  text-white p-1.5 rounded-lg bg-sky-400 mx-3 my-2"
              onClick={handleCopy}
            >
              Copy Text
            </button>

            {/* button for  Clear Text */}
            <button
              className="border-2 border-red-600  text-white p-1.5 rounded-lg bg-red-500 mx-3 my-2"
              onClick={handleClearclick}
            >
              Clear Text
            </button>

            {/* Your Text Summary */}
            <div className="mx-5  ">
              <h2 className="text-1xl font-bold ">Your Text Summary</h2>
              <p className="">
                {Text.split(' ').length} words and {Text.length} characters
              </p>
              <p>{0.009 * Text.split(' ').length}Minutes read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
