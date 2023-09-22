import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const EventCardHeader = ({ header, onhandlePrevCard, onhandleNextCard }) => {
  return (
    <div className="flex-container">
      <h3>{header}</h3>
      <div className="buttons-container">
        <button
          onClick={onhandlePrevCard}
          role="button"
          aria-label="Previous Event"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="icon" />
        </button>
        <button
          onClick={onhandleNextCard}
          role="button"
          aria-label="Next Event"
        >
          <FontAwesomeIcon icon={faAngleRight} className="icon" />
        </button>
      </div>
    </div>
  );
};

export default EventCardHeader;
