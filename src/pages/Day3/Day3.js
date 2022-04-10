import "./index.css";
import {useEffect} from "react"

function Day3() {
  console.log('Day3: render....')

  const handleOpenModel = () =>{
    const openModel = document.querySelector('.dialog--hide')
    openModel.classList.toggle('dialog--show')
  }

  const handleCloseModel = () =>{
    const openModel = document.querySelector('.dialog--hide')
    openModel.classList.toggle('dialog--show')
  }

  useEffect(() => {
    const searchBox = document.querySelector('.search-box')
    const searchBox__input = document.querySelector('.search-box__input')
    const searchBox__button = document.querySelector('.search-box__button')
    
      searchBox.addEventListener('click', function(e){
        if(e.target.classList.contains('search-box__input')){
          console.log('please input sthg')
        }else{
          searchBox__button.classList.toggle('search-box__button--active')
          searchBox__input.focus();
          searchBox__input.classList.toggle('search-box__input--active')
      }})
  } , [])




  return (
    <>
      <div className="day3">
      <div className="dialog--hide ">
        <div className="dialog__inner">
          <div className="dialog__header">
            <p>Welcome to my website</p>
            <i className="fas fa-times" onClick={handleCloseModel} ></i>
          </div>
          <div className="dialog__body">
            <h2>Modal</h2>
            <p>Đây là phần nội dung thông báo</p>
          </div>
          <div className="dialog__footer">
            <button onClick={handleCloseModel}>Close</button>
          </div>
        </div>
      </div>
      <button className="dialog__btnOpen" onClick={handleOpenModel}>Open Modal</button>

    <div className='break' >  </div>

      <div className="search-box">
        <input className ="search-box__input"type="text" />
        <button className ="search-box__button"><i className=' fa fa-search'></i></button>
      </div>

      </div>
    </>
  );
}

export default Day3;
