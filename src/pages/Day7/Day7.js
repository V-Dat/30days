import "./index.scss";
import { useState } from "react";
import Container from "../../component/ReUse/Container/Container";
import Row from "../../component/ReUse/Row/Row";
import Column from "../../component/ReUse/Column/Column";
import Content from "../../component/ReUse/Content/Content";
import Title from "../../component/ReUse/Title/Title";
import InputComponent from "../../component/ReUse/InputComponent/InputComponent";
import Button from "../../component/ReUse/Button/Button";
import Detail from "../../component/ReUse/Detail/Detail";
import Text from "../../component/ReUse/Text/Text";

function Day7() {
  // todo list
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState("");
  const [countLiChecked, setCountLiChecked] = useState(0);
  // event hover remove todo list

  //xử lý enter input:
  const handleEnter = (e) => {
    if (e.key === "Enter" && job !== "") {
      setJobs((prev) => [...prev, { value: job, isChecked: false }]);
      setJob("");
    }
  };

  const handleInputJob = (e) => {
    setJob(e.target.value);
  };

  const handleAddJobs = () => {
    if (job !== "") {
      setJobs((prev) => [...prev, { value: job, isChecked: false }]);
      setJob("");
    }
  };

  const handleDelJob = (e, data) => {
    const index = jobs.indexOf(data);
    data.isChecked
      ? setCountLiChecked(countLiChecked - 1)
      : console.log("job khong duoc checked");
    setJobs((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)];
    });
  };

  const handleChange = (e, data) => {
    data.isChecked
      ? setCountLiChecked(countLiChecked - 1)
      : setCountLiChecked(countLiChecked + 1);
    data.isChecked = !data.isChecked;
    setJobs((prev) => [...prev]);
  };

  const handleRemoveAllTask = () => {
    setJob("");
    setCountLiChecked(0);
    setJobs([]);
  };
  return (
    <Content className="day7 background-color">
      <Container>
        <Row className="row">
          <Column className="col">
            <Row className="todo">
              <Title className="todo__title">
                <i className="fa-solid fa-list-check"></i> TODO LIST
              </Title>
            </Row>
            <Row className="todo__add">
              <InputComponent
                className="todo-add__input"
                type="text"
                handleChange={handleInputJob}
                handleKeyDown={handleEnter}
                value={job}
              />
              <Button className="todo-add__button" handleClick={handleAddJobs}>
                <i className="fa-solid fa-plus"></i>
              </Button>
            </Row>
            <Row className="todo__lists ">
              {jobs.map((eJob, index) => (
                <Row key={index} className="todo__list">
                  <InputComponent
                    type="checkbox"
                    data={eJob}
                    handleChange={handleChange}
                  />
                  <Detail className="job-in-list">
                    <b className="text-primary">{`${
                      jobs.indexOf(eJob) + 1
                    }`}</b>
                    {`: ${eJob.value}`}
                  </Detail>
                  <Button
                    className="btn-del-job"
                    handleClick={handleDelJob}
                    data={eJob}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </Button>
                </Row>
              ))}
              <Row className="todo__clearAll">
                <Text>
                  {countLiChecked === jobs.length
                    ? `No task pending !`
                    : `You have ${jobs.length - countLiChecked} tasks pending`}
                </Text>
                <Button
                  handleClick={handleRemoveAllTask}
                  className="button-clear"
                >
                  <span> Clear All </span>
                </Button>
              </Row>
            </Row>
          </Column>
        </Row>
      </Container>
    </Content>
  );
}

export default Day7;
