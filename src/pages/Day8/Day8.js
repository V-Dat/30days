import "./index.css";

import { useEffect, useRef } from "react";
import listMusicDefault from "./listMusicDefault";
import HeadPlayer from "../../component/Day8/HeadPlayer/HeadPlayer.js";
import ListMusic from "../../component/Day8/ListMusic/ListMusic.js";
import { useDispatch } from "react-redux";

function Day8() {
  const dispatch = useDispatch();
  const listMusicsDefault = useRef(listMusicDefault);

  // fetch API
  useEffect(() => {
    async function fetchData(url) {
      const response = (await fetch(url)).json();

      if (!response.ok) {
        dispatch({ type: "CallApiFail", payload: listMusicsDefault.current });
        return;
      }
      response.tracks.map((music) =>
        ({
          name: music.title,
          author: music.subtitle,
          image: music.share.image,
          mp3: music.hub.actions[1].uri,
        }.then((listMusics) =>
          dispatch({ type: "CallApiSuccess", payload: { listMusics } })
        ))
      );
    }

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
        "X-RapidAPI-Key": "133fe65fa7mshe516306653845c7p1d8a3fjsn978f38253748",
      },
    };

    fetchData(
      "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US",
      options
    );
  });

  return (
    <div className="day8 grid wide">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <div className="music-player player">
            <HeadPlayer />
            <ListMusic />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day8;
