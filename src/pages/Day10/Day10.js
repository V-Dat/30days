import "./index.scss";
import Row from "../../component/ReUse/Row/Row";
import DayTemplate from "../DayTemplate/DayTemplate";
import CategorySelector from "./CategorySelector";
import ScoreBoard from "./ScoreBoard";
import QuestionBoard from "./QuestionBoard";
import ResultModel from "./ResultModel";
import useAxios from "../../Handler/useAxios"
import { useCallback, useEffect, useState } from "react";

export default function Day10() {
  const url = 'https://opentdb.com/api.php?amount=1';
  const expectData = useCallback((data) => { return data.map((it) => ({ id: it.id , ...it.data })) }, [])
  const [axiosData] = useAxios(url,expectData,'results')
  const [question, setQuestion] = useState({})
  const [answers, setAnswers] = useState([])
  useEffect(() => {
    const generateQuestion = () => {
      const newq = {...axiosData}
      const data = newq[0]
      setQuestion(data)
      // setAnswers([...question.incorrect_answers, question.correct_answer])
    }
    generateQuestion()
  },[axiosData])

  return (
    <DayTemplate background='day10'>

      {/* Question header : Categories + ScoreBoard */}
      <Row className="row">
         <CategorySelector categories={axiosData} />
         <ScoreBoard />
      </Row>

      {/* ResultModel 
      <Row className="row">
        <ResultModel 
        isCorrect={false}
        question='this is correct'
        getQuestion = {() =>{}}
        />
      </Row>*/}

      {/* Question Board */}
      <Row className="row">
       {question &&  <QuestionBoard question= { question}/> }
      </Row>

      {/* Question Board */}
      <Row className="row">
      </Row>


    </DayTemplate>
  );
}
