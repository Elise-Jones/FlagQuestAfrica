import React, { useEffect } from "react";
import { FlagCard } from "../App/FlagCard/FlagCard";
import { useState } from "react";
import './Homepage.css';
export const Homepage = ({ singleFlag, setSingleFlag, addFlag, getFlag, setAlert, alert  }) => {
  


  const handleClick =() => {
    const newFlag = singleFlag
    addFlag(newFlag)
    setAlert("")
    getFlag()
  }
  return (
    <div className="container">
      {/* img here */}
      <FlagCard
        singleFlag={singleFlag}
        setSingleFlag={setSingleFlag}
        alert={alert}
        setAlert={setAlert}
        
      />
      <button onClick={getFlag}>Show me new </button>
      <button onClick={handleClick}>Save for later </button>
    </div>
  );
};
