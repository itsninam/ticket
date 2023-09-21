import { Link } from "react-router-dom";

const EventCard = ({ image, eventName, date, location, onClick, event }) => {
  return (
    <Link to={`event-details/${event}`}>
      <li className="event-card" onClick={onClick}>
        <span className="image-container">
          <img src={image} alt={eventName} />
        </span>
        <h4 className="event-name">{eventName}</h4>
        <span className="date-location">
          {date} &#x2022; {location}
        </span>
      </li>
    </Link>
  );
};

export default EventCard;
