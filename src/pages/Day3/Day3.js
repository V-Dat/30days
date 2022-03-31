import "./index.scss";
import Dialog from "../../component/Day3/Dialog.js";
import SearchBox from "../../component/Day3/SearchBox.js";
import Row from "../../component/ReUse/Row/Row";
import Container from "../../component/ReUse/Container/Container";
import Content from "../../component/ReUse/Content/Content";
function Day3() {
  return (
    <Content className="day3 background-color">
      <Container>
        <Row>
          <Dialog />
        </Row>
        <Row className="break">
          <SearchBox />
        </Row>
      </Container>
    </Content>
  );
}

export default Day3;
