import "./App.css";
import Gifs from "./components/Gifs";
import PostMessage from "./components/PostMessage";
import { useState } from "react";

function App() {
  const [post, setPost] = useState({ pmeg: "", pgif: "" });
  const [message, setMessage] = useState("");
  const [gifis, setgifis] = useState("");

  const handleClick = ({ gifis, message, post, setPost }) => {
    const newPost = { pmeg: message, pgif: gifis };
    setPost([...post, newPost]);
    setMessage("");
    setgifis("");
  };

  return (
    <div className="App">
      <div className="input">
        <PostMessage message={message} setMessage={setMessage} />
        <Gifs gifis={gifis} setgifis={setgifis} />
      </div>
      <div className="show">
        <h2>{message}</h2>
        <img src={gifis} alt="" />
        <div>
          <button
            onClick={() => handleClick({ gifis, message, post, setPost })}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
