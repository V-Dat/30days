import "./slider.css";
import { useState, memo } from "react";

function Slider( {data} ) {

  const [image1 , setImage ] = useState(0)

  const handleClick = (e) => {

    console.log(e.target)
    if(e.target.classList.contains('fa-less-than')){
      console.log('đây là nút back')
      setImage( (prev) => {
        if(prev == 0){
          return ( prev = data.listImage.length -1 )}
          else{return (prev-1)}
      })}


    if(e.target.classList.contains('fa-greater-than')){
      console.log('đây là nút next')
      setImage( (prev) => {
      if(prev < data.listImage.length -1 ){
        return ( prev+1)}
        else{return (prev = 0)}
    })}

  if(e.target.parentNode.parentNode == ''){}
  }
  return (
        <div class="project">
          <h2 className="project__title"><span>{data.title}</span></h2>
          <div className="project__link"><a href={data.link}>Nhấn vào đây để xem web</a></div>
          <div className="project__slideShow" onClick={(e) => handleClick(e)}>
                <div className="project-slideShow__image"> <img src={data.listImage[image1]}/> </div>
                <div className="project-slideShow__btnLeft"><i class="fa-solid fa-less-than"></i></div> 
                <div className="project-slideShow__btnRight"><i class="fa-solid fa-greater-than"></i></div> 
          </div>
          <div className="project__description">
              <div  className="project-description-left">
                <h3>Mô Tả Project</h3>
                {data.leftDescription.map(e => 
                <p key={e}>{e}</p>
                )}
              </div>
              <div className="project-description-right">
                <h3>Công Nghệ Sử Dụng</h3>
                {data.rightDescription.map(e => 
                <p key={e}>{e}</p>
                )}
              </div>
          </div>
          </div>
  )}
export default memo(Slider)
