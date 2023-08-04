import React from "react";
import { FlagCard } from "../App/FlagCard/FlagCard";
import "./SavedPage.css";

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
