import React from 'react'
import './FlagCard.css'
import { Form } from '../../Form/Form'

export const FlagCard = ({ singleFlag, setSingleFlag, alert, setAlert }) => {
 const { id, flagPng, altText, name } = singleFlag
  return (
    <div className="flag-card">
      <img src={flagPng} alt={altText}/>
      <Form name={name} setSingleFlag={setSingleFlag} alert={alert} setAlert={setAlert}/>
    </div>
  )
}
