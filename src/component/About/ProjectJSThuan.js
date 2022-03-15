import "./project.css";
import { useState, useEffect } from "react";

function Project( {data} ) {

  const [image1 , setImage1 ] = useState(0)
  const [image2 , setImage2 ] = useState(0)

  const handleClick1 = (e) => {

    console.log(e.target)
    if(e.target.classList.contains('fa-less-than')){
      console.log('đây là nút back')
      setImage1( (prev) => {
        if(prev === 0){
          return ( prev = data[0].listImage.length -1 )}
          else{return (prev-1)}
      })}


    if(e.target.classList.contains('fa-greater-than')){
      console.log('đây là nút next')
      setImage1( (prev) => {
      if(prev < data[0].listImage.length -1 ){
        return ( prev+1)}
        else{return (prev = 0)}
    })}



  if(e.target.parentNode.parentNode === ''){}
  }
  
  const handleClick2 = (e) => {

    console.log(e.target)
    if(e.target.classList.contains('fa-less-than')){
      console.log('đây là nút back')
      setImage2( (prev) => {
        if(prev === 0){
          return ( prev = data[0].listImage.length -1 )}
          else{return (prev-1)}
      })}


    if(e.target.classList.contains('fa-greater-than')){
      console.log('đây là nút next')
      setImage2( (prev) => {
      if(prev < data[0].listImage.length -1 ){
        return ( prev+1)}
        else{return (prev = 0)}
    })}



  if(e.target.parentNode.parentNode === ''){}
  }

  console.log(image1)
  console.log(image2)
  return (
    <div class="wrapper">
        <div class="project">
          <h2 className="project__title"><span>{data[0].title}</span></h2>
          <div className="project__link"><a href={data[0].link}>Nhấn vào đây để xem web</a></div>
          <div className="project__slideShow" onClick={(e) => handleClick1(e)}>
                <div className="project-slideShow__image"> <img src={data[0].listImage[image1]}/> </div>
                <div className="project-slideShow__btnLeft"><i class="fa-solid fa-less-than"></i></div> 
                <div className="project-slideShow__btnRight"><i class="fa-solid fa-greater-than"></i></div> 
          </div>
          <div className="project__description">
              <div  className="project-description-left">
                <h3>Mô Tả Project</h3>
                {data[0].leftDescription.map(e => 
                <p key={e}>{e}</p>
                )}
              </div>
              <div className="project-description-right">
                <h3>Công Nghệ Sử Dụng</h3>
                {data[0].rightDescription.map(e => 
                <p key={e}>{e}</p>
                )}
              </div>
          </div>
          </div>

          <div class="project">
          <h2 className="project__title"><span>{data[1].title}</span></h2>
          <div className="project__link"><a href={data[1].link}>Nhấn vào đây để xem web</a></div>
          <div className="project__slideShow" onClick={(e) => handleClick2(e)}>
                <div className="project-slideShow__image"> <img src={data[1].listImage[image2]}/> </div>
                <div className="project-slideShow__btnLeft"><i class="fa-solid fa-less-than"></i></div> 
                <div className="project-slideShow__btnRight"><i class="fa-solid fa-greater-than"></i></div> 
          </div>
          <div className="project__description">
              <div  className="project-description-left">
                <h3>Mô Tả Project</h3>
                {data[1].leftDescription.map(e => 
                <p key={e}>{e}</p>
                )}
              </div>
              <div className="project-description-right">
                <h3>Công Nghệ Sử Dụng</h3>
                {data[1].rightDescription.map(e => 
                <p key={e}>{e}</p>
                )}
              </div>
          </div>
          </div>

      </div>

  )}
export default Project
