import React from "react";
import "./Gif.css";

const Gif = ({ item }) => {
  return (
    <div className="Gif">
      <img src={item} alt="err" />
    </div>
  );
};

export default Gif;
