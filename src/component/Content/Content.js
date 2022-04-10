import "./index.scss";
import data from "../../pages/data.js";
import { Link } from "react-router-dom";
import Container from "../ReUse/Container/Container";
import Row from "../ReUse/Row/Row";
import Card from "../Card/Card";
import ImageComponent from "../ReUse/ImageComponent/ImageComponent";

export default function Content() {
  const dayList = data.dayList;

  console.log("content homepage re-render ");

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
