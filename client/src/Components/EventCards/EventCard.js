import { Link } from "react-router-dom";

const EventCard = ({ image, eventName, date, location, onClick, event }) => {
  return (
    <li className="event-card" onClick={onClick}>
      <Link to={`event-details/${event}`}>
        <span className="image-container">
          <img src={image} alt={eventName} />
        </span>
        <h4 className="event-name">{eventName}</h4>
        <span className="date-location">
          {date} &#x2022; {location}
        </span>
      </Link>
    </li>
  );
};

export default EventCard;
