import React from "react";
import "./PostMessage.css";

const PostMessage = ({ message, setMessage }) => {
  return (
    <>
      <input
        type="text"
        value={message}
        placeholder="text.."
        onChange={(e) => setMessage(e.target.value)}
      />
    </>
  );
};

export default PostMessage;
