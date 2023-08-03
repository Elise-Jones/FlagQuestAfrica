// import React, { useState } from 'react'

// export const Form = ({ name, alert, setAlert}) => {
//   const [userAnswer, setUserAnswer] = useState('')

//   const checkAnswer = (event) => {
//     event.preventDefault()
//     const alertMessage = userAnswer !== name ? "You are incorrect, try again" : "you are correct";
//     setAlert(alertMessage);
//     setUserAnswer("")
//   }

//   return (
//     <div>
//       <form onSubmit={checkAnswer}>
//         <input name="country "type="text" placeholder='What country?' value={userAnswer} onChange={(e)=> setUserAnswer(e.target.value)}></input>
//         <button type="submit">Submit</button>
//         <p>{alert}</p>
//       </form> 
//     </div>
//   )
// }
