import "./index.css";
import "../../assets/css/grid.css";
import { useState, useEffect, useRef } from "react";
import data from "../data";
let elementAudio =  document.querySelector(".audio");
let seekBar = document.querySelector(".player__seekbar > input");
function Day8() {

  const musics = data.musics;

  const indexOfCurrentSong = useRef();
  const nextRandomSong = useRef();


  const [audioCurrent, setAudioCurrent] = useState({});

  // xử lý onplaying audio
  useEffect(() => {
    
    elementAudio = document.querySelector(".audio");
    seekBar = document.querySelector(".player__seekbar > input");

    const handleSeekBarUpdate = () => {
      const percent = (elementAudio.currentTime / elementAudio.duration) * 100;
      seekBar.value = percent;
    };
    const handleSeekBarInput = (e) => {
      elementAudio.currentTime = (e.target.value / 100) * elementAudio.duration;
    };

    const handleAudioEnded = () => {
      if (document.querySelector(".fa-redo").classList.contains("active")) {
        elementAudio.currentTime = 0;
        elementAudio.play();
      }
    };

    elementAudio.addEventListener("ended", handleAudioEnded);
    seekBar.addEventListener("input", handleSeekBarInput);
    elementAudio.addEventListener("timeupdate", handleSeekBarUpdate);
    return () => {
      elementAudio.removeEventListener("timeupdate", handleSeekBarUpdate);
      seekBar.addEventListener("input", handleSeekBarInput);
      elementAudio.addEventListener("ended", handleAudioEnded);
    };
  }, [audioCurrent]);

  /// xử lý click song ở list => play
  const handleClickSong = (e) =>  ({ e, music }) => {
        document.querySelector(".icon-play").style.display = "none";
        document.querySelector(".icon-pause").style.display = "inline-block";
        
        if (e.target.className === "song__action") {
          console.log("click more ");
        } else {
          setAudioCurrent(() => music);
          indexOfCurrentSong.current = musics.indexOf(music);
        }

      }

  const handleControlMusic =  (e) => {
      console.log(e.target);
      // xử lý pause song
      if (e.target.classList.contains("icon-pause")) {
        e.target.style.display = "none";
        document.querySelector(".icon-play").style.display = "inline-block";
        document.querySelector(".audio").pause(); 
      }

      // xử lý play song
      if (e.target.classList.contains("icon-play")) {
        e.target.style.display = "none";
        document.querySelector(".icon-pause").style.display = "inline-block";

        if (indexOfCurrentSong.current === undefined) {
          indexOfCurrentSong.current = 0;
          setAudioCurrent(() => musics[indexOfCurrentSong.current]);
        } else {
          document.querySelector(".audio").play();
        } 
      }

      // xử lý repeat
      if (e.target.classList.contains("fa-redo")) {
        e.target.classList.toggle("active");
        if (indexOfCurrentSong.current === undefined) {
          e.target.click();
        } else if (indexOfCurrentSong.current !== undefined) {
          // đã có thuộc tính autoplay
        }
      }

      // xử lý btn random
      if (e.target.classList.contains("fa-random")) {
        e.target.classList.toggle("active");
        if (indexOfCurrentSong.current === undefined) {
          e.target.click();
        } else {
          nextRandomSong.current = Math.floor(Math.random() * musics.length);
          console.log("nextRandomSong.current", nextRandomSong.current);
        }
      }

      // xử lý next song
      if (e.target.classList.contains("fa-step-forward")) {
        document.querySelector(".icon-play").style.display = "none";
        document.querySelector(".icon-pause").style.display = "inline-block";

        if (document.querySelector(".fa-random").classList.contains("active")) {
          setAudioCurrent(
            () => {
              indexOfCurrentSong.current = nextRandomSong.current = Math.floor(
                Math.random() * musics.length
              );
              console.log("nextRandomSong.current", nextRandomSong.current);
              console.log("indexOfCurrentSong.current", indexOfCurrentSong.current);
              return musics[nextRandomSong.current];
            }
            /// nếu có repeat acctive
          );
        } else if (
          document.querySelector(".fa-redo").classList.contains("active")
        ) {
          elementAudio.currentTime = 0;
        } else {
          if (indexOfCurrentSong.current < musics.length - 1) {
            indexOfCurrentSong.current++;
          } else {
            indexOfCurrentSong.current = 0;
          }
          setAudioCurrent(() => musics[indexOfCurrentSong.current]);
        }
      }
      // xử lý prev song
      if (e.target.classList.contains("fa-step-backward")) {
        document.querySelector(".icon-play").style.display = "none";
        document.querySelector(".icon-pause").style.display = "inline-block";

        if (document.querySelector(".fa-random").classList.contains("active")) {
          setAudioCurrent(
            () => {
              indexOfCurrentSong.current = nextRandomSong.current = Math.floor(
                Math.random() * musics.length
              );
              console.log("nextRandomSong.current", nextRandomSong.current);
              console.log("indexOfCurrentSong.current", indexOfCurrentSong.current);
              return musics[nextRandomSong.current];
            }

            /// nếu có repeat acctive
          );
        } else if (
          document.querySelector(".fa-redo").classList.contains("active")
        ) {
          elementAudio.currentTime = 0;
        } else {
          if (indexOfCurrentSong.current > 0) {
            indexOfCurrentSong.current--;
          } else {
            indexOfCurrentSong.current = musics.length - 1;
          }
          setAudioCurrent(() => musics[indexOfCurrentSong.current]);
        }
      }
    } 

  console.log("Re-render ");

  return (
    <div className="day8 grid wide">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <div className="music-player player">
            <div className="player__playing">Current Song:</div>
            <div className="player__title">
              {audioCurrent.name == null ? "Tên Bài Hát" : audioCurrent.name}
            </div>
            <div className="player__image">
              <img
                className="player__image__url"
                alt="Tên bài hát"
                src={
                  process.env.PUBLIC_URL + `${audioCurrent.image}` ===
                  "undefined"
                    ? process.env.PUBLIC_URL + "/img/day8/default.jpg"
                    : process.env.PUBLIC_URL + `${audioCurrent.image}`
                }
              />
            </div>
            <div
              className="player__control btn"
              onClick={(e) => handleControlMusic(e)}
            >
              <div className="btn-repeat">
                <i className="fas fa-redo"></i>
              </div>
              <div className="btn-prev">
                <i className="fas fa-step-backward"></i>
              </div>
              <div className="btn-toggle-play">
                <i className="fas fa-pause icon-pause"></i>
                <i className="fas fa-play icon-play"></i>
              </div>
              <div className="btn-next">
                <i className="fas fa-step-forward"></i>
              </div>
              <div className="btn-random">
                <i className="fas fa-random"></i>
              </div>
            </div>
            <div className="player__seekbar">
              <input
                id="progress"
                className="progress"
                type="range"
                defaultValue="0"
                step="1"
                min="0"
                max="100"
              />
            </div>
            <audio
              id="audio"
              className="audio"
              src={audioCurrent.mp3}
              autoPlay={true}
            ></audio>

            <div className="songs">
              {musics.map((music) => (
                <div
                  key={music.mp3}
                  className="song"
                  onClick={(e) => handleClickSong({ e, music })}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day8;
