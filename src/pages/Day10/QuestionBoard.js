import React from 'react'
import Text from '../../component/ReUse/Text/Text'
import Button from '../../component/ReUse/Button/Button'
function QuestionBoard({ question }) {
  console.log(question)

  return (
    <div className="question-board d-flex flex-column text-center mt-3 py-4 rounded-3  bg-light bg-gradient col-md-12  justify-content-center">
      <Text >{question.question}</Text>
        <Button className='my-4 mx-5 py-4 rounded-5'> </Button>
      <Button className='my-4 mx-5 py-4 rounded-5'></Button>
    </div>
  )
}

export default QuestionBoard