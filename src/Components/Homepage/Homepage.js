import React, { useEffect } from "react";
import { FlagCard } from "../App/FlagCard/FlagCard";
import { useState } from "react";

export const Homepage = ({ singleFlag, setSingleFlag, addFlag, getFlag, savedFlags, setSavedFlags,  }) => {
  
  const [alert, setAlert] = useState("");

  const handleClick =() => {
    const newFlag = singleFlag
    addFlag(newFlag)
    setAlert("")
    getFlag()
  }
  return (
    <div className="container">
      <FlagCard
        singleFlag={singleFlag}
        setSingleFlag={setSingleFlag}
        alert={alert}
        setAlert={setAlert}
      />
      <button onClick={getFlag}>Show me new </button>
      {/* <button onClick={()=>{setSingleFlag([])}}>mam</button> */}
      <button onClick={handleClick}>Save for later </button>
    </div>
  );
};
