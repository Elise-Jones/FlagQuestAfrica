import './App.css';
import {fetchAfricanCountries} from "../../apiCalls"
// import { countryData, oneCountry } from '../../mockData';
import { cleanData, getRandomNumber } from '../../utils';
import { useEffect, useState } from 'react';
import { Homepage } from '../Homepage/Homepage';

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
      <h1>FlagQuest Africa</h1>
      <Homepage singleFlag={singleFlag} setSingleFlag={setSingleFlag} addFlag={addFlag} getFlag={getFlag} />
    </div>
  );
}

export default App;
