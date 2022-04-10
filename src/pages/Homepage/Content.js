import "./index.scss";
import data from "../data.js";
import { Link } from "react-router-dom";
import Container from "../../component/ReUse/Container/Container";
import Row from "../../component/ReUse/Row/Row";
import Card from "../../component/Card/Card";
import ImageComponent from "../../component/ReUse/ImageComponent/ImageComponent";

export default function Homepage() {
  const dayList = data.dayList;

  console.log("homepage re-render ");

  return (
    <>
      <Container>
        <Row className="row">
          {dayList.map((e) => (
            <Card className="preview">
              <Link to={e.url}>
                <ImageComponent
                  className="preview__image"
                  src={e.imageUrl}
                  alt={e.name}
                >
                  <h2 className="preview__title">{e.name}</h2>
                </ImageComponent>
              </Link>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}
