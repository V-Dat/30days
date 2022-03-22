import React from "react";

function SongPlayer({music, handleClickSong}) {
  return (
    <div
      key={music.mp3}
      className="song"
      onClick={ () => handleClickSong(music) }
    >
      <div className="song__image">
        <img
          className="song__image__url"
          alt="Tên bài hát"
          src={process.env.PUBLIC_URL + `${music.image}`}
        />
      </div>
      <div className="song__infor">
        <p className="song__infor__name">{music.name}</p>
        <i className="song__infor__author">{music.author}</i>
      </div>
      <div className="song__action">...</div>
    </div>
  );
}

export default SongPlayer;
