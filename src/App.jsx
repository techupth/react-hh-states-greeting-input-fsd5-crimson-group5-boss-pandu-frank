import "./App.css";
import { useState } from "react";

function App() {
  //input message
  const [inputMessage, setInputMessage] = useState("");
  const userText = (event) => {
    setInputMessage(event.target.value);
    value = { inputMessage };
  };
  //output message
  const [outputMessage, setOutputMessage] = useState("Greeting Message");
  const showText = () => {
    setOutputMessage(inputMessage);
  };
  return (
    <div className="App">
      <div className="greeting-container">{outputMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={userText} />
      </div>

      <div className="buttons">
        <button onClick={showText}>Update text</button>
      </div>
    </div>
  );
}

export default App;
