import React from 'react'
import { useDispatch } from 'react-redux';
import SongPlayer from './SongPlayer'

function ListSongPlayer({musics }) {
  const dispatch = useDispatch();

  const handleClickSong = (music) => {
    dispatch({type:'Goto', payload: { ...music , index: Number(musics.indexOf(music)) }} )
  }

  return (
    <div className="songs">
      {/* {Boolean(musics) + "musics"  + musics.length} */}
    {musics.length === undefined ?<div className="loading"></div> :  musics.map((music) => (
     <SongPlayer key={music.name + music.author}  music={music}  handleClickSong= {handleClickSong} />
    ))}
  </div>  )
}

export default ListSongPlayer