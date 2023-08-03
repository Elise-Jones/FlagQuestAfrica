import { FlagCard } from "../App/FlagCard/FlagCard";
import './Homepage.css';
export const Homepage = ({ singleFlag, setSingleFlag, addFlag, getFlag, setAlert, alert  }) => {
  
  // const handleClick =() => {
  //   const newFlag = singleFlag
  //   addFlag(newFlag)
  //   // setAlert("")
  //   getFlag()
  // }

  return (
    <div className="container">
      <FlagCard
        singleFlag={singleFlag}
        alert={alert}
        setAlert={setAlert}
        addFlag={addFlag}
        getFlag={getFlag}
      />
      <button onClick={getFlag}>Show me new </button>
      
    </div>
  );
};
