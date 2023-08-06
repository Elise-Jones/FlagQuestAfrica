import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./FlagCard.css"

export const FlagCard = ({ singleFlag, deleteFlag, addFlag, getFlag}) => {
  const { id, flagPng, altText, name } = singleFlag;
  const [alert, setAlert] = useState("");   
  const [userAnswer, setUserAnswer] = useState("");
  const [answer, setAnswer ] = useState("")
  const location = useLocation();

  const checkAnswer = (event) => {
    event.preventDefault();
    const alertMessage =
      userAnswer !== name ? "You are incorrect, try again." : "You are correct!";
    setAlert(alertMessage);
    setUserAnswer("");
  };

  const saveFlag = () => {
    const newFlag = singleFlag;
    addFlag(newFlag);
    setAlert("");
    setAnswer("")
    getFlag();
  };

  const showAnswer = () => {
    setAlert("")
    setAnswer(name)
  }

  const showNew = () => {
    getFlag()
    setAnswer("")
    setAlert("")
  }

  return (
    <article className="flag-card">
      <img src={flagPng} alt={altText} />
      <div className="form-container">
      <form onSubmit={checkAnswer}>
        <input
          name="country"
          type="text"
          placeholder="What country?"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        ></input>
        <button type="submit" className="submit-button">Submit</button>
        <p>{alert}</p>
      </form>
      <div className="answer-holder">
      <button onClick={showAnswer
        }>Show Answer</button>
      <p>{answer}</p>
      </div>
      </div>
      {location.pathname.includes("saved") ? (
        <button className="delete-button"
          onClick={() => {
            deleteFlag(name);
          }}
        >
          Delete
        </button>
      ) : (
        <div><button className="save-button" onClick={saveFlag}>Save For later </button> <button onClick={showNew} className="show-new-button">Show Me A New Flag </button> </div>
      )}
    </article>
  );
};

FlagCard.propTypes = {
  singleFlag: PropTypes.shape({
    id: PropTypes.string,
    flagPic: PropTypes.string,
    name: PropTypes.string,
    altText: PropTypes.string,
    flagPng: PropTypes.string}),
  deleteFlag: PropTypes.func.isRequired,
  addFlag: PropTypes.func.isRequired,
  getFlag: PropTypes.func.isRequired
}