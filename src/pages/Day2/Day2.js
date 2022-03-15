import './index.css';
import '../../assets/css/grid.css'
import Header from "../../parts/Header";
import Footer from "../../parts/Footer";

import data from '../data'

function Day2() {
  console.log('Day2: render....')


  const profile = data.profile;
  return (
    <>
    <Header></Header>
    <div className="day2 grid wide">
      <div className="row">
        {profile.map( (e) => (
      <div key={`${e.avatar}${e.index}`}  className="profile col l-3 m-6 c-12">
        <div className="profile__avatar">
          <img src={e.avatar} alt={e.name}/>
        </div>
        <div className="profile__job">{e.job}</div>
        <div className="profile__name">{e.name}</div>
        <div className="profile__social">
        {e.social.map(social => (
          <a key={`${social}${e.index}`} href={`https://www.${social}.com/${e.name}`}>
            <i className={`fab fa-${social}`}></i>
          </a>
        ))}
        </div>
        <button className="profile__contact">Contact Me</button>
      </div>
      ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Day2;
