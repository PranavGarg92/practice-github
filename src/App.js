import "./App.css";
import Gifs from "./components/Gifs";
import PostMessage from "./components/PostMessage";
import { useState } from "react";

function App() {
  const [post, setPost] = useState([]);
  const [message, setMessage] = useState("");
  const [gifis, setgifis] = useState("");

  const [gifs, setGifs] = useState([]);

  const handleClick = () => {
    if (message) {
      const newPost = { pmes: message, pgif: gifis, date: new Date() };
      setPost((prev) => [...prev, newPost]);
      setMessage("");
      setgifis("");
      setGifs([]);
    } else {
      alert("Please add text message");
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Post inputs</h1>
      <div className="input">
        <PostMessage message={message} setMessage={setMessage} />
        <Gifs gifis={gifis} setgifis={setgifis} gifs={gifs} setGifs={setGifs} />
      </div>
      <div>
        <h1 className="heading">Post preview</h1>
        <div className="show">
          <h2>{message}</h2>
          <img src={gifis} alt="" />
          <div>
            <button onClick={handleClick}>Post</button>
          </div>
        </div>
        <div>
          <h1 className="heading">Posts</h1>
          {post.map((item) => {
            return (
              <div className="postshow">
                <h2>{item.pmes}</h2>
                <img src={item.pgif} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
