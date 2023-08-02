import React from 'react';
import './FlagCard.css';
import { Form } from '../../Form/Form';

export const FlagCard = ({ singleFlag, setSingleFlag, alert, setAlert, alreadySavedAlert, setAlreadySavedAlert }) => {
  const { id, flagPng, altText, name } = singleFlag;
  console.log(alert)

  return (
    <div className="flag-card">
      <img src={flagPng} alt={altText} />
      <Form name={name} setSingleFlag={setSingleFlag} alert={alert} setAlert={setAlert} alreadySavedAlert={alreadySavedAlert} setAlreadySavedAlert={setAlreadySavedAlert}/>
    </div>
  );
};