import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SongPlayer from "./SongPlayer";

function ListSongPlayer() {
  const dispatch = useDispatch();

  const listMusics = useSelector((state) => state.listMusicsReducer);

  const handleClickSong = (music) => {
    dispatch({
      type: "Goto",
      payload: { ...music, index: Number(listMusics.indexOf(music)) },
    });
  };
  console.log("render listsong", listMusics);
  return (
    <div className="songs">
      {/* {Boolean(listMusics) + "listMusics"  + listMusics.length} */}
      {listMusics.length === undefined ? (
        <div className="loading"></div>
      ) : (
        listMusics.map((music) => (
          <SongPlayer
            key={music.name + music.author}
            music={music}
            handleClickSong={handleClickSong}
          />
          ))
      )}
    </div>
  );
}

export default ListSongPlayer;
