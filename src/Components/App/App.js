import './App.css';
import {fetchAfricanCountries} from "../../apiCalls"
// import { countryData, oneCountry } from '../../mockData';
import { cleanData, getRandomNumber } from '../../utils';
import { useEffect, useState } from 'react';
import { Homepage } from '../Homepage/Homepage';
import { NavBar } from '../NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { SavedPage } from '../SavedPage/SavedPage';
import { ErrorPage } from '../ErrorPage/ErrorPage';

function App() {
  const [singleFlag, setSingleFlag] = useState([]);
  const [savedFlags, setSavedFlag] = useState([])
  const [alert, setAlert] = useState("");
  



  const addFlag = (newFlag) => {
  setSavedFlag((prev)=> [...prev, newFlag])
    
  }

  const deleteFlag =(name) => {
    
   const filteredFlags = savedFlags.filter(flag => flag.name!== name) 
   setSavedFlag(filteredFlags)
  }

  const getFlag = () => {
    fetchAfricanCountries().then((data) => {
      const country = getRandomNumber(data);
      const cleanedCountry = cleanData(country);
      setSingleFlag(cleanedCountry);
    });
  };
  
  useEffect(() => {
    getFlag()
  }, [])

  useEffect(() => {
    console.log("alert in app", alert)
  }, [])


  return (
    <div className="App">
      <NavBar />
      <h1>FlagQuest Africa</h1>
      <Routes>
        <Route path="/" element={<Homepage singleFlag={singleFlag} setSingleFlag={setSingleFlag} addFlag={addFlag} getFlag={getFlag} alert={alert} setAlert={setAlert} />}/>
        <Route path="/saved" element={<SavedPage savedFlags={savedFlags} singleFlag={singleFlag} setSingleFlag={setSingleFlag} alert={alert} setAlert={setAlert} deleteFlag={deleteFlag}/>}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
