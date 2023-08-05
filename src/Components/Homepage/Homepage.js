import { FlagCard } from "../App/FlagCard/FlagCard";
import './Homepage.css';
import PropTypes from 'prop-types';

export const Homepage = ({ singleFlag, setSingleFlag, addFlag, getFlag, alert, deleteFlag }) => {
  
  return (
    <main className="homepage-container">
      <FlagCard
        singleFlag={singleFlag}
        setSingleFlag={setSingleFlag}
        alert={alert}
        getFlag={getFlag}
        addFlag={addFlag}
        deleteFlag={deleteFlag}
      />
    </main>
  );
};

Homepage.propTypes = {
  singleFlag: PropTypes.shape({
    id: PropTypes.string,
    flagPic: PropTypes.string,
    name: PropTypes.string,
    altText: PropTypes.string,
    flagPng: PropTypes.string}),
  setSingleFlag: PropTypes.func.isRequired,
  alert: PropTypes.string,
  getFlag: PropTypes.func.isRequired,
  addFlag: PropTypes.func.isRequired,
  deleteFlag: PropTypes.func.isRequired,
}