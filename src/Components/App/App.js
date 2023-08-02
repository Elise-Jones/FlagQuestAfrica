import './App.css';
import {fetchAfricanCountries} from "../../apiCalls"
// import { countryData, oneCountry } from '../../mockData';
import { cleanData, getRandomNumber } from '../../utils';
import { useEffect, useState } from 'react';
import { Homepage } from '../Homepage/Homepage';
import { NavBar } from '../NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { SavedPage } from '../SavedPage/SavedPage';

function App() {
  const [singleFlag, setSingleFlag] = useState([]);
  const [savedFlags, setSavedFlag] = useState([])
  
  const addFlag = (newFlag) => {
    setSavedFlag([...savedFlags, newFlag])    
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


  return (
    <div className="App">
      <NavBar />
      <h1>FlagQuest Africa</h1>
      <Routes>
        <Route path="/" element={<Homepage singleFlag={singleFlag} setSingleFlag={setSingleFlag} addFlag={addFlag} getFlag={getFlag} />}/>
        <Route path="/saved" element={<SavedPage />}/>
      </Routes>
    </div>
  );
}

export default App;
