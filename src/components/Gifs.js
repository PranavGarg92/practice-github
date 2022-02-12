import React, { useState } from "react";
import Gif from "./Gif";
import "./Gifs.css";

const Gifs = ({ gifis, setgifis, gifs, setGifs }) => {
  const [search, setSearch] = useState("");

  const GIPHY_API = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=Ab3yulSspzhg4RIKnkgdrhNkgHSoSSsc&limit=5`;

  const searchGif = (e) => {
    setGifs([]);
    e.preventDefault();
    setSearch("");
    if (search.length > 0) {
      fetch(GIPHY_API)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          setGifs(
            result.data.map((gif) => {
              return gif.images.fixed_height.url;
            })
          );
        })
        .catch(() => {
          alert("ERROR");
        });
    }
  };

  return (
    <div className="Gifs">
      <div className="header">
        <input
          type="text"
          placeholder="Search Gifs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" onClick={searchGif}>
          Search
        </button>

        <p>click on gif to select</p>
        <div>
          {gifs.map((item) => {
            return <Gif item={item} gifis={gifis} setgifis={setgifis} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gifs;

// const searchGif = (e) => {
//   setGifs([]);
//   e.preventDefault();
//   setSearch("");
//   if (search.length > 0) {
//     fetch(GIPHY_API)
//       .then((res) => {
//         return res.json();
//       })
//       .then((result) => {
//         setGifs(
//           result.data.map((gif) => {
//             return gif.images.fixed_height.url;
//           })
//         );
//       })
//       .catch(() => {
//         alert("ERROR");
//       });
//   }
// };
