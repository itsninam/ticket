const EventCard = ({ image, eventName, date, location }) => {
  return (
    <li className="event-card">
      <span className="image-container">
        <img src={image} alt={eventName} />
      </span>
      <h4 className="event-name">{eventName}</h4>
      <span className="date-location">
        {date} &#x2022; {location}
      </span>
    </li>
  );
};

export default EventCard;
