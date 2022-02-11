import "./App.css";
import Gifs from "./components/Gifs";
import PostMessage from "./components/PostMessage";
import { useState } from "react";

function App() {
  const [post, setPost] = useState([]);
  const [message, setMessage] = useState("");
  const [gifis, setgifis] = useState("");

  const handleClick = () => {
    const newPost = { pmes: message, pgif: gifis };
    setPost((prev) => [...prev, newPost]);
    setMessage("");
    setgifis("");
  };

  console.log(post);
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
          <button onClick={handleClick}>Post</button>
        </div>
      </div>
      <div className="postshow">
        {post.map((item) => {
          return (
            <>
              <h2>{item.pmes}</h2>
              <img src={item.pgif} alt="" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
