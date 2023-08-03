import React from 'react';
import './FlagCard.css';
import { Form } from '../../Form/Form';
import { useLocation } from 'react-router-dom';

export const FlagCard = ({ singleFlag, setSingleFlag, deleteFlag }) => {
  const { id, flagPng, altText, name } = singleFlag;
  const [alert, setAlert] = React.useState('');
  const location = useLocation()
  
  return (
    <div className="flag-card">
      <img src={flagPng} alt={altText}  />
      <Form name={name} setSingleFlag={setSingleFlag} alert={alert} setAlert={setAlert} />
      {location.pathname.includes('saved') && <button onClick={()=> {deleteFlag(name)}}>delete</button>}
    </div>
  );
};