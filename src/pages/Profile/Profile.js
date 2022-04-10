import "./index.scss";
import data from "../data";
import { useDispatch, useSelector } from "react-redux";
import Row from "../../component/ReUse/Row/Row";
import Column from "../../component/ReUse/Column/Column";
import IconLabel from "../../component/ReUse/IconLabel/IconLabel";
import ImageComponent from "../../component/ReUse/ImageComponent/ImageComponent";
import Tab from "../../component/ReUse/Tab/Tab";
import Infor from "../../component/About/Infor/Infor";
import Objective from "../../component/About/Objective/Objective";
import Projects from "../../component/About/Projects/Projects";
import Text from "../../component/ReUse/Text/Text";
import Container from "../../component/ReUse/Container/Container";
import Child from "../../component/ReUse/Child/Child";
import Content from "../../component/ReUse/Content/Content";
export default function Profile() {
  const about = data.about;
  const dispatch = useDispatch();
  const AboutSectionReducer = useSelector((state) => state.AboutSectionReducer);

  return (
    <Content className="container-background">
      <Container>
        <Row className="row">
          <Column className="aboutpage col l-12 m-12 c-12">
            <Child className="profile">
              <Row className="profile-header">
                <Column className="profile-header__left">
                  <ImageComponent
                    className="profile-header__left-image"
                    src={about.avatar}
                  />
                </Column>
                <Column className="profile-header__right icon-label">
                  <Row className="information">
                    <Text>
                      <h2 className="name">{about.name}</h2>
                      <p className="birthday">{about.dayOfBirth}</p>
                    </Text>
                  </Row>
                  <Row className="contact">
                    <IconLabel className="contact__email">
                      <i className="fa-solid fa-envelope"></i>
                      <p>{about.email}</p>
                    </IconLabel>
                    <IconLabel className="contact__phone">
                      <i className="fa fa-phone"></i>
                      <p>{about.phone}</p>
                    </IconLabel>
                    <IconLabel className="contact__location">
                      <i className="fas fa-map"></i>
                      <p>{about.location}</p>
                    </IconLabel>

                    <IconLabel href={about.github} className="contact__github">
                      <i className="fab fa-github"></i>
                      <p>Github</p>
                    </IconLabel>
                  </Row>
                </Column>
              </Row>
              <Row className="profile-body">
                <Column className="profile-body__tabs">
                  <div className="tabs">
                    <Tab
                      iconClassName="fa-solid fa-address-card"
                      handleClick={() =>
                        dispatch({
                          type: "setInfor",
                          payload: {
                            infor: true,
                            project: false,
                            objective: false,
                          },
                        })
                      }
                      className="about-me"
                      icon="fas fa-address-card"
                    >
                      SƠ LƯỢC VỀ BẢN THÂN
                    </Tab>

                    <Tab
                      iconClassName="far fa-file-code"
                      handleClick={() =>
                        dispatch({
                          type: "setProject",
                          payload: {
                            project: true,
                            infor: false,
                            objective: false,
                          },
                        })
                      }
                      className="project"
                      icon="fas fa-user-check"
                    >
                      DỰ ÁN CÁ NHÂN
                    </Tab>
                    <Tab
                      iconClassName="fa fa-book"
                      handleClick={() =>
                        dispatch({
                          type: "setObjective",
                          payload: {
                            objective: true,
                            infor: false,
                            project: false,
                          },
                        })
                      }
                      className="objective"
                      icon="fas fa-layer-group"
                    >
                      ĐỊNH HƯỚNG
                    </Tab>
                  </div>
                </Column>
                <Column className="profile-body__contents">
                  <div className="content">
                    {AboutSectionReducer.infor && <Infor about={about} />}
                    {AboutSectionReducer.objective && (
                      <Objective about={about} />
                    )}
                    {AboutSectionReducer.project && (
                      <Projects listProject={about.listProject} />
                    )}
                  </div>
                </Column>
              </Row>
            </Child>
          </Column>
        </Row>
      </Container>
    </Content>
  );
}
