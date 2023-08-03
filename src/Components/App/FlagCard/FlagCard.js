import React from 'react';
import './FlagCard.css';
import { Form } from '../../Form/Form';
import { useLocation } from 'react-router-dom';

export const FlagCard = ({ singleFlag, setSingleFlag, alert, setAlert, alreadySavedAlert, setAlreadySavedAlert }) => {
  const { id, flagPng, altText, name } = singleFlag;
  console.log(alert)
  const location = useLocation()
  return (
    <div className="flag-card">
      <img src={flagPng} alt={altText} />
      <Form name={name} setSingleFlag={setSingleFlag} alert={alert} setAlert={setAlert} alreadySavedAlert={alreadySavedAlert} setAlreadySavedAlert={setAlreadySavedAlert}/>
      {location.pathname.includes('saved') && <button>delete</button>}
    </div>
  );
};