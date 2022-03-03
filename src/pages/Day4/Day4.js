import "./index.css";
import "../../assets/css/grid.css";
import { useState, useEffect } from "react";
import data from "../data";

function Day4() {
  const galary = data.galary;
  const listUrlImage = galary.map((e) => e.url);
  const image = document.querySelector(".control__image > img");
  let indexOfCurrentImageUrl
  let currentImageUrl
  let indexOfNextImage ;
  let indexOfPrevImage ;


  console.log('Day4: render....')


  const[imageUrl, setImageUrl] = useState('')


  const HandleGalary = (e) => {
    
  const control = document.querySelector(".control");

// handle click picture in list 
    if (e.target.closest(".galary__image")) {
      control.style.display = "block";
      currentImageUrl = `.${e.target.src.toString().slice(21)}`;

      setImageUrl( currentImageUrl )
      console.log('handle click picture ')
    }
// handle close
    if (e.target.closest(".control__close")) {
      control.style.display = "none";

    console.log('handle close')
    }
// handle click next
    if(e.target.closest(".control__next")){

      currentImageUrl =`.${image.src.slice(image.src.indexOf(`/img`) ,image.src.length )}` 
      indexOfCurrentImageUrl = listUrlImage.indexOf(currentImageUrl);
      if(indexOfCurrentImageUrl >= listUrlImage.length -1 ){ 
        indexOfNextImage = 0
      }else{
        indexOfNextImage = indexOfCurrentImageUrl + 1;
        indexOfPrevImage = indexOfCurrentImageUrl - 1;
      }


      image.src = `${listUrlImage[indexOfNextImage]}`
        console.log('indexOfCurrentImageUrl: ' + indexOfNextImage)
    }
// handle click prev

    if(e.target.closest(".control__prev")){
      currentImageUrl =`.${image.src.slice(image.src.indexOf(`/img`) ,image.src.length )}` 
      indexOfCurrentImageUrl = listUrlImage.indexOf(currentImageUrl);
      if(indexOfCurrentImageUrl == 0  ){ 
        indexOfPrevImage = listUrlImage.length -1
      }else{
        indexOfNextImage = indexOfCurrentImageUrl + 1;
        indexOfPrevImage = indexOfCurrentImageUrl - 1;
      }

      image.src = `${listUrlImage[indexOfPrevImage]}`
        console.log('indexOfCurrentImageUrl: ' + indexOfPrevImage)
    }
    }


  return (
    <>
      {/* galary list  */}
      <div className="day4 grid wide">
        <div className="row" onClick={(e) => HandleGalary(e)}>
          {galary.map((picture) => (
            <div key={picture.name} className="galary col l-3 m-4 c-12">
              <img
                className="galary__image"
                src={picture.url}
                alt={picture.name}
              />
            </div>
          ))}

          <div className="control wide">
            <span className="control__close">
              <i className="fas fa-times close"></i>
            </span>

            <span className="control__prev"  >
              <i className="fas fa-chevron-left"></i>
            </span>

            <span className="control__next">
              <i className="fas fa-chevron-right"></i>
            </span>

            <div className="control__image">
              <img alt={imageUrl} src={imageUrl} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Day4;

// <div className="skill">
// {skill.map((e) => (
//   <>
//     <div className="skill__left">
//       <p>{e.key}</p>
//     </div>
//     <div className="skill__right">
//       <p>{e.value}</p>
//     </div>
//   </>
// ))}
// </div>