import React, { useState } from 'react'

export const Form = ({ name, alert, setAlert}) => {
  const [flagAnswer, setFlagAnswer] = useState('')

  const checkAnswer = (event) => {
    event.preventDefault()
    const alertMessage = flagAnswer !== name ? "You are incorrect, try again" : "you are correct";
    setAlert(alertMessage);
    setFlagAnswer("")
  }

  return (
    <div>
      <form onSubmit={checkAnswer}>
        <input name="country "type="text" placeholder='What country?' value={flagAnswer} onChange={(e)=> setFlagAnswer(e.target.value)}></input>
        {flagAnswer}
        <button type="submit">Submit</button>
        <p>{alert}</p>
      </form> 
    </div>
  )
}
