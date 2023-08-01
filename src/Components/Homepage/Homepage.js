import React from 'react'
import { FlagCard } from '../App/FlagCard/FlagCard'
import {fetchAfricanCountries} from "../../apiCalls"
import { cleanData, getRandomNumber } from '../../utils';
import { useState } from 'react';
export const Homepage = ({ singleFlag, setSingleFlag }) => {
  
  const [alert, setAlert] = useState("")
  const fetchAgain =() => {
    fetchAfricanCountries().then((data) => {
      const country = getRandomNumber(data)
      const cleanedCountry = cleanData(country)
      setSingleFlag(cleanedCountry)
    })
    
   }

  return (
    <div className="container">
      <FlagCard singleFlag={singleFlag} setSingleFlag={setSingleFlag} alert={alert} setAlert={setAlert}/>
      <button onClick={fetchAgain}>Show me new </button>
    </div>
  )
}
