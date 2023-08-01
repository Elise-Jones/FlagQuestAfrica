import './App.css';
import {fetchAfricanCountries} from "../../apiCalls"
// import { countryData, oneCountry } from '../../mockData';
import { cleanData, getRandomNumber } from '../../utils';
import { useEffect, useState } from 'react';

function App() {
  const [singleFlag, setSingleFlag] = useState([])
  
  useEffect(() => {
    fetchAfricanCountries().then((data) => {
      const country = getRandomNumber(data)
      const cleanedCountry = cleanData(country)
      setSingleFlag(cleanedCountry)
    })
  }, [])


  return (
    <div className="App">
      <h1>FlagQuest Africa</h1>
  
    </div>
  );
}

export default App;
