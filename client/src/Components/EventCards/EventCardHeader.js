import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const EventCardHeader = ({ header, onhandlePrevCard, onhandleNextCard }) => {
  return (
    <div className="flex-container">
      <h3>{header}</h3>
      <div className="buttons-container">
        <button onClick={onhandlePrevCard}>
          <FontAwesomeIcon icon={faAngleLeft} className="icon" />
        </button>
        <button onClick={onhandleNextCard}>
          <FontAwesomeIcon icon={faAngleRight} className="icon" />
        </button>
      </div>
    </div>
  );
};

export default EventCardHeader;
