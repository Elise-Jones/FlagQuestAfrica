import React from "react";
import { FlagCard } from "../App/FlagCard/FlagCard";
import "./SavedPage.css";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

export const SavedPage = ({ savedFlags, setSingleFlag, deleteFlag, addFlag, getFlag }) => {
  
  const location = useLocation()
  let routeClassName = ''
  if(location.pathname === "/saved" && savedFlags.length  === 0){
    routeClassName = "no-saved"
  } else {
    routeClassName = "saved-container"
  }

  const allSaved = savedFlags.map((flag) => (
    <FlagCard
      key={flag.name}
      id={flag.name}
      singleFlag={flag}
      setSingleFlag={setSingleFlag}
      deleteFlag={deleteFlag}
      addFlag={addFlag}
      getFlag={getFlag}
    />
  ));
  
  return (
    <main className={routeClassName}>
      {savedFlags.length === 0 ? <h2> You're doing great! No saved flags, yet.</h2> :
       allSaved}
    </main>
  );
};

SavedPage.propTypes = {
  savedFlags: PropTypes.arrayOf(PropTypes.object),
  setSingleFlag: PropTypes.func.isRequired,
  deleteFlag: PropTypes.func.isRequired,
  addFlag: PropTypes.func.isRequired, 
  getFlag: PropTypes.func.isRequired,
}