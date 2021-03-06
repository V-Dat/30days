import "./ListMusic.css";

import MusicInList from "../MusicInList/MusicInList.js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function ListMusic() {
  const dispatch = useDispatch();

  const listMusics = useSelector((state) => state.listMusicsReducer);
  const audioCurrent = useSelector((state) => state.currentMusicReducer);

  const handleClickMusicInList = (music) => {
    audioCurrent.isPlaying = true;

    dispatch({
      type: "Goto",
      payload: {
        ...music,
        index: Number(listMusics.indexOf(music)),
        isPlaying: true,
      },
    });
  };
  return (
    <div className="listMusic">
      {listMusics.length === undefined ? (
        <div className="loading"></div>
      ) : (
        listMusics.map((music) => (
          <MusicInList
            key={uuidv4()}
            music={music}
            handleClickMusicInList={handleClickMusicInList}
          />
        ))
      )}
    </div>
  );
}

export default ListMusic;
