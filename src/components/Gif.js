import React from "react";
import "./Gif.css";

const Gif = ({ item, showGif, setShowGif }) => {
  const handelClick = ({ item, setShowGif }) => {
    setShowGif(setShowGif);
  };

  return (
    <div className="Gif">
      <img src={item} alt="err" onClick={() => handelClick(item, setShowGif)} />
    </div>
  );
};

export default Gif;
