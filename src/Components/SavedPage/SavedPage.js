import React from "react";
import { FlagCard } from "../App/FlagCard/FlagCard";
import "./SavedPage.css";
export const SavedPage = ({ savedFlags, setSingleFlag, deleteFlag }) => {
  const allSaved = savedFlags.map((flag) => (
    <FlagCard
      key={flag.name}
      id={flag.name}
      singleFlag={flag}
      setSingleFlag={setSingleFlag}
      deleteFlag={deleteFlag}
    />
  ));
  return <div className="saved-container">{savedFlags.length === 0 ? <p>nothing to see here</p> : allSaved}
  </div>
};
