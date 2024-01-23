import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase !", "success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase !", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared !", "success");
  };
  

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard !", "success");
  };
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces are removed!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container"style={{color :props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor :props.mode==='dark'?'#13466e':'white',color :props.mode==='dark'?'White':'#042743'}}
            id="myBox"
            rows="8"
            
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{color :props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} your words and {text.length} your character
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0 }).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
