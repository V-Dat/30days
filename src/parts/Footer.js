import ImageLink from "../component/ImageLink/ImageLink";
import data from "../pages/data";
import ChildComponent from "../component/ChildComponent/ChildComponent";
import "./Footer.scss";
import IconLabel from "../component/ReUse/IconLabel/IconLabel";
function Footer() {
  const about = data.about;
  return (
    <div className="footer">
      <ChildComponent className="footer__child footer__image">
        <ImageLink href="/Profile" src="./img/day2/Kevin.png" />
      </ChildComponent>
      <ChildComponent className="footer__child footer__contact">
        <IconLabel href={about.github} className="contact__github">
          <i className="fab fa-github"></i>
          <p>Github</p>
        </IconLabel>
        <IconLabel href="/Profile" className="contact__about">
          <i className="fa-solid fa-info"> </i>
          <p>About me</p>
        </IconLabel>
        <IconLabel className="contact__phone">
          <i className="fa fa-phone"></i>
          <p>{about.phone}</p>
        </IconLabel>
        <IconLabel className="contact__email">
          <i className="fa-solid fa-envelope"> </i>
          <p> {about.email}</p>
        </IconLabel>
      </ChildComponent>
    </div>
  );
}

export default Footer;
