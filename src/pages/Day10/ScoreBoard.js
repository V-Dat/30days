import React from 'react'

function ScoreBoard() {
  return (
        <div className='score-board d-flex  col-sm-4 col-12 align-items-center center full-width justify-content-around'>
            <div className="score-board__correct d-flex flex-column text-center center">
                <strong className='display-1'>0</strong>
                <strong className='display-6'>Correct</strong>
            </div>
            <div className="score-board__wrong d-flex flex-column text-center center">
                <strong className='display-1'>0</strong>
                <strong className='display-6'>Wrong</strong>
            </div>
        </div>
    )
}

export default ScoreBoard