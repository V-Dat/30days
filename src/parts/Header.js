import { BrowserRouter as Router , Route, Routes, Link, Outlet} from "react-router-dom";
import About from '../pages/About/About.js'
import News from '../pages/News/News.js'
import Content from '../component/Content/Content.js';

import App1 from "../App";
import {memo} from 'react'
import './Header.css';
import '../assets/css/grid.css';
import Day1 from "../pages/Day1/Day1.js";
import Day2 from "../pages/Day2/Day2.js";
import Day3 from "../pages/Day3/Day3.js";
import Day4 from "../pages/Day4/Day4.js";
import Day5 from "../pages/Day5/Day5.js";
import Day6 from "../pages/Day6/Day6.js";
import Day7 from "../pages/Day7/Day7.js";

function Header() {
  const handleRemove = () => {
    const content = document.querySelector(".content");
    content.style = 'display: none'
    }

  const handleAdd = () => {
      const content = document.querySelector(".content");
        content.style = 'display: block'
  }


  console.log('header re-render')
  const handleShowMenu = () =>{
    console.log('show menu')
    const subNav = document.querySelector('.sub-nav');
    subNav.classList.toggle('sub-nav--active')
  }

  const handleUnShowMenu= ()=> {
    const subNav = document.querySelector('.sub-nav');
    subNav.classList.remove('sub-nav--active')
  }

  return (
    <>


    <div className="header grid " >
        <div className="nav row">
          <div className="nav__item"><Link to="/" onClick={handleAdd} >Home</Link></div>
          <div className="nav__item"><Link to="/News" onClick={handleAdd}>News</Link></div>
          <div className="nav__item"><Link to="/About" onClick={handleAdd} >About</Link></div>
          <div className="nav__item nav__item--menu" onClick={handleShowMenu} >
            <i className="fas fa-bars"></i>

          </div>
          <div className="sub-nav" onClick={handleUnShowMenu}>
                  <div className="sub-nav__item"><Link to="/About" onClick={handleAdd} >About</Link></div>
                  <div className="sub-nav__item"><Link to="/News" onClick={handleAdd}>News</Link></div>
             </div>
        </div>
    </div>

    <Routes>
          <Route  path="/"  element={<Outlet />} />
          <Route  path="/News" element={<News onClick={handleRemove}/>} />
          <Route  path="/About" element={<About onClick={handleRemove} />} />

          {/* <Route index element={<Outlet />} /> */}
          <Route path='/Day1' element={<Day1 />} /> 
          <Route path='/Day2' element={<Day2 />} /> 
          <Route path='/Day3' element={<Day3 />} /> 
          <Route path='/Day4' element={<Day4 />} /> 
          <Route path='/Day5' element={<Day5 />} /> 
          <Route path='/Day6' element={<Day6 />} /> 
          <Route path='/Day7' element={<Day7 />} /> 
    </Routes>
    </>
  );
}

export default memo(Header);
