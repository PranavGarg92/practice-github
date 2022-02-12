import React from "react";
import "./PostMessage.css";

const PostMessage = ({ message, setMessage }) => {
  return (
    <div className="inp">
      <input
        type="text"
        value={message}
        placeholder="Post text.."
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default PostMessage;
