import "./index.css";
import "../../assets/css/grid.css";

import {  useEffect, useRef } from "react";
import data from "../data";
import HeadPlayer from "../../component/Day8/HeadPlayer";
import ListSongPlayer from "../../component/Day8/ListSongPlayer";
import {  useDispatch } from "react-redux";

function Day8() {
  const dispatch = useDispatch();
  const listMusicsDefault = useRef(data.musics);

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
        }, }
        )
          .then((response) => response.json())
          .then((response) =>
          response.tracks.map((music) => {
              return {
                name: music.title,
                author: music.subtitle,
                image: music.share.image,
                mp3: music.hub.actions[1].uri,
              };
            })
          )
          .then((listMusics) => dispatch({type:'CallApiSucess' , payload: {listMusics} }))
          .then(() => console.log("fetch"))
          .catch((err) => {
            dispatch({type:'CallApiFail' , payload: listMusicsDefault.current  })
            console.log("Fetch Error: " + err.message + '12312312312');
          });
      }, []);


  return (
    <div className="day8 grid wide">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <div className="music-player player">
            <HeadPlayer />
            <ListSongPlayer  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day8;
