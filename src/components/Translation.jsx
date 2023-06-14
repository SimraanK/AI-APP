import React from "react";




export default function Translation({ doStuff, setInput, result }) {


  
  return (


    
    <div>
      <textarea placeholder="Start Writing "
        className="text-area" 
        id="myTextarea"    
        cols={66} 
        rows={5}
        onClick={autoGrow}
        onKeyDown={autoGrow}
        onInput={(e) => setInput(e.target.value)}
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

  function autoGrow() {
    const textarea = document.getElementById('myTextarea');
    textarea.style.height = 'auto'; // Reset height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
  }
  

  
  function Refresh() {
    window.parent.location = window.parent.location.href;
}






}