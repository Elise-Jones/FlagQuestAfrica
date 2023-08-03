import React from "react";
import "./FlagCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const FlagCard = ({
  singleFlag,
  deleteFlag,
  addFlag,
  getFlag,
}) => {
  const { id, flagPng, altText, name } = singleFlag;
  const [alert, setAlert] = React.useState("");
  const [flagAnswer, setFlagAnswer] = useState("");
  const location = useLocation();

  const checkAnswer = (event) => {
    event.preventDefault();
    const alertMessage =
      flagAnswer !== name ? "You are incorrect, try again" : "you are correct";
    setAlert(alertMessage);
    setFlagAnswer("");
  };

  const handleClick = () => {
    const newFlag = singleFlag;
    addFlag(newFlag);
    setAlert("");
    getFlag();
  };

  return (
    <div className="flag-card">
      <img src={flagPng} alt={altText} />
      <form onSubmit={checkAnswer}>
        <input
          name="country "
          type="text"
          placeholder="What country?"
          value={flagAnswer}
          onChange={(e) => setFlagAnswer(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
        <p>{alert}</p>
      </form>
      {location.pathname.includes("saved") ? (
        <button
          onClick={() => {
            deleteFlag(name);
          }}
        >
          delete
        </button>
      ) : (
        <button onClick={handleClick}>Save for later </button>
      )}
    </div>
  );
};
