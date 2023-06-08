import React from "react";




export default function Translation({ doStuff, setInput, result }) {
  return (


    
    <div>
      <textarea placeholder="Start Writing "
        className="text-area"
        cols={66}
        rows={5}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div className="btns">
        <button className="action-btn" onClick={doStuff}>
          Get Answers from AI
        </button>
        <button type="button" className="reload-btn" onClick={Refresh} >
          Back
        </button>
      </div>
      <div className="para">
        <p className="result-text">{result.length > 0 ? result : ""}</p>
      </div>
    </div>
    
  );

  
  function Refresh() {
    window.parent.location = window.parent.location.href;
}



}