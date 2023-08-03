import React from "react";
import { FlagCard } from "../App/FlagCard/FlagCard";
import "./SavedPage.css";
export const SavedPage = ({ savedFlags, setSingleFlag, alert, setAlert, alreadySavedAlert, setAlreadySavedAlert, deleteFlag }) => {
  const allSaved = savedFlags.map((flag) => (
    <FlagCard
      key={flag.Id}
      id={flag.name}
      singleFlag={flag}
      setSingleFlag={setSingleFlag}
      alert={alert}
      setAlert={setAlert}
      alreadySavedAlert={alreadySavedAlert}
      setAlreadySavedAlert={setAlreadySavedAlert}
      deleteFlag={deleteFlag}
    />
  ));
  return <div className="saved-container">{allSaved}
  </div>
};
