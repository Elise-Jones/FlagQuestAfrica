import React from "react";
import "./FlagCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const FlagCard = ({ singleFlag, deleteFlag, addFlag, getFlag}) => {
  const { id, flagPng, altText, name } = singleFlag;
  const [alert, setAlert] = useState("");   
  const [userAnswer, setUserAnswer] = useState("");
  const [answer, setAnswer ] = useState("")
  const location = useLocation();

  const checkAnswer = (event) => {
    event.preventDefault();
    const alertMessage =
      userAnswer !== name ? "You are incorrect, try again" : "you are correct";
    setAlert(alertMessage);
    setUserAnswer("");
  };

  const handleClick = () => {
    const newFlag = singleFlag;
    addFlag(newFlag);
    setAlert("");
    setAnswer("")
    getFlag();
  };

  const showAnswer = () => {
    setAnswer(name)
    setAlert("")
  }
  return (
    <div className="flag-card">
      <img src={flagPng} alt={altText} />
      <form onSubmit={checkAnswer}>
        <input
          name="country"
          type="text"
          placeholder="What country?"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
       
        <p>{alert}</p>
        
        
      </form>
      <button onClick={showAnswer
        }>Show Answer</button>
      <p>{answer}</p>
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
