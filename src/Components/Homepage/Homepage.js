import { FlagCard } from "../App/FlagCard/FlagCard";
import './Homepage.css';
export const Homepage = ({ singleFlag, addFlag, getFlag, setAlert, alert  }) => {

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
