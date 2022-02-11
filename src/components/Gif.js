import React from "react";
import "./Gif.css";

const Gif = ({ item, gifis, setgifis }) => {
  return (
    <div className="Gif">
      <img src={item} alt="err" onClick={() => setgifis(item)} />
    </div>
  );
};

export default Gif;
