import "./index.scss";
import data from "../data.js";
import { Link } from "react-router-dom";
import Container from "../../component/ReUse/Container/Container";
import Row from "../../component/ReUse/Row/Row";
import Card from "../../component/Card/Card";
import Title from "../../component/ReUse/Title/Title";
import ImageComponent from "../../component/ReUse/ImageComponent/ImageComponent";
import { v4 as uuidv4 } from 'uuid';

export default function Content() {
  const dayList = data.dayList;
  return (
    <>
      <Container>
        <Row className="row">
          {dayList.map((e) => (
            <Card className="preview" key={uuidv4()}>
              <Link to={e.url}>
                <ImageComponent
                  className="preview__image"
                  src={e.imageUrl}
                  alt={e.name}
                >
                  <Title className="preview__title" title={e.name} />
                </ImageComponent>
              </Link>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}
