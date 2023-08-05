import "./App.css";
import { fetchAfricanCountries } from "../../apiCalls";
import { cleanData, getRandomNumber } from "../../utils";
import { useEffect, useState } from "react";
import { Homepage } from "../Homepage/Homepage";
import { NavBar } from "../NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { SavedPage } from "../SavedPage/SavedPage";
import { ErrorPage } from "../ErrorPage/ErrorPage";

const App = () => {
  const [singleFlag, setSingleFlag] = useState({});
  const [savedFlags, setSavedFlag] = useState([]);
  const [error, setError] = useState(null);

  const addFlag = (newFlag) => {
    const isSaved = savedFlags.some(flag => flag.name === newFlag.name)
    !isSaved && setSavedFlag((prev) => [...prev, newFlag])
  };

  const deleteFlag = (name) => {
    const filteredFlags = savedFlags.filter((flag) => flag.name !== name);
    setSavedFlag(filteredFlags);
  };

  const getFlag = () => {
    fetchAfricanCountries()
      .then((data) => {
        const country = getRandomNumber(data);
        const cleanedCountry = cleanData(country);
        setSingleFlag(cleanedCountry);
      })
      .catch((error) => {
        if (error instanceof Error && error.message.includes("Server error")) {
          setError("Sorry, we encountered a server error. Please try again later.");
        }
      });
  };
 
  
  
  
  
  
  

  useEffect(() => {
    getFlag();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>FlagQuest Africa</h1>
      {error ?  (
        <div className="error-message">{error}</div>) : (<Routes>
          <Route
            path="/"
            element={
              <Homepage
                singleFlag={singleFlag}
                setSingleFlag={setSingleFlag}
                addFlag={addFlag}
                getFlag={getFlag}
                deleteFlag={deleteFlag}
              />
            }
          />
          <Route
            path="/saved"
            element={
              <SavedPage
                savedFlags={savedFlags}
                singleFlag={singleFlag}
                setSingleFlag={setSingleFlag}
                deleteFlag={deleteFlag}
                getFlag={getFlag}
              />
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        )}
      </div>
  )
}

export default App;
