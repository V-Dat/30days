import "./index.scss";
import { useState } from "react";
import Container from "../../component/ReUse/Container/Container";
import Row from "../../component/ReUse/Row/Row";
import Column from "../../component/ReUse/Column/Column";
import Content from "../../component/ReUse/Content/Content";
import Title from "../../component/ReUse/Title/Title";
import InputComponent from "../../component/ReUse/InputComponent/InputComponent";
import Button from "../../component/ReUse/Button/Button";
import Child from "../../component/ReUse/Child/Child";

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
    console.log("JOB: ", job);
  };

  const handleAddJobs = () => {
    if (job !== "") {
      setJobs((prev) => [...prev, { value: job, isChecked: false }]);
      setJob("");
    }
  };

  const handleDelJob = ({ e, eJob, index }) => {
    eJob.isChecked
      ? setCountLiChecked(countLiChecked - 1)
      : console.log("job khong duoc checked");
    console.log("eJob.isChecked", eJob.isChecked);
    setJobs((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)];
    });
  };

  const handleCheckBox = (eJob, e, index) => {
    eJob.isChecked
      ? setCountLiChecked(countLiChecked - 1)
      : setCountLiChecked(countLiChecked + 1);
    eJob.isChecked = !eJob.isChecked;
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
                <div key={Math.random() * 0.193} className="todo__list">
                  <input
                    type="checkbox"
                    checked={eJob.isChecked}
                    onChange={(index, e) => handleCheckBox(eJob, e, index)}
                  />
                  <div
                    className="job-in-list"
                    onChange={(e) => handleCheckBox(e)}
                  >
                    <b className="text-primary">{`${
                      jobs.indexOf(eJob) + 1
                    }`}</b>
                    {`: ${eJob.value}`}
                  </div>
                  <button
                    className="btn-del-job"
                    onClick={(e) => handleDelJob({ e, eJob, index })}
                  >
                    X
                  </button>
                </div>
              ))}
              <div className="todo__clearAll">
                <div>
                  {countLiChecked === jobs.length
                    ? `No task pending !`
                    : `You have ${jobs.length - countLiChecked} tasks pending`}
                </div>
                <button onClick={handleRemoveAllTask}> Clear All </button>
              </div>
            </Row>
          </Column>
        </Row>
      </Container>
    </Content>
  );
}

export default Day7;
