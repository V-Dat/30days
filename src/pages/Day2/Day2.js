import "./index.scss";
import data from "../data";
import Card from "../../component/Card/Card";
import Social from "../../component/Day2/Social";
import ImageComponent from "../../component/ReUse/ImageComponent/ImageComponent";
import Text from "../../component/ReUse/Text/Text";
import Button from "../../component/ReUse/Button/Button";
import IconLabel from "../../component/ReUse/IconLabel/IconLabel";

import { v4 as uuidv4 } from 'uuid';
import DayTemplate from "../DayTemplate/DayTemplate";
import Row from "../../component/ReUse/Row/Row";

export default function Day2() {
  console.log("Day2: render....");
  const profile = data.profile;
  const handleClick = (profile) => {
    alert("Your Contact is: " + JSON.stringify(profile));
    console.log("Your Contact is : ", profile);
  };
  return (
    <DayTemplate background='day2' >
      <Row className='row'>
          {profile.map((profile) => (
            <Card key={uuidv4()} className="profile">
              <ImageComponent
                className="profile__avatar"
                src={profile.avatar}
              ></ImageComponent>
              <Text className="profile__job">{profile.job}</Text>
              <Text className="profile__name">{profile.name}</Text>
              <Social className="profile__social">
                {profile.social.map((social) => (
                  <IconLabel
                    key={uuidv4()}
                    social={social}
                    href={`https://www.${social}.com/${profile.name}`}
                  >
                    <i className={`fab fa-${social}`}></i>
                  </IconLabel>
                ))}
              </Social>
              <Button
                data={profile}
                className="profile__contact"
                handleClick={handleClick}
              >
                Contact Me
              </Button>
            </Card>
          ))}
        </Row>
    </DayTemplate>
  );
}
