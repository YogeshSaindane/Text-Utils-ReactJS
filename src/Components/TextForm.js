import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  const [textField1, setTextField1] = useState("");
  const textFieldOnChange = (event) => {
    console.log("text Field On Change called");
    setTextField1(event.target.value);
  };
  const upperCaseClicked = (event1) => {
    console.log("upper case clicked" + textField1);
    let newText = textField1.toUpperCase();
    setTextField1(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const lowerCaseClicked = (event1) => {
    console.log("upper case clicked" + textField1);
    let newText = textField1.toLowerCase();
    console.log(newText);
    // setTextField1("new text set");
    setTextField1(newText);
    props.showAlert("Lower Case", "success")
  };
  const clearTextClicked = () => {
    setTextField1("");
    console.log(props.showAlert)
    props.showAlert("cleared text", "success");
  };
  const copyTextClicked = () => {
    console.log({ textField1 });
    navigator.clipboard.writeText(textField1);
    props.showAlert("Copy text", "success")
  };
  const removeExtraSpaces = () => {
    let newText = textField1.split(/[  ]+/)
    setTextField1(newText.join(" "))
    props.showAlert("Removed extra space", "success");
  } 
  return (
    <>
      <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <h1>{props.header1}</h1>
        <textarea
          className="form-control"
          value={textField1}
          onChange={textFieldOnChange}
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Enter text here"
          style={{backgroundColor: props.mode === "dark"?"grey":"white", color: props.mode === "dark"?"white":"black"}}
        ></textarea>
      </div>
      <div className="container my-2" style={{color: props.mode === "dark"?"white":"black"}}>

      <button className="btn btn-primary mx-1" onClick={upperCaseClicked}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={lowerCaseClicked}>
        LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={clearTextClicked}>
        Clear text
      </button>
      <button className="btn btn-primary mx-1" onClick={copyTextClicked}>
        Copy text
      </button>
      <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
      Remove Extra Spaces
      </button>
      </div>

      <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <h1>Your text summmary</h1>
        <li>Total words:{textField1.split(" ").length}</li>
        <li>Total character: {textField1.length}</li>
        <li>
          Estimate time to read: {0.01 * textField1.split(" ").length} mins
        </li>
        <h2>Preview</h2>
        <p>{textField1?textField1:"Enter something in above textfield to preview here"}</p>
      </div>
    </>
  );
}
TextForm.propsType = {
  header1: PropTypes.string,
};
