import "./index.scss";
import { useState } from "react";
import Row from "../../component/ReUse/Row/Row";
import Column from "../../component/ReUse/Column/Column";
import Title from "../../component/ReUse/Title/Title";
import InputComponent from "../../component/ReUse/InputComponent/InputComponent";
import Button from "../../component/ReUse/Button/Button";
import Detail from "../../component/ReUse/Detail/Detail";
import Text from "../../component/ReUse/Text/Text";
import { v4 as uuidv4 } from 'uuid';
import DayTemplate from "../DayTemplate/DayTemplate";

function Day7() {
  // todo list
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState("");
  const [countLiChecked, setCountLiChecked] = useState(0);
  // event hover remove todo list

  const addJob = () => {
    if (jobs !== "") {
      setJobs((prev) => [...prev, { value: job, isChecked: false }]);
      setJob("");
    }
  };

  //xử lý enter input:
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addJob();
    }
  };

  const handleOnChangeInput = (e) => {
    setJob(e.target.value);
  };

  const handleOnClickAdd = () => {
    addJob();
  };

  const handleClickDelJob = (e, data) => {
    const index = jobs.indexOf(data);
    data.isChecked
      ? setCountLiChecked(countLiChecked - 1)
      : console.log("job khong duoc checked");
    setJobs((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const handleOnChangeCheckbox = (e, data) => {
    data.isChecked
      ? setCountLiChecked(countLiChecked - 1)
      : setCountLiChecked(countLiChecked + 1);
    data.isChecked = !data.isChecked;
    setJobs((prev) => [...prev]);
  };

  const handleOnClickRemoveAll = () => {
    setJob("");
    setCountLiChecked(0);
    setJobs([]);
  };
  return (
    <DayTemplate background='day7' >
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
                handleChange={handleOnChangeInput}
                handleKeyDown={handleKeyDown}
                value={job}
              />
              <Button
                className="todo-add__button"
                handleClick={handleOnClickAdd}
              >
                <i className="fa-solid fa-plus"></i>
              </Button>
            </Row>
            <Row className="todo__lists ">
              {jobs.map((eJob, index) => (
                <Row key={uuidv4()} className="todo__list">
                  <InputComponent
                    type="checkbox"
                    data={eJob}
                    handleChange={handleOnChangeCheckbox}
                    checked={eJob.isChecked}
                  />
                  <Detail className="job-in-list">
                    <b className="text-primary">{`${
                      jobs.indexOf(eJob) + 1
                    }`}</b>
                    {`: ${eJob.value}`}
                  </Detail>
                  <Button
                    className="btn-del-job"
                    handleClick={handleClickDelJob}
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
                  handleClick={handleOnClickRemoveAll}
                  className="button-clear"
                >
                  <span> Clear All </span>
                </Button>
              </Row>
            </Row>
          </Column>
        </Row>
      </DayTemplate>
  );
}

export default Day7;
