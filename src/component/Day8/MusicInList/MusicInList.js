import "./MusicInList.css";

import React from "react";
import { v4 as uuidv4 } from 'uuid';

function MusicInList({ music, handleClickMusicInList }) {
  return (
    <div
      key={uuidv4()}
      className="music"
      onClick={() => handleClickMusicInList(music)}
    >
      <div className="music__image">
        <img
          className="music__image__url"
          alt="Tên bài hát"
          src={process.env.PUBLIC_URL + `${music.image}`}
        />
      </div>
      <div className="music__infor">
        <p className="music__infor__name">{music.name}</p>
        <i className="music__infor__author">{music.author}</i>
      </div>
      <div className="music__action">...</div>
    </div>
  );
}

export default MusicInList;
