import './App.css';
import Header from './parts/Header'
import Footer from './parts/Footer'
import Content from './component/Content/Content.js';
import {  BrowserRouter as Router,  Routes,  Route, } from "react-router-dom";
import { useMemo } from "react"
function App() {


  if(window.location.href == 'http://localhost:3000/'){
  }



  const handleHideContent = (e) => {
  }


  return (
    <>
    <Router>
      <Header />
      <br/>
      <Content  onClick= { (e) => {
            if (e.target.closest(".preview") && window.location.href !== 'http://localhost:3000/')  {
            const content = document.querySelector('.content')
            content.setAttribute("style", "display: none;");
            
            console.log('handleHideContent')
          }
      }} /> 
    </Router>
      <Footer />
    
    </>
  );
}

export default App;


