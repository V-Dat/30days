import "./App.css";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Content from "./component/Content/Content.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
function App() {
///deploy : yarn run deploy
//https://vandatproject.surge.sh/
      //   const handleHideContent = (e) => {
      //     if (
      //       e.target.closest(".preview") &&
      //       window.location.href !== "https://vandatproject.surge.sh/"
      //     ) {
      //       const content = document.querySelector(".content");
      //       content.setAttribute("style", "display: none;");

      //       console.log("handleHideContent");
      //     }
      //   }

      // window.addEventListener("load", function(){
      //   if (window.location.href == "https://vandatproject.surge.sh/") {
      //     const content = document.querySelector(".content");
      //     content.setAttribute("style", "display: block;");
      //   }else{
      //     const content = document.querySelector(".content");
      //     content.setAttribute("style", "display: none;");
      //   }
      // });
      // window.addEventListener('popstate', function(){
      //   if (window.location.href == "https://vandatproject.surge.sh/") {
      //     const content = document.querySelector(".content");
      //     content.setAttribute("style", "display: block;");
      //   }else{
      //     const content = document.querySelector(".content");
      //     content.setAttribute("style", "display: none;");
      //   }
      // });
//http://localhost:3000/
const handleHideContent = (e) => {
  if (
    e.target.closest(".preview") &&
    window.location.href !== "http://localhost:3000/"
  ) {
    const content = document.querySelector(".content");
    content.setAttribute("style", "display: none;");

    console.log("handleHideContent");
  }
}

window.addEventListener("load", function(){
if (window.location.href == "http://localhost:3000/") {
  const content = document.querySelector(".content");
  content.setAttribute("style", "display: block;");
}else{
  const content = document.querySelector(".content");
  content.setAttribute("style", "display: none;");
}
});
window.addEventListener('popstate', function(){
if (window.location.href == "http://localhost:3000/") {
  const content = document.querySelector(".content");
  content.setAttribute("style", "display: block;");
}else{
  const content = document.querySelector(".content");
  content.setAttribute("style", "display: none;");
}
});

  return (
    <>
      <Router>
        <Header />
        <br />

        <Content onClick={ handleHideContent } />
      </Router>
      <Footer />    
    </>
  );
}

export default App;
