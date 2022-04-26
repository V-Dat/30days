import "./index.scss";
import profileData from "../data";
import Card from "../../component/Card/Card";
import ImageComponent from "../../component/ReUse/ImageComponent/ImageComponent";
import Text from "../../component/ReUse/Text/Text";
import Button from "../../component/ReUse/Button/Button";
import IconLabel from "../../component/ReUse/IconLabel/IconLabel";
import Container from "../../component/ReUse/Container/Container";
import Content from "../../component/ReUse/Content/Content";
import Row from "../../component/ReUse/Row/Row";
import Social from "../../component/Day2/Social";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import ControlLayout from "../../component/ReUse/ControlLayout/ControlLayout";

export default function Day2() {
  const profiles = profileData.profile;
  const [showControlLayout,setShowControlLayout] = useState(false)
  const [detailProfile, setDetailProfile] = useState(0);

  const handleClick = (e, data) => {
    setDetailProfile(data);
    setShowControlLayout(true);
  };

  const handleClickNext = () => {
    const nextIndex = Number((detailProfile.id + 1 + profiles.length) % profiles.length)
    const nextProfile = profiles[nextIndex]
    setDetailProfile(nextProfile);
  };
  const handleClickPrev = () => {
    const prevIndex = Number((detailProfile.id + 1 + profiles.length) % profiles.length)
    const prevProfile = profiles[prevIndex]
    setDetailProfile(prevProfile);
  };

  const handleClickClose = () => {
    setShowControlLayout(false);
  };

  return (
    <Content className="day2 background-color">
      <Container>
        <Row className="row">
          {profiles.map((profile) => (
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
      </Container>
      {showControlLayout ? (
        <ControlLayout
        dataPassing={detailProfile}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        handleClickClose={handleClickClose}
        />
      ) : (
        ""
      )}
    </Content>
  );
}
