import "./index.css";
import "../../assets/css/grid.css";

import { useState, useEffect, useRef } from "react";
import data from "../data";
import HeadPlayer from "../../component/Day8/HeadPlayer";
import ListSongPlayer from "../../component/Day8/ListSongPlayer";

function Day8() {
  const listmusics = useRef(data.musics)
  let [musics, setMusics] = useState({});

  // fetch API
  useEffect(() => {
    fetch(
      "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "d14273a324msh55af19a5d1083b4p11dffejsn91db4945117a",
        },
      }
    )
      .then((apiData) => apiData.json())
      .then((apiData) =>
        apiData.tracks.map((song) => {
          return {
            name: song.title,
            author: song.subtitle,
            image: song.share.image,
            mp3: song.hub.actions[1].uri,
          };
        })
      )
      .then((listSong) => setMusics(listSong))
      .then(() => console.log("fetch"))
      .catch((err) => {
        setMusics(listmusics.current);
        console.log("Fetch Error: " + err.message);
      });
  }, []);

  /// xử lý click song ở list => play

  return (
    <div className="day8 grid wide">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <div className="music-player player">
            <HeadPlayer musics={musics} />
            <ListSongPlayer musics={musics} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day8;
