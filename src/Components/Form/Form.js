import React, { useState } from 'react'

export const Form = ({ name, alert, setAlert, setSingleFlag }) => {
  console.log("name in form", name)
 const [flagAnswer, setFlagAnswer] = useState('')



const checkAnswer = (event) => {
  event.preventDefault()
  console.log("hello")
  // setFlagAnswer(event.target.value)
  console.log(flagAnswer)
  if(flagAnswer !== name ){
    setAlert("you are wrong")
  } else {
    setAlert('you are correct')
  }

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
