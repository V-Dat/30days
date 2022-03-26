import "./ListMusic.css";

import MusicInList from "../MusicInList/MusicInList.js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ListMusic() {
  const dispatch = useDispatch();

  const listMusics = useSelector((state) => state.listMusicsReducer);
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  const handleClickMusicInList = (music) => {
    audioCurrent.isPlaying = true;

    dispatch({
      type: "Goto",
      payload: { ...music, index: Number(listMusics.indexOf(music)) , isPlaying: true},
    });
  };
  console.log("render listMusics", listMusics);
  return (
    <div className="listMusic">
      {/* {Boolean(listMusics) + "listMusics"  + listMusics.length} */}
      {listMusics.length === undefined ? (
        <div className="loading"></div>
      ) : (
        listMusics.map((music) => (
          <MusicInList
            key={music.name + music.author}
            music={music}
            handleClickMusicInList={handleClickMusicInList}
          />
        ))
      )}
    </div>
  );
}

export default ListMusic;
