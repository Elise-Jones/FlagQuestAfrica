import React from "react";
import { FlagCard } from "../App/FlagCard/FlagCard";
import "./SavedPage.css";
import PropTypes from 'prop-types';

export const SavedPage = ({ savedFlags, setSingleFlag, deleteFlag, addFlag, getFlag }) => {
  
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
    <main className="saved-container">
      {savedFlags.length === 0 ? <p>You're doing great! No saved countries, yet.</p> : allSaved}
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