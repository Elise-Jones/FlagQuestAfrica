import './App.css';
import {fetchAfricanCountries} from "../../apiCalls"
// import { countryData, oneCountry } from '../../mockData';
import { cleanData, getRandomNumber } from '../../utils';
import { useEffect, useState } from 'react';
import { Homepage } from '../Homepage/Homepage';

function App() {
  const [singleFlag, setSingleFlag] = useState([])
  
  useEffect(() => {
    fetchAfricanCountries().then((data) => {
      const country = getRandomNumber(data)
      const cleanedCountry = cleanData(country)
      setSingleFlag(cleanedCountry)
    })
  }, [])

  useEffect(() => {
    console.log(singleFlag)
  },[singleFlag])


  return (
    <div className="App">
      <h1>FlagQuest Africa</h1>
      <Homepage singleFlag={singleFlag} setSingleFlag={setSingleFlag}/>
      
    </div>
  );
}

export default App;
