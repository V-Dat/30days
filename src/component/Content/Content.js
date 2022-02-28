import "./index.css";
import "../../assets/css/grid.css";

import data from "../../pages/data.js"
import Day1 from "../../pages/Day1/Day1";
import Day2 from "../../pages/Day2/Day2";
// import App from "../App.Js";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import {  useState , useEffect} from "react";

function Content( {onClick}) {

  const [show , setShow] = useState('display: none');
  const [url , setUrl] = useState( () => {return document.location } )
  const imageList = data.imageList
  
  console.log('content homepage re-render')

  useEffect(() =>{
    setShow( (prev) => {
      if(prev === 'display: block'){
        return 'display: none';
      }
      return 'display: block'
    })
  },[])

  useEffect(() => {
    const content = document.querySelector('.content');
    content.style = 'display: block'
    if(url.href !== 'http://localhost:3000/'){
      content.style = 'display: none'
    }else if(url.href == 'http://localhost:3000/'){
      // console.log('your homepages')
    }
  }
  ,[])


  return (
    <>
      <div className="content grid wide" onClick={() => onClick()}>
        <div className="row">
          {imageList.map( (e) => (
          <div key={e.index+e.name} className="preview col l-3 m-6 c-12">
            <Link to={e.url}>
                <img className="preview__image" src={e.imageUrl} alt={e.name} />
                <h2 className="preview__title">{e.name}</h2>
            </Link>
          </div>
          ))}
        </div>
      </div>
      <div className="root2 grid wide " style={{show}}>
        <Routes>
          <Route path="/" element={<Outlet />} />
          
          <Route path="/Day1" element={<Day1 />} />
          <Route path="/Day2" element={<Day2 />} />
        </Routes>
      </div>
    </>
  );
}

export default Content;
