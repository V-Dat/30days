import {  useSelector } from "react-redux";

function InforPlayer({}) {
  const audioCurrent = useSelector(state => state.currentMusicReducer)
  return (
      <>
    <div className="player__playing">Current Song:</div>
    <div className="player__title">
      { 'Tên Bài Hát' }
    </div>
    <div className="player__image">
      <img
        className="player__image__url"
        alt="Tên bài hát"
        src={
          process.env.PUBLIC_URL + `${audioCurrent.image}` === "undefined"
            ? process.env.PUBLIC_URL + "/img/day8/default.jpg"
            : process.env.PUBLIC_URL + `${audioCurrent.image}`
        }
      />
    </div> 
      </>
     )
}

export default InforPlayer