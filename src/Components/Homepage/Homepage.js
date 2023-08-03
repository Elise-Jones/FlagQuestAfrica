import { FlagCard } from "../App/FlagCard/FlagCard";
import './Homepage.css';
export const Homepage = ({ singleFlag, setSingleFlag, addFlag, getFlag, setAlert, alert  }) => {
  


  return (
    <main className="homepage-container">
      {/* img here */}
      <FlagCard
        singleFlag={singleFlag}
        setSingleFlag={setSingleFlag}
        alert={alert}
        setAlert={setAlert}
        getFlag={getFlag}
        addFlag={addFlag}
      />
    
    </main>
  );
};
