
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */ }
        <h2>Enter Your Name :-</h2>
        <input type="text" id="text"/>
        {
          const inputText = document.getElementById("text");

          (inputText !== "")
          ?
          <p>{`Hello ${inputText}`}</p>
          :
          <p>{`Hello User !`}</p>
        }
    </div>
  )
}

export default App
