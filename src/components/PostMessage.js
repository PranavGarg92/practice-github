import React from "react";
import "./PostMessage.css";

const PostMessage = ({ postmessage, setPostMessage }) => {
  return (
    <div className="PostMessage">
      <input
        type="text"
        value={postmessage}
        placeholder="text..."
        onChange={(e) => setPostMessage(e.target.value)}
      />
    </div>
  );
};

export default PostMessage;
