import IconLabel from "../component/IconLabel/IconLabel";
import IconLink from "../component/IconLink/IconLink";
import ImageLink from "../component/ImageLink/ImageLink";
import data from "../pages/data";
import ChildComponent from "../component/ChildComponent/ChildComponent";
import "./Footer.scss";
function Footer() {
  const about = data.about;
  return (
    <div className="footer">
      <ChildComponent className="footer__child footer__image">
        <ImageLink href="/About" src="./img/day2/Kevin.png" />
      </ChildComponent>
      <ChildComponent className="footer__child footer__contact">
        <IconLink
          href={about.github}
          className="contact__github"
          iconClassName="fab fa-github"
          text="Github"
        />
        <IconLink
          href="/About"
          className="contact__about"
          iconClassName="fa-solid fa-info"
          text="About me"
        />
        <IconLabel
          className="contact__phone"
          iconClassName="fa fa-phone"
          text={about.phone}
        />
        <IconLabel
          className="contact__email"
          iconClassName="fa-solid fa-envelope"
          text={about.email}
        />
      </ChildComponent>
    </div>
  );
}

export default Footer;
