import React, { useState } from "react";

export default function Translation({ doStuff, setInput, result }) {
  const [isTextareaClicked, setTextareaClicked] = useState(false);

  const handleTextareaClick = () => {
    setTextareaClicked(true);
  };

  const handleTextareaInput = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setInput(e.target.value);
  };

  function Refresh() {
    window.parent.location = window.parent.location.href;
  }

  return (
    <div>
      <textarea
        placeholder="Start Writing "
        className={`text-area ${isTextareaClicked ? "up" : ""}`}
        cols={66}
        rows={5}
        onClick={handleTextareaClick}
        onChange={handleTextareaInput}
      ></textarea>
      <div className="btns">
        <button className="action-btn" onClick={doStuff}>
          Get Answers from AI
        </button>
        <button type="button" className="reload-btn" onClick={Refresh}>
          Back
        </button>
      </div>
      <div className="para">
        <p className="result-text">{result.length > 0 ? result : ""}</p>
      </div>
    </div>
  );
}
